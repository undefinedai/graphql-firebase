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
              GraphQL servers work off two main concepts - <code>typeDefs</code>{" "}
              and <code>resolvers</code>. Put those together, and you have a
              <code>schema</code>. Pass your <code>schema</code> to GraphQL
              Firebase, and you have a custom GraphQL server.
            </p>
            <p>
              GraphQL Firebase uses{" "}
              <a href="https://github.com/ardatan/graphql-tools">
                @graphql-tools
              </a>{" "}
              under the hood, and for convenience, re-exports a few functions so
              you don't need to bring the package back in (unless you need more
              from it).
            </p>
            <p>
              Here&#8217;s an example of how to create a simple schema and pass
              it to GraphQL Firebase.
            </p>
            <pre className="bg-light p-3">
              <code>
                <span className="text-muted">
                  // We use ES6+ in our projects, but you can adjust this to use
                  commonjs
                </span>
                <br />
                <br />
                {`import * as functions from "firebase-functions"

import { GraphQLFirebase, makeExecutableSchema } from "@undefinedai/graphql-firebase"
                
const typeDefs = \`
  type Post {
    id: ID!
    title: String
    author: String
    votes: Int
  }

  # the schema allows the following query:
  type Query {
    posts: [Post]
  }

  # this schema allows the following mutation:
  type Mutation {
    upvotePost (
      postId: ID!
    ): Post
  }\`

const resolvers = {
  Query: {
    posts() {
      return posts;
    },
  },
  Mutation: {
    upvotePost(_, { postId }) {
      const post = find(posts, { id: postId });
      if (!post) {
        throw new Error(\`Couldn't find post with id \${postId}\`);
      }
      post.votes += 1;
      return post;
    },
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export const graphql = functions.https.onRequest(GraphQLFirebase({ schema }))`}
              </code>
            </pre>
            <p>
              In addition to <code>makeExecutableSchema</code>, we also
              re-export <code>loadFilesSync</code>, <code>mergeResolvers</code>,
              and <code>mergeTypeDefs</code> from{" "}
              <a href="https://github.com/ardatan/graphql-tools">
                @graphql-tools
              </a>{" "}
              so that you can easily split your typeDefs and resolvers into
              multiple files. If you need more functionality from that package,
              you should bring it into your project.
            </p>
            <h2>Adding Custom Mocks</h2>
            <p>
              By default, the MockQL server will try to read your typeDefs and
              supply sensible (albeit boring) mock data values. You can
              customize this further by passing your own mocks.
            </p>
            <p>
              For example, say you don&#8217;t want each MockQL{" "}
              <code>Post</code> to have a default mock title of "Hello World"
              (the default mock <code>String</code>). You can bring in a mock
              data generator (or supply a custom one) to randomize returned
              values.
            </p>
            <p>Building on the above example:</p>
            <pre className="bg-light p-3">
              <code>
                {`import * as functions from "firebase-functions"

import { GraphQLFirebase, makeExecutableSchema } from "@undefinedai/graphql-firebase"`}
                <br />
                <br />
                <span className="text-muted">
                  // Assuming you bring in the `casual` package
                </span>
                <br />
                {`import casual from "casual"`}
                <br />
                <br />
                <span className="text-muted">
                  // Same schema creation as above, and then...
                </span>
                <br />
                <br />
                {`const mocks = {
  Query: () => ({
    posts: () => new MockList([3, 12]),
  }),
  Post: () => ({
    id: casual.uuid,
    title: casual.title,
    author: casual.full_name,
    votes: casual.integer(from = 0, to = 100)
  }),
}

export const graphql = functions.https.onRequest(GraphQLFirebase({
  mocks,
  schema
}))`}
              </code>
            </pre>
            <p>
              In this example, a query to <code>posts</code> will return a list
              of fake posts between 3 and 12 entries long, and each{" "}
              <code>Post</code> will have a randomly generated it, title, author
              name, and number of likes (between 0 and 100).
            </p>
            <p>Pretty nifty, eh?</p>
            <h2>
              Maintaing Resolvers with <code>preserveResolvers</code>
            </h2>
            <p>
              By default, the MockQL server will <em>always</em> return mock
              data, even if you don&#8217;t supply custom mocks and even if you
              have live, working resolves on your GraphQL server. You can change
              this behavior with <code>preserveResolvers</code>.
            </p>
            <p>
              If you want the MockQL server to use your actual resolvers when
              they exist, and to only mock data when a particular resolver
              doesn&#8217;t exist, set <code>preserveResolvers: true</code>.
            </p>
            <pre className="bg-light p-3">
              <code>
                <span className="text-muted">
                  // Keeping the same set-up from above
                </span>
                <br />
                {`export const graphql = functions.https.onRequest(GraphQLFirebase({
  mocks,
  preserveResolvers: true,
  schema
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
