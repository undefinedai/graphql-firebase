import Link from "next/link"

export default function InstallationPage() {
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="display-4">Getting Started</h1>
              <p className="lead">
                How to get up and running with GraphQL Firebase, including
                information on how to connect it to Firebase Hosting to serve
                your api through a custom url.
              </p>
            </div>
          </div>
        </div>
      </div>
      <main className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h2>Installing GraphQL Firebase</h2>
            <p>Install GraphQL Firebase with npm or yarn:</p>
            <pre className="bg-light p-3 pre-scrollable">
              <code>
                <span className="text-muted">// with npm</span>
                <br />
                npm install @undefinedai/graphql-firebase
                <br />
                <br />
                <span className="text-muted">// or with yarn</span>
                <br />
                yarn add @undefinedai/graphql-firebase
              </code>
            </pre>
            <h2>Initializing Your GraphQL Server</h2>
            <p>
              Your GraphQL server is ready to go - you just need to add it to a
              Firebase Function and optionally connect it to Firebase Hosting if
              you want a custom url.
            </p>
            <p>
              You can use whatever function name you want - for our examples, we
              use <code>graphql</code> but that&#8217;s not a requirement. In
              your Firebase Functions code, add the following.
            </p>
            <pre className="bg-light p-3 pre-scrollable">
              <code>
                <span className="text-muted">
                  // We use ES6+ and typescript in our projects,
                  <br />
                  // but you can adjust this to use commonjs
                </span>
                <br />
                <br />
                {`import * as functions from "firebase-functions"`}
                <br />
                <br />
                {`import { GraphQLFirebase } from "@undefinedai/graphql-firebase"`}
                <br />
                <br />
                {`export const graphql = functions.https.onRequest(GraphQLFirebase())`}
              </code>
            </pre>
            <p>
              The above code creates a Firebase HTTP Function. If you fire up
              your emulator or deploy now, you&#8217;ll have a fully functioning
              GraphQL server with a MockQL server, playgrounds for each, and a
              GraphQL Voyager to visualize your graph.
            </p>
            <p>
              Of course, it doesn&#8217;t have any of <em>your</em> data or
              functions yet, so let&#8217;s look at{" "}
              <Link href="/options">
                <a>how you can customize your GraphQL Firebase</a>
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
