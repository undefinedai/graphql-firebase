import Link from "next/link"

export default function OptionsMiddlewarePage() {
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="display-4">Global and Specific Middleware</h1>
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
              With GraphQL Firebase, you have middlewares galore. Let&#8217;s
              start with the <code>globalMiddleware</code> option.
            </p>
            <h2>
              Using <code>globalMiddleware</code>
            </h2>
            <p>
              With this option, you can add any{" "}
              <a href="https://expressjs.com/en/guide/using-middleware.html">
                Express middleware
              </a>{" "}
              to your GraphQL Firebase. Adding middleware here will apply to{" "}
              <em>all</em> of your endpoints. This might be a good place to, for
              example, add some analytics if you want to log every request that
              comes no matter what the request is (graphql, mockql, playground,
              voyager - whatever).
            </p>
            <p>
              You can pass a single middleware function, or an array of
              functions. If passing an array, your <code>globalMiddleware</code>{" "}
              will run in order before any other middleware and before any of
              the GraphQL Firebase responses are handled.
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

const loggingMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log("Time:", Date.now())
  next()
}

export const graphql = functions.https.onRequest(GraphQLFirebase({ 
  globalMiddleware: loggingMiddleware
}))`}
              </code>
            </pre>
            <h2>Using Path-Specific Middleware</h2>
            <p>
              For each "path" created by GraphQL Firebase, you can pass any
              custom middleware and have it applied just to that path. With
              everything enabled, GraphQL Firebase has the following middleware
              options for the following paths:
            </p>
            <dl className="row">
              <dt className="col-md-5 col-xl-4">
                <code>dashboardMiddleware</code>
              </dt>
              <dd className="col-md-7 col-xl-8">
                Runs just before a user accesses the dashboard page
              </dd>
              <dt className="col-md-5 col-xl-4">
                <code>fourOhFourMiddleware</code>
              </dt>
              <dd className="col-md-7 col-xl-8">
                Runs just before serving up the GraphQL Firebase 404 page
              </dd>
              <dt className="col-md-5 col-xl-4">
                <code>graphMiddleware</code>
              </dt>
              <dd className="col-md-7 col-xl-8">
                Runs just before processing any requests to the{" "}
                <code>graphql</code> endpoint
              </dd>
              <dt className="col-md-5 col-xl-4">
                <code>graphPlaygroundMiddleware</code>
              </dt>
              <dd className="col-md-7 col-xl-8">
                Runs just before a user accesses the GraphQL Playground
              </dd>
              <dt className="col-md-5 col-xl-4">
                <code>mockMiddleware</code>
              </dt>
              <dd className="col-md-7 col-xl-8">
                Runs just before processing any requests to the{" "}
                <code>mockql</code> endpoint
              </dd>
              <dt className="col-md-5 col-xl-4">
                <code>mockPlaygroundMiddleware</code>
              </dt>
              <dd className="col-md-7 col-xl-8">
                Runs just before a user accesses the MockQL Playground
              </dd>
              <dt className="col-md-5 col-xl-4">
                <code>voyagerMiddleware</code>
              </dt>
              <dd className="col-md-7 col-xl-8">
                Runs just before a user accesses the GraphQL Voyager
              </dd>
            </dl>
            <h3 id="verify-request-headers">
              Example: Verifying Headers For Requests
            </h3>
            <p>
              Let&#8217;s say you use Firebase Authentication in your app and
              you want to verify a user&#8217;s{" "}
              <a href="https://firebase.google.com/docs/auth/admin/verify-id-tokens">
                Firebase ID Token
              </a>{" "}
              as a way of authenticating graphql requests so that other apps
              can&#8217;t use your api. Your app passes the <code>idToken</code>{" "}
              as a header named <code>X-Token</code>. We&#8217;re going to apply
              this same requirement to the graphql and mockql endpoints:
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

const authMiddleware = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const idToken = req.get("X-Token") || "badToken"
  try {
    await admin.auth().verifyIdToken(idToken)
    next()
  } catch (error) {
    res.json({
      error: {
        errors: [
          {
            code: 401,
            message: "The credentials you supplied could not be verified.",
          },
        ],
      },
    })
    res.end()
  }
}

export const graphql = functions.https.onRequest(GraphQLFirebase({ 
  graphMiddleware: authMiddleware,
  mockMiddleware: authMiddleware
}))`}
              </code>
            </pre>
            <p>Notice two key things here:</p>
            <ol>
              <li>
                Middleware functions can return promises and use{" "}
                <code>
                  async<span className="text-muted">/</span>await
                </code>
                .
              </li>
              <li>
                We&#8217;re sending json back to be consumed by our app &ndash;
                this is not required. You can do whatever you like in the{" "}
                <code>catch</code> block.
              </li>
            </ol>
            <p>
              You should also note that this middleware would essentially
              "break" your playgrounds and voyager because the playgrounds and
              voyager need to communicate with your endpoints. We say "break" in
              quotes because{" "}
              <Link href="/options/headers">
                <a>there&#8217;s a "fix" for it</a>
              </Link>
              .
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
