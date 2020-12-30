import Link from "next/link"

export default function OptionsCustomizeTemplatesPage() {
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="display-4">Customizing Templates</h1>
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
              When serving up static pages like the playground, GraphQL Firebase
              uses one of the{" "}
              <a href="https://expressjs.com/en/guide/using-template-engines.html">
                built-in template engines with Express
              </a>
              . If you&#8217;ve never{" "}
              <a href="https://pugjs.org/api/getting-started.html">
                built anything in Pug before
              </a>
              , we get it &ndash; it takes a little getting used to.
            </p>
            <p>
              We originally built our templates in react and converted them to
              static pages using <a href="https://nextjs.org/">Next.js</a> (we
              love Next &ndash; it&#8217;s how we built these docs), but the
              loading speed was kind of bad compared to how quickly the pug
              templates were loading.
            </p>
            <p>
              (That&#8217;s not a knock on Next &ndash; we think it has more to
              do with Express&#8217; built-in template handling versus serving
              up other static resources, but what do we know? Well, we just know
              that pug is super quick in Express.)
            </p>
            <h2>Included Templates</h2>
            <p>
              GraphQL Firebase comes with three customizable templates written
              in pug:
            </p>
            <ul>
              <li>dashboard.pug</li>
              <li>playground.pug (handles both playgrounds)</li>
              <li>voyager.pug</li>
            </ul>
            <h2>Appending To (Extending) Templates</h2>
            <p>
              You can customize or override these by creating your own pug
              templates and passing their locations/paths to:
            </p>
            <ul>
              <li>
                <code>dashboardTemplate</code>
              </li>
              <li>
                <code>playgroundTemplate</code>
              </li>
              <li>
                <code>voyagerTemplate</code>
              </li>
            </ul>
            <p>
              Each template has three "blocks" that{" "}
              <a href="https://pugjs.org/language/inheritance.html">
                you can extend with your own pug template
              </a>
              . You can append items to the <code>head</code> block or the{" "}
              <code>body</code> block, or add additional javascript to the{" "}
              <code>scripts</code> block.
            </p>
            <p>
              For example, if you wanted to add a custom meta tag to the{" "}
              <code>&lt;head&gt;</code> tag of the dashboard, you could create a
              template named <code>my-dashboard.pug</code> like so:
            </p>
            <pre className="bg-light p-3">
              <code>
                {`extends /views/dashboard.pug

block append head
  meta(name="twitter:title" content="Private GraphQL Dashboard")`}
              </code>
            </pre>
            <p>
              Then, pass the path of your <code>my-dashboard.png</code> to{" "}
              <code>dashboardTemplate</code> and the rest of the template will
              remain &ndash; but your meta tag will be <em>appended</em>.
            </p>
            <div className="alert alert-warning">
              <p>
                Notice that we&#8217;re using an absolute path in{" "}
                <code>extends</code>. The templates you can extend are:
              </p>
              <ul>
                <li>/views/dashboard.pug</li>
                <li>/views/playground.pug</li>
                <li>/views/voyager.pug</li>
              </ul>
              You must use these absolute paths to extend a template, or supply
              your own to fully replace any of them.
            </div>
            <h2>Overriding Templates</h2>
            <p>
              If appending/prepending to the templates isn&#8217;t flexible
              enough, you can override them completely. It works the same way as
              appending above, but you exclude the keyword <code>append</code>{" "}
              (or <code>prepend</code>).
            </p>
            <pre className="bg-light p-3">
              <code>
                {`extends /views/dashboard.pug

block head
  meta(name="twitter:title" content="Private GraphQL Dashboard")`}
              </code>
            </pre>
            <p>
              With this template, the body and script blocks remain in tact, but
              the head is replaced entirely with just this one new meta tag.
              Odds are &ndash; if you&#8217;re replacing entire blocks,
              you&#8217;ll want to preserve some things like the actual scripts
              or links included. You can find these in the GraphQL Firebase
              package in your <code>node_modules</code> or{" "}
              <a href="https://github.com/undefinedai/graphql-firebase/tree/docs/module/src/views">
                on Github
              </a>
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
