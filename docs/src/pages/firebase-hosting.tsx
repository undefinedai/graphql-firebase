import Head from "next/head"

export default function FirebaseHostingPage() {
  return (
    <>
      <Head>
        <title>GraphQL Firebase on a Custom Domain with Firebase Hosting</title>
        <meta
          content="Add Firebase Hosting to your GraphQL Firebase function and serve your api up on your own brand."
          key="description"
          name="description"
        />
      </Head>
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="display-4">Firebase Hosting</h1>
              <p className="lead">
                Adding a custom url to your GraphQL server is easy when you
                integrate Firebase Hosting. Let&#8217;s move out of your
                functions and into <code>firebase.json</code>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <main className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <p>
              With your GraphQL Firebase configured in your Firebase Functions,
              the last step (albeit an optional one) is to connect it to a
              custom domain name and serve it up on Firebase Hosting. This will
              provide you with your own branding while still allowing you to
              take advantage of Firebase&#8217;s global autoscaling.
            </p>
            <p>
              Once you have{" "}
              <a href="https://firebase.google.com/docs/hosting/quickstart">
                initialized your hosting on Firebase
              </a>
              , you can configure hosting to serve up your Firebase Function by
              modifying your <code>firebase.json</code>. We&#8217;ll assume your
              Firebase Function is <code>graphql</code> for now, and then
              explain some options after this example <code>firebase.json</code>
              .
            </p>
            <pre className="bg-light p-3">
              <code>
                <span className="text-muted">
                  // Other firebase.json options here
                </span>
                <br />
                {`...,
"hosting": {
  "public": "{relativePathToFunctionsDirectory}/node_modules/@undefinedai/graphql-firebase/lib/public",
  "rewrites": [
    {
      "source": "**",
      "function": "graphql"
    }
  ]
}`}
              </code>
            </pre>
            <p>
              With this configuration, all requests to your url are routed to
              your <code>graphql</code> Firebase Function. From there, GraphQL
              Firebase can take over.
            </p>
            <p>
              The <code>public</code> folder is required by Firebase Hosting. It
              can be empty, but it must be defined and present. If you&#8217;re
              not uploading any other static assets, we have included an empty
              directory you can use like we do in the example.
            </p>
            <p>
              If you <em>do</em> include other scripts or files (like if you use{" "}
              <code>additionalRoutes</code> to set a custom favicon, or you
              reference locally hosted javascript and style files in your custom{" "}
              <code>playgroundTemplate</code>, change this path to your own
              directory.
            </p>
            <h2>Using "Local" Assets</h2>
            <p>
              If in your Firebase Function you reference any script or other
              assets that will reside in your Firebase Hosting{" "}
              <code>public</code> directory, be mindful of the relative paths.
            </p>
            <p>
              When you Firebase Function is served up like we did above, it is
              as if it&#8217;s in the root of your website. So if you want to
              serve up a custom favicon (for example), you might upload it to
              your hosting web root but call it in your Firebase Functions with
              something like this:
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

router.use(
  "/favicon.ico",
  express.static("/favicon.png")
)

export const graphql = functions.https.onRequest(GraphQLFirebase({ 
  additionalRoutes: router
}))`}
              </code>
            </pre>
            <p>
              Notice how the path to <code>favicon.png</code> is relative to the
              hosting root and has nothing to do with where the file is relative
              to your function&#8217;s source code. When your function goes to
              serve up the favicon to browser requests, express will look for
              the file at this root path and find the file in your hosting
              directory.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
