# GraphQL Firebase - Beta

This is a beta version of GraphQL Firebase. It is mostly stable, but we may introduce changes that are backwards incompatible. You likely want to wait until version 1.0.0 or higher before using this in production.

GraphQL Firebase is the fastest, easiest, and most extensible way to add a GraphQL server to your Firebase Functions and an optional web app to visualize your graph and to run queries against live or mock data.

- A full-featured [GraphQL server](https://github.com/graphql/express-graphql)
- Optional "MockQL" server
- Separate [GraphQL Playgrounds](https://github.com/graphql/graphql-playground) for live and mock servers
- [GraphQL Voyager](https://github.com/APIs-guru/graphql-voyager) to visualize your graph
- Highly flexible API so you can customize it to your needs
- Easily connect it to Firebase Hosting for a custom domain
- Built in typescript types

## Installation

In your Firebase Functions project:

```sh
npm i @undefinedai/graphql-firebase
```

or

```sh
yarn install @undefined/graphql-firebase
```

## Basic Use

In the main `index.js` or `index.ts` of your functions, simply create a new HTTP OnRequest function and connect `GraphQLFirebase`:

```typescript
// Using requires
const functions = require("firebase-functions")

const { GraphQLFirebase } = require("@undefinedai/graphql-firebase")

exports.graphql = functions.https.onRequest(GraphQLFirebase())
```

```typescript
// Or with imports
import * as functions from "firebase-functions"

import { GraphQLFirebase } from "@undefinedai/graphql-firebase"

export const graphql = functions.https.onRequest(GraphQLFirebase())
```

That's it! You now have a working GraphQL server with a MockQL server, playgrounds, and GraphQL voyager.

### Optional: Connecting it to Firebase Hosting

To use a custom domain (_eg._, example.com), connect your function in Firebase Hosting using the `firebase.json` file:

```
"hosting": {
  "public": "functions/node_modules/@undefinedai/graphql-firebase/public",
  "rewrites": [
    {
      "source": "**",
      "function": "graphql"
    }
  ],
}
```

This gives you the following urls out of the box:

- `example.com/graphql` - Your GraphQL server
- `example.com/mockql` - Your MockQL server
- `example.com/playground/graphql` - A GUI to test/run GraphQL queries against your live server
- `example.com/playground/mockql` - A GUI to test/run GraphQL queries against your mock server
- `example.com/voyager` - A GraphQL Voyager to visualize your graph

**NOTE:** The "public" directory above is just an example. You should set this to whatever directory you want to serve up hosting assets from (like if you add additional scripts or a favicon to your web app using the options below).

If you don't have any other files and just want to use the GraphQL Firebase package as-is, we have included this empty directory in the package because Firebase Hosting _requires_ you to set a directory when deploying. It can be empty, but it must be present.

### Public Files When Using Firebase Hosting

When using Firebase Hosting and configuring your Firebase Function, any paths to your custom scripts or public files are relative to your _hosting_ root, not your _function_ root.

How you call your function in Firebase Hosting will determine the path to your public files. Using the `firebase.json` above, Firebase Hosting will serve our function as its home page from the hosting root, so any public files would be relative to that path.

If you wanted to serve up a public file from hosting that was located in (for example) a `/static` directory, the path to that file when calling it from your Firebase Function is relative to where the function is being served, which in our case above is from the root. Using the function to serve the file would be as simple as:

```typescript
// See the `additionalRoutes` option for more on this
const router = express.Router()
router.use(
  "/favicon.ico",
  express.static(join(__dirname, "./static/favicon.png"))
)
```

This will feel odd because you're referencing a relative path in your functions code, but won't actually have that `static/favicon.png` in your functions - it will be in your hosting. Just run with it - it will work once you wire them up together.

(You can use the Firebase Functions and Hosting emulators to test it out locally.)

## What is a MockQL Server?

A MockQL server is your exact graphql server, but it serves up mock data instead of using your actual resolvers. You can run your same queries, mutations, etc, but you'll receive mock data back.

## Configuration & Options

The `GraphQLFirebase` function takes an optional object as an argument for you to customize your GraphQL server. GraphQL Firebase works out of the box, but has no authentication set up. Though each one of these is optional, you'll definitely want to set up some authentication middleware or process before deploying live.

### additionalRoutes: `Router`

_Default: `undefined`_

You can pass in an additional Express router to add more pages and routes to your function, for customizations like adding a favicon, or to use any other Express functionality after your graphql server is configured. (If you want to customize Express _before_ the graphql server is configured, see the `globalMiddleware` option).

```typescript
const router = express.Router()

router.use(
  "/favicon.ico",
  express.static(join(__dirname, "./public/favicon.png"))
)

export const graphql = functions.https.onRequest(
  GraphQLFirebase({
    additionalRoutes: router,
  })
)
```

### dashboardEndpoint: `string`

_Default: `""`_

The dashboard is a simple web page with links to the playgrounds and GraphQL Voyager. By default, it is served up as your web app's home page, but you can change that path here.

**NOTE:** If you disable the playgrounds and GraphQL Voyager using their configuration options, the dashboard will automatically be disabled (as there's no need for a web page with no content!)

### dashboardTemplate: `string`

_Default: `@undefinedai/graphql-firebase/views/dashboard`_

### disableMockQL: `boolean`

_Default: `false`_

Set this to `true` if you want to completely disable the mockql server and playground.

### disablePlaygrounds: `boolean`

_Default: `false`_

Set this to `true` if you want to completely disable playgrounds. This will not disable the servers, just the client-facing playgrounds provided which means any and all interaction with your servers will have to be programmatic.

### disableVoyager: `boolean`

_Default: `false`_

Set this to `true` to disable the GraphQL Voyager graph visualization tool.

### fourOhFourTheRest: `boolean`

_Default: `false`_

By default, GraphQL Firebase doesn't assume anything about how you want to serve up any resources other than the built-in functionality. Set this to `true` if want to serve up 404 pages for any missing paths on your Firebase GraphQL web app.

When `true`, this runs at the very end of the set-up which means you can add your own paths, routes, and additional functionality (using `additionalRoutes`) served up.

### globalMiddleware: `RequestHandler` | `RequestHandler[]`

_Default: `[]`_

Adds your custom express middleware function(s) at the beginning of the set-up that will apply to _all_ endpoints on your server. This is where you'd set up any global logging or authentication verification if you wanted it to apply to all paths on your graphql server and web app.

You can pass in any Express middleware here - either a single middleware or an array of middlewares.

If you want to apply middleware to any single path, see the various path-specific middleware options (_eg._, `graphMiddleware`, `mockPlaygroundMiddleware`, etc.)

### graphEndpoint: `string`

_Default: `graphql`_

The path from which your graphql server will be served. By default, your server will be available at `{hostingurl}/graphql`.

### graphMiddleware: RequestHandler | RequestHandler[]

_Default: `[]`_

Adds your custom express middleware function(s) only to the live graphql server at the `graphEndpoint`.

```typescript
// Require a valid JWT passed as a header named `x-token` on all production graphql queries
function myJWTMiddleware(req, res, next) {
  const token = req.header("x-token")
  // Pass token to some function to validate & verify
  if (isValid(token)) {
    next()
  } else {
    throw new Error("What a bad token!")
  }
}

// Only verify tokens on the requests to the live graphql server, not the mock server
export const graphql = functions.https.onRequest(
  GraphQLFirebase({
    graphMiddleware: myJWTMiddleware,
  })
)
```

Keep in mind - any middleware you run here will be used when you're accessing the graphql playground (not the mockql one) and GraphQL Voyager because those services interact with the graphql server.

### graphPlaygroundHeaders: (req: Request) => GraphQLFirebaseHeaders

_Default: `() => ({})`_

This function runs just before the GraphQL Playground is loaded and passes a simplified JSON object to the playground which it will use as headers in its request to the graphql server. The JSON object can have any valid header string for the key, but only acceps strings, numbers, and booleans for the value.

You might use this in conjunction with the `graphMiddleware` and `graphPlaygroundMiddleware` options. In the `graphMiddleware` example, we verify a JWT header before allowing the user to interact with the graphql server. In the `graphPlaygroundMiddleware` example, we verify a JWT header before allowing the user to interact with the graphql playground.

In order to pass that JWT header through the playground to the graphql server, we have to set it as a header on the playground's requests, and that's what this option is for.

```typescript
// Require a valid JWT passed as a header named `x-token` on all production graphql queries
function myJWTMiddleware(req, res, next) {
  const token = req.header("x-token")
  // Pass token to some function to validate & verify
  if (isValid(token)) {
    next()
  } else {
    throw new Error("What a bad token!")
  }
}

// Give the token to the playground so it can use it in its queries
function passTokenAsHeader(req) {
  const token = req.header("x-token")
  return {
    "x-token": token,
  }
}

// Only verify tokens on the requests to the live graphql server, not the mock server
export const graphql = functions.https.onRequest(
  GraphQLFirebase({
    graphMiddleware: myJWTMiddleware,
    graphPlaygroundHeaders: passTokenAsHeader,
    graphPlaygroundMiddleware: myJWTMiddleware,
  })
)
```

### graphPlaygroundMiddleware: RequestHandler | RequestHandler[]

_Default: `[]`_

Middleware you pass here will run before the GraphQL Playground loads up. For example, you may want to verify a user's permissions before allowing them to use the playground, or you may need to access or configure request headers that your playground needs to send to the graphql server.

### introspectionQuery: string

_Default: [See included query](introspection-query.ts)_

Use by GraphQL Voyager to create your server's graph visualization. GraphQL Firebase includes a commonly used general purpose introspection query, but you can pass your own if it doesn't suite your needs.

```typescript
export const graphql = functions.https.onRequest(
  GraphQLFirebase({
    introspectionQuery: `query IntrospectionQuery {...}`,
  })
)
```

### mockEndpoint: string

_Default: `mockql`_

The path from which your mockql server will be served. By default, your mockql server will be available at `{hostingurl}/mockql`.

### mockMiddleware: RequestHandler | RequestHandler[]

_Default: `[]`_

Adds your custom express middleware function(s) only to the mockql server at the `mockEndpoint`. Works the same as the `graphMiddleware` option, but for your mockql server.

### mockPlaygroundHeaders: (req: Request) => GraphQLFirebaseHeaders

_Default: `() => ({})`_

This function runs just before the MockQL Playground is loaded and passes a simplified JSON object to the playground which it will use as headers in its request to the graphql server. The JSON object can have any valid header string for the key, but only acceps strings, numbers, and booleans for the value.

Works the same as the `graphPlaygroundHeaders` but on your mockql playground. See that option for examples.

### mockPlaygroundMiddleware: RequestHandler | RequestHandler[]

_Default: `[]`_

Middleware you pass here will run before the MockQL Playground loads up. For example, you may want to verify a user's permissions before allowing them to use the playground, or you may need to access or configure request headers that your playground needs to send to the graphql server.

### mocks: IMocks

_Default: [See the mocks in the code](dev-schema.ts)_

Mock query results with your own fake data - great for testing, but also a great way to provide front-end engineers endpoints and data while the back-end team is working on wiring things up.

See the mocks in the source code for a simple example, but also check out [Mocking](https://www.graphql-tools.com/docs/mocking/) from the GraphQL website.

### playgroundPrefix: string

_Default: `playground`_

Out of the box, your playgrounds will be accessible at `/playground/graphql` and `/playground/mockql`. You can customize the `playground` prefix with this option.

### preserveResolvers: boolean

_Default: `false`_

This option affects what data your MockQL server serves up. If `true`, the MockQL server will respond to queries with actual, live graphql results if resolvers for the query exist, and will only serve up mock data for resolvers that do not yet exist.

By default, this option is set to `false` meaning your MockQL server will always use fake results.

### schema: GraphQLSchema

_Default: [See the schema in the code](dev-schema.ts)_

Pass in your schema here. We provide a base, fake schema so that your server works out of the box. Once you pass your own schema here, our fake schema is no longer loaded.

### voyagerCredentials: "omit" | "same-origin" | "include"

_Default: `same-origin`_

GraphQL Voyager uses `fetch` to ping your GraphQL server for data to build its visualization. If you need Voyager to pass credentials with its request, you can customize how they're passed here.

### voyagerEndpoint: string

_Default: `voyager`_

The path from which GraphQL Voyager will be served. By default, GraphQL Voyager will be available at `{hostingurl}/voyager`.

### voyagerHeaders: (req: Request) => GraphQLFirebaseHeaders

_Default: `() => ({})`_

This function runs just before GraphQL Voyager is loaded and passes a simplified JSON object to Voyager which it will use as headers in its request to the graphql server. The JSON object can have any valid header string for the key, but only acceps strings, numbers, and booleans for the value.

Works the same as the `graphPlaygroundHeaders` but on your GraphQL Voyager. See that option for examples.

### voyagerMiddleware: RequestHandler | RequestHandler[]

_Default: `[]`_

Middleware you pass here will run before GraphQL Voyager loads up. For example, you may want to verify a user's permissions before allowing them to use Voyager, or you may need to access or configure request headers that Voyager needs to access the graphql server.
