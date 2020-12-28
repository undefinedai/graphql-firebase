import Link from "next/link"

export default function OptionsAdditionalRoutesPage() {
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="display-4">Additional Routes</h1>
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
              After the GraphQL server is set up, and after any MockQL server,
              playgrounds, voyager, and dashboard are configured (assuming
              they&#8217;re not disabled), GraphQL Firebase looks for any{" "}
              <code>additionalRoutes</code> you pass in. (If you need to
              customize <em>before</em> these are set up,{" "}
              <Link href="/options/middleware">
                <a>see all the middleware options provided</a>
              </Link>
              .)
            </p>
            <p>
              You can add additional routes and handling to GraphQL Firebase by
              providing an{" "}
              <a href="https://expressjs.com/en/guide/routing.html#express-router">
                Express Router
              </a>
              . In that router, you can add whatever else you want &ndash; a
              full express app to serve up any other paths or resources you
              want.
            </p>
            <h2>Adding a Login Page</h2>
            <p>
              For example, maybe you used the middleware, template
              customization, and headers options to add Firebase auth to all of
              your pages, but now you need an actual login page. You can add
              this with <code>additionalRoutes</code>.
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
import express from "express"

import { GraphQLFirebase } from "@undefinedai/graphql-firebase"

const router = express.Router()

router.get("/login", (req: Request, res: Response) => {
  // Display login page
})

export const graphql = functions.https.onRequest(GraphQLFirebase({ 
  additionalRoutes: router
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
