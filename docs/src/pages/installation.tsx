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
          </div>
        </div>
      </main>
    </>
  )
}
