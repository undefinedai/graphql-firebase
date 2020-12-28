import Link from "next/link"

export default function OptionsDisablePagesPage() {
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="display-4">Disabling Features</h1>
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
              If you don&#8217;t want to use the dashboard, voyager,
              playgrounds, or the MockQL server, you can easily disable any or
              all of them. In fact, the only feature you <em>can&#8217;t</em>{" "}
              disable is the graphql server itself. After all, it <em>is</em>{" "}
              our namesake &ndash; GraphQL Firebase doesn&#8217;t really make
              sense without the "graphql".
            </p>
            <p>
              For example, to disable the dashboard page and GraphQL Voyager:
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

export const graphql = functions.https.onRequest(GraphQLFirebase({ 
  disableDashboard: true,
  disableVoyager: true
}))`}
              </code>
            </pre>
            <p>
              When you disable a feature, it simply doesn&#8217;t exist. For
              example, GraphQL Voyager appears at <code>/voyager</code> (unless
              you{" "}
              <Link href="/options/customize-paths">
                <a>customize its path to something else</a>
              </Link>
              ). If you pass <code>disableVoyager: true</code>, visiting that
              path will result in a 404 and any{" "}
              <Link href="/options/customize-paths">
                <a>middleware you may have passed</a>
              </Link>{" "}
              with <code>voyagerMiddleware</code> simply won&#8217;t run.
            </p>
            <p>
              Also note &ndash; if you pass <code>disableMockQL: true</code>,
              this will disable your MockQL server <em>and</em> will disable the
              MockQL playground. In case it&#8217;s not obvious why &ndash;
              there is no point in having a MockQL playground if there&#8217;s
              no MockQL server to talk to.
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
              <li>Disable the pages</li>
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
