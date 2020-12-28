import Link from "next/link"

export default function OptionsPage() {
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="display-4">GraphQL Firebase Options</h1>
              <p className="lead">
                We&#8217;ve tried to anticipate the many ways we and you might
                customize GraphQL Firebase and added options to make it easy to
                do so.
              </p>
            </div>
          </div>
        </div>
      </div>
      <main className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <p>
              We&#8217;ve included a ton of options so you can customize your
              GraphQL Firebase. Below this list of options, we&#8217;ve tried to
              organize them by need and provide more detail on subsequent pages.
              GraphQL Firebase is only a few files; so, don&#8217;t be afraid to{" "}
              <a href="https://github.com/undefinedai/graphql-firebase/tree/docs/module">
                jump into the source code
              </a>{" "}
              and poke around to see how it works inside.
            </p>
            <h2>All the Options</h2>
            <pre className="bg-light p-3">
              <code>
                {`{
  additionalRoutes?: Router
  dashboardEndpoint?: string
  dashboardTemplate?: string
  disableDashboard?: boolean
  disableMockQL?: boolean
  disablePlaygrounds?: boolean
  disableVoyager?: boolean
  fourOhFourTheRest?: boolean
  globalMiddleware?: RequestHandler | RequestHandler[]
  graphEndpoint?: string
  graphMiddleware?: RequestHandler | RequestHandler[]
  graphPlaygroundHeaders?: (req: Request) => GraphQLFirebaseHeaders
  graphPlaygroundMiddleware?: RequestHandler | RequestHandler[]
  introspectionQuery?: string
  mockEndpoint?: string
  mockMiddleware?: RequestHandler | RequestHandler[]
  mockPlaygroundHeaders?: (req: Request) => GraphQLFirebaseHeaders
  mockPlaygroundMiddleware?: RequestHandler | RequestHandler[]
  mocks?: IMocks
  playgroundPrefix?: string
  playgroundTemplate?: string
  preserveResolvers?: boolean
  schema?: GraphQLSchema
  voyagerCredentials?: "omit" | "same-origin" | "include"
  voyagerEndpoint?: string
  voyagerHeaders?: (req: Request) => GraphQLFirebaseHeaders
  voyagerMiddleware?: RequestHandler | RequestHandler[]
  voyagerTemplate?: string
}`}
              </code>
            </pre>
            <p>
              If you&#8217;re not familiar with Typescript, the `<code>?</code>`
              just means that it&#8217;s optional. You technically don&#8217;t
              have to pass any options to at least get up and running.
            </p>
            <h2>How Do I...</h2>
            <p>
              Some of the options would have the exact same documentation, so
              we&#8217;ve grouped the docs into more of a "how-to" instead. For
              example, <code>graphPlaygroundMiddleware</code> works exactly the
              same as <code>mockPlaygroundMiddleware</code>, just on different
              endpoints (the first affects just the GraphQL server, the second
              affects just the MockQL server). No sense in us writing
              documentation twice.
            </p>
            <div className="list-group">
              <Link href="/options/mocks-schema">
                <a className="list-group-item list-group-item-action">
                  <h5 className="mb-1">
                    Add my own schema and mocks to GraphQL Firebase?
                  </h5>
                  <small>
                    <code>mocks</code>, <code>preserveResolvers</code>,{" "}
                    <code>schema</code>
                  </small>
                </a>
              </Link>
              <Link href="/options/middlware">
                <a className="list-group-item list-group-item-action">
                  <h5 className="mb-1">Add logging or security middleware?</h5>
                  <small>
                    <code>globalMiddleware</code>, <code>graphMiddleware</code>,{" "}
                    <code>graphPlaygroundMiddleware</code>,{" "}
                    <code>mockMiddleware</code>,{" "}
                    <code>mockPlaygroundMiddleware</code>,{" "}
                    <code>voyagerMiddleware</code>
                  </small>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
