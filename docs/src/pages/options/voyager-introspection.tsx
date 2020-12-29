import Link from "next/link"

export default function OptionsVoyagerQueryPage() {
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="display-4">Voyager Introspection</h1>
              <p className="lead">
                <Link href="/options">
                  <a>&larr; Back to all options</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <main className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <p>
              In order to create its visualization, Voyager needs to send an
              "introspection query" to your GraphQL server. We have included a
              sensible default which should work for the majority of cases, but
              if it doesn&#8217;t serve your needs, you can supply your own
              introspection query with the <code>introspectionQuery</code>{" "}
              option.
            </p>
            <pre className="bg-light p-3">
              <code>
                <span className="text-muted">
                  // We use ES6+ and typescript in our projects,
                  <br />
                  // but you can adjust this to use commonjs
                </span>
                <br />
                <br />
                {`import * as functions from "firebase-functions"

import { GraphQLFirebase } from "@undefinedai/graphql-firebase"

const introspectionQuery = \`query IntrospectionQuery {
  __schema {
    // ...
  }
}\`

export const graphql = functions.https.onRequest(GraphQLFirebase({ 
  introspectionQuery
}))`}
              </code>
            </pre>
            <h2>Voyager Credentials</h2>
            <p>
              Voyager uses javascript&#8217;s <code>fetch</code> to query your
              api. By default, we set the <code>credentials</code> option in
              fetch to <code>same-origin</code>. You can change this to{" "}
              <code>omit</code> or <code>include</code> if one of those serves
              your needs better.
            </p>
            <p>
              <Link href="/options">
                <a>&larr; Back to all options</a>
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
