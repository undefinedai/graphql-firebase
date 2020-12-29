import Link from "next/link"

export default function OptionsHeadersPage() {
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="display-4">Playground &amp; Voyager Headers</h1>
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
              If you&#8217;re using one/some of the{" "}
              <Link href="/options/middleware">
                <a>middleware options</a>
              </Link>{" "}
              to verify headers or cookies, or for some other way of
              authenticating requests, you will need to pass this (or a similar)
              authentication to the playgrounds and voyager so they can
              communicate with your graphql and/or mockql endpoints.
            </p>
            <h2>Why Headers?</h2>
            <p>
              Not really <em>Why use headers</em>, but more of a question of{" "}
              <em>Why we need to use headers</em>? The playgrounds and voyager
              make <code>POST</code> requests to your endpoints. The{" "}
              <code>body</code> of the request is your query (or an
              introspection query for voyager), but the request also includes
              optional headers. If you're using a middleware to require a valid
              token as a header, you&#8217;ll need to pass that through the
              playground or voyager so they can make authenticated requests.
            </p>
            <p>As an example...</p>
            <h2>
              Using <code>graphPlaygroundHeaders</code> (or{" "}
              <code>mockPlaygroundHeaders</code> or <code>voyagerHeaders</code>)
            </h2>
            <p>
              In <code>graphMiddleware</code>, you{" "}
              <Link href="/options/middleware#verify-request-headers">
                <a>verified Firebase ID Tokens</a>
              </Link>{" "}
              passed as a header ("X-Token") before allowing access to the
              graphql endpoint. Now, you&#8217;ll want to send that token to
              your playground as well so it can make authenticated requests. To
              do so, <code>graphPlaygroundHeaders</code> takes a function that
              returns a JSON object of headers to include in the request.
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
import * as admin from "firebase-admin"

import { GraphQLFirebase } from "@undefinedai/graphql-firebase"

const graphPlaygroundHeaders = (req: express.Request) => {
  const idToken = req.get("X-Token")
  return {
    "X-Token": idToken
  }
}

export const graphql = functions.https.onRequest(GraphQLFirebase({ 
  graphPlaygroundHeaders
}))`}
              </code>
            </pre>
            <p>
              So now, in the full circle of life, here&#8217;s how it works:
            </p>
            <ul>
              <li>
                A request with an "X-Token" header is made to the playground
              </li>
              <li>
                The "X-Token" header is used in the playground&#8217;s query to
                the graphql endpoint
              </li>
              <li>
                The graphql endpoint&#8217;s middleware authenticates the
                "X-Token" header and processes the request
              </li>
            </ul>
            <h2>
              But how do I add headers to my requests on the GraphQL Firebase
              pages?
            </h2>
            <p>
              That&#8217;s a great question. Authentication is hard work. So
              we&#8217;ve provided you a number of options here:
            </p>
            <ul>
              <li>
                <Link href="/options/disable-features">
                  <a>Disable the pages</a>
                </Link>
              </li>
              <li>Customize the templates to add your authentication</li>
              <li>Override the templates completely</li>
            </ul>
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
