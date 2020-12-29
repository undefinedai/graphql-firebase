import Link from "next/link"

export default function OptionsCustomizePathsPage() {
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="display-4">Customizing Paths</h1>
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
              You have almost total control over what paths are used for the
              GraphQL Firebase resources created. Let&#8217;s start with how
              they are served up out of the box:
            </p>
            <dl className="row">
              <dt className="col-6 col-md-4">
                <code>/</code>
              </dt>
              <dd className="col-6 col-md-8">Dashboard Endpoint</dd>
              <dt className="col-6 col-md-4">
                <code>/graphql</code>
              </dt>
              <dd className="col-6 col-md-8">GraphQL Endpoint</dd>
              <dt className="col-6 col-md-4">
                <code>/mockql</code>
              </dt>
              <dd className="col-6 col-md-8">MockQL Endpoint</dd>
              <dt className="col-6 col-md-4">
                <code>/playground/graphql</code>
              </dt>
              <dd className="col-6 col-md-8">GraphQL Playground Endpoint</dd>
              <dt className="col-6 col-md-4">
                <code>/playground/mockql</code>
              </dt>
              <dd className="col-6 col-md-8">MockQL Playground Endpoint</dd>
              <dt className="col-6 col-md-4">
                <code>/voyager</code>
              </dt>
              <dd className="col-6 col-md-8">GraphQL Voyager Endpoint</dd>
            </dl>
            <p>
              We say that you have "almost total control" because there are two
              caveats:
            </p>
            <ul>
              <li>
                You can&#8217;t have any naming conflicts, which means (for
                example), you can&#8217;t have <code>/foo</code> as both your
                GraphQL Endpoint and your Voyager Endpoint
              </li>
              <li>
                Paths are relative to the root of your application. So if you
                configure your server in a way that results in GraphQL Firebase
                running in the <code>/bar</code> subdirectory, you <em>may</em>{" "}
                need to prefix your paths with <code>/bar</code>.
              </li>
            </ul>
            <h2>Moving and renaming things</h2>
            <p>
              Let&#8217;s say you want to change your playground and voyager
              paths all to fall under a subdirectory path{" "}
              <code>/resources</code>, but that you also want to change the
              voyager path to visualizer:
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
  graphPlaygroundEndpoint: "/resources/playground/graphql",
  mockPlaygroundEndpoint: "/resources/playground/mockql",
  voyagerEndpoint: "/resources/visualizer"
}))`}
              </code>
            </pre>
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
