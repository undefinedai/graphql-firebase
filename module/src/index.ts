import express, {
  Express,
  Request,
  RequestHandler,
  Response,
  Router,
} from "express"
import cors from "cors"
import { join } from "path"
import { GraphQLSchema } from "graphql"
import { graphqlHTTP } from "express-graphql"
import { makeExecutableSchema } from "@graphql-tools/schema"
import { addMocksToSchema, IMocks, IMockOptions } from "@graphql-tools/mock"

import ConfigMiddleware from "./config-middleware"
import defaultIntrospectionQuery from "./introspection-query"
import { mocks, resolvers, typeDefs } from "./dev-schema"

export type GraphQLFirebaseHeaders = {
  [key: string]: boolean | number | string
}

export interface GraphQLFirebaseConfig {
  additionalRoutes?: Router
  dashboardEndpoint?: string
  dashboardMiddleware?: RequestHandler | RequestHandler[]
  dashboardTemplate?: string
  disableDashboard?: boolean
  disableMockQL?: boolean
  disablePlaygrounds?: boolean
  disableVoyager?: boolean
  fourOhFourMiddleware?: RequestHandler | RequestHandler[]
  fourOhFourTheRest?: boolean
  globalMiddleware?: RequestHandler | RequestHandler[]
  graphEndpoint?: string
  graphMiddleware?: RequestHandler | RequestHandler[]
  graphPlaygroundEndpoint?: string
  graphPlaygroundHeaders?: (req: Request) => GraphQLFirebaseHeaders
  graphPlaygroundMiddleware?: RequestHandler | RequestHandler[]
  introspectionQuery?: string
  mockEndpoint?: string
  mockMiddleware?: RequestHandler | RequestHandler[]
  mockPlaygroundEndpoint?: string
  mockPlaygroundHeaders?: (req: Request) => GraphQLFirebaseHeaders
  mockPlaygroundMiddleware?: RequestHandler | RequestHandler[]
  mocks?: IMocks
  playgroundTemplate?: string
  preserveResolvers?: boolean
  schema?: GraphQLSchema
  voyagerCredentials?: "omit" | "same-origin" | "include"
  voyagerEndpoint?: string
  voyagerHeaders?: (req: Request) => GraphQLFirebaseHeaders
  voyagerMiddleware?: RequestHandler | RequestHandler[]
  voyagerTemplate?: string
}
/**
 * The primary function for your GraphQL server and web application. You should
 * connect this to a Firebase onRequest function and optionally serve it up using Firebase
 * Hosting if you want a custom domain.
 *
 * ```typescript
 * // Example Usage
 *
 * // Works out of the box (with no authentication and sample data)
 * export const graphql = functions.https.onRequest(GraphQLFirebase())
 * ```
 *
 * ```typescript
 * // With a custom GraphQL schema
 * const schema = makeExecutableSchema({
 *   resolvers,
 *   typeDefs,
 * })
 * export const graphql = functions.https.onRequest(GraphQLFirebase({
 *   schema
 * }))
 * ```
 *
 */
export function GraphQLFirebase({
  additionalRoutes,
  dashboardEndpoint = "",
  dashboardMiddleware = [],
  dashboardTemplate,
  disableDashboard = false,
  disableMockQL = false,
  disablePlaygrounds = false,
  disableVoyager = false,
  fourOhFourMiddleware = [],
  fourOhFourTheRest = true,
  globalMiddleware,
  graphEndpoint = "graphql",
  graphMiddleware = [],
  graphPlaygroundEndpoint = "playground/graphql",
  graphPlaygroundHeaders = () => ({}),
  graphPlaygroundMiddleware = [],
  introspectionQuery = defaultIntrospectionQuery,
  mockEndpoint = "mockql",
  mockMiddleware = [],
  mockPlaygroundEndpoint = "playground/mockql",
  mockPlaygroundHeaders = () => ({}),
  mockPlaygroundMiddleware = [],
  mocks: providedMocks,
  playgroundTemplate,
  preserveResolvers = false,
  schema: providedSchema,
  voyagerCredentials = "same-origin",
  voyagerEndpoint = "voyager",
  voyagerHeaders = () => ({}),
  voyagerMiddleware = [],
  voyagerTemplate,
}: GraphQLFirebaseConfig = {}): Express {
  const app = express()
  app.set("view engine", "pug")
  app.set("views", join(__dirname, "views"))
  app.locals.basedir = __dirname

  app.use(cors({ origin: true }))

  if (globalMiddleware) {
    app.use(globalMiddleware)
  }

  const schema =
    providedSchema ||
    makeExecutableSchema({
      resolvers,
      typeDefs,
    })

  const finalDashboardEndpoint = dashboardEndpoint.replace(/^\/+|\/+$/g, "")
  const finalGraphEndpoint = graphEndpoint.replace(/^\/+|\/+$/g, "")
  const finalGraphPlaygroundEndpoint = graphPlaygroundEndpoint.replace(
    /^\/+|\/+$/g,
    ""
  )
  const finalMockEndpoint = mockEndpoint.replace(/^\/+|\/+$/g, "")
  const finalMockPlaygroundEndpoint = mockPlaygroundEndpoint.replace(
    /^\/+|\/+$/g,
    ""
  )
  const finalVoyagerEndpoint = voyagerEndpoint.replace(/^\/+|\/+$/g, "")

  app.use(
    ConfigMiddleware({
      dashboardEndpoint: finalDashboardEndpoint,
      disableDashboard: disableDashboard,
      disableMockQL: disableMockQL,
      disablePlaygrounds: disablePlaygrounds,
      disableVoyager: disableVoyager,
      graphEndpoint: finalGraphEndpoint,
      graphPlaygroundEndpoint: finalGraphPlaygroundEndpoint,
      mockEndpoint: finalMockEndpoint,
      mockPlaygroundEndpoint: finalMockPlaygroundEndpoint,
      voyagerEndpoint: finalVoyagerEndpoint,
    })
  )

  app.use(
    `/${finalGraphEndpoint}`,
    graphMiddleware,
    graphqlHTTP({ graphiql: false, schema })
  )
  if (disableMockQL === false) {
    const mockOptions: IMockOptions = {
      schema,
      preserveResolvers,
    }
    if (providedMocks) {
      mockOptions.mocks = providedMocks
    } else if (!providedSchema) {
      mockOptions.mocks = mocks
    }
    const mockSchema = addMocksToSchema(mockOptions)
    app.use(
      `/${finalMockEndpoint}`,
      mockMiddleware,
      graphqlHTTP({ graphiql: false, schema: mockSchema })
    )
  }
  if (disablePlaygrounds === false) {
    app.get(
      `/${finalGraphPlaygroundEndpoint}`,
      graphPlaygroundMiddleware,
      function (req: Request, res: Response) {
        const headers = graphPlaygroundHeaders(req)
        res.render(playgroundTemplate || join(__dirname, "views/playground"), {
          endpoint: finalGraphEndpoint,
          headers: JSON.stringify(headers),
          pageTitle: "GraphQL Playground",
        })
      }
    )
    if (disableMockQL === false) {
      app.get(
        `/${finalMockPlaygroundEndpoint}`,
        mockPlaygroundMiddleware,
        function (req: Request, res: Response) {
          const headers = mockPlaygroundHeaders(req)
          res.render(
            playgroundTemplate || join(__dirname, "views/playground"),
            {
              endpoint: finalMockEndpoint,
              headers: JSON.stringify(headers),
              pageTitle: "MockQL Playground",
            }
          )
        }
      )
    }
  }
  if (disableVoyager === false) {
    app.get(
      `/${finalVoyagerEndpoint}`,
      voyagerMiddleware,
      function (req: Request, res: Response) {
        const headers = voyagerHeaders(req)
        if (
          !headers.hasOwnProperty("Accept") ||
          !headers.hasOwnProperty("accept")
        ) {
          headers["Accept"] = "application/json"
        }
        if (
          !headers.hasOwnProperty("Content-Type") ||
          !headers.hasOwnProperty("content-type")
        ) {
          headers["Content-Type"] = "application/json"
        }
        res.render(voyagerTemplate || join(__dirname, "views/voyager"), {
          credentials: voyagerCredentials,
          endpoint: finalGraphEndpoint,
          headers: JSON.stringify(headers),
          introspectionQuery,
          pageTitle: "GraphQL Voyager",
        })
      }
    )
  }

  if (
    disableDashboard === false &&
    (disablePlaygrounds === false || disableVoyager === false)
  ) {
    app.get(
      `/${finalDashboardEndpoint}`,
      dashboardMiddleware,
      function (_: Request, res: Response) {
        res.render(dashboardTemplate || join(__dirname, "views/dashboard"), {
          disablePlaygrounds,
          disableMockQL,
          disableVoyager,
          graphPlaygroundEndpoint: finalGraphPlaygroundEndpoint,
          mockPlaygroundEndpoint: finalMockPlaygroundEndpoint,
          voyagerEndpoint: finalVoyagerEndpoint,
        })
      }
    )
  }

  if (additionalRoutes) {
    app.use(additionalRoutes)
  }

  if (fourOhFourTheRest) {
    app.all("*", fourOhFourMiddleware, function (_: Request, res: Response) {
      res.status(404).render(join(__dirname, "views/error"), {
        errorCode: res.statusCode,
        errorTitle: "Resource Not Found",
        errorMessage:
          "The requested resource could not be found. Please check the url and try again.",
      })
    })
  }

  return app
}

export { loadFilesSync } from "@graphql-tools/load-files"
export { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge"
export { makeExecutableSchema } from "@graphql-tools/schema"
