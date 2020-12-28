import Image from "next/image"
import Link from "next/link"

export default function FeaturesPage() {
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="display-4">GraphQL Firebase Features</h1>
              <p className="lead">
                Check out what&#8217;s included out of the box when you install
                GraphQL Firebase and why we&#8217;ve included them.
              </p>
            </div>
          </div>
        </div>
      </div>
      <main className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h2>GraphQL Server</h2>
            <p>
              You get a full-featured{" "}
              <a href="https://graphql.org/">GraphQL Server</a> running{" "}
              <a href="https://github.com/graphql/express-graphql">
                Express GraphQL
              </a>
              . Out of the box, this is available at{" "}
              <code>{`{yourFunctionUrl}/graphql`}</code> (but you can change
              that easily).
            </p>
            <p>
              The server starts with the default options (with{" "}
              <code>graphiql</code> disabled - more on that below), but you can
              use the{" "}
              <Link href="/options">
                <a>GraphQL Firebase options</a>
              </Link>{" "}
              to pass in your custom schema, add middleware, and more.
            </p>
            <h2>MockQL Server</h2>
            <p>
              If MockQL isn&#8217;t a word, it should be because we give you
              one. A MockQL server is your exact GraphQL server, but instead of
              actually pinging your resolvers (or modifying databases, or making
              network calls, or adding latency, etc), it responds with mock
              data. Out of the box, this is available at{" "}
              <code>{`{yourFunctionUrl}/mockql`}</code> (but you can change that
              easily as well).
            </p>
            <p>
              In our example mocks, we create custom mocks and use{" "}
              <a href="https://github.com/boo1ean/casual">casual</a> to generate
              fake data, but you&#8217;re free to use whatever you want here.
              You can also tell GraphQL Firebase to{" "}
              <code>preserveResolvers</code> which means that your MockQL server
              will use <em>actual</em> resolvers when available, and only mock
              data that doesn&#8217;t come from a real resolver.
            </p>
            <p>Or, disable the MockQL server entirely if you want.</p>
            <h2>GraphQL and MockQL Playgrounds</h2>
            <p>
              Remember above when we said we disabled <code>graphiql</code> in
              the Express GraphQL server? That&#8217;s because we want you to
              have a nicer interface and more customization on your playgrounds.
              You&#8217;ll have two &ndash; one for your GraphQL server and one
              for your MockQL server.
            </p>
            <figure className="figure">
              <Image
                alt="GraphQL Playground"
                height={462}
                quality={100}
                src="/graphql-playground-demo.png"
                width={730}
              />
              <figcaption className="figure-caption">
                Image from{" "}
                <a href="https://github.com/graphql/graphql-playground">
                  GraphQL Playground
                </a>
              </figcaption>
            </figure>
            <p>
              The playgrounds for your GraphQL and MockQL servers are available
              at <code>{`{yourFunctionUrl}/playground/graphql`}</code> and{" "}
              <code>{`{yourFunctionUrl}/playground/mockql`}</code>,
              respectively. Of course, those urls are also customizable.
            </p>
            <p>
              We also provide you with a number of opportunities to run
              middleware, set headers, or pass in other customizations, or you
              can disable each playground if that&#8217;s how you want to do it.
            </p>
            <h2>GraphQL Voyager</h2>
            <p>
              GraphQL Voyager is a great way to visualize your GraphQL
              relationships and structure.
            </p>
            <figure className="figure">
              <Image
                alt="GraphQL Voyager"
                height={438}
                quality={100}
                src="/voyager-demo.gif"
                width={730}
              />
              <figcaption className="figure-caption">
                Image from{" "}
                <a href="https://github.com/APIs-guru/graphql-voyager">
                  GraphQL Voyager
                </a>
              </figcaption>
            </figure>
            <p>
              Out of the box, GraphQL Voyager is available at{" "}
              <code>{`{yourFunctionUrl}/voyager`}</code>, and yes &ndash; you
              can change that too. Plus, we&#8217;ve included a number of
              opportunities for you to add middleware, headers, and even your
              own introspection query.
            </p>
            <p>Or disable GraphQL Voyager entirely &ndash; your call.</p>
            <h2>The Dashboard</h2>
            <p>
              If you want to call it that &ndash; we&#8217;ve included a little
              dashboard home page (available at{" "}
              <code>{`{yourFunctionUrl}/`}</code> &ndash; a kind of home page)
              so you can click between the playgrounds and Voyager. Of course,
              you can change the url path or disable the dashboard, but we
              included it as an easy reference when you first get acclimated to
              GraphQL Firebase.
            </p>
            <h2>Options Galore</h2>
            <p>
              We&#8217;re using this in production, so we&#8217;ve tried to
              anticipate the many ways we or you might use it as well, and have
              added a ton of options so that you can configure GraphQL Firebase
              to your liking.
            </p>
            <p>
              <Link href="/installation">
                <a>Learn how to install GraphQL Firebase</a>
              </Link>{" "}
              and then check out{" "}
              <Link href="/options">
                <a>all the various ways you can customize it</a>
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
