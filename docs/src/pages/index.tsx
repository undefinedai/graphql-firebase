export default function HomePage() {
  return (
    <main>
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="display-4">GraphQL Firebase</h1>
              <p className="lead">
                The easiest, fastest, and most flexible way to add a GraphQL
                server to your Firebase Functions. Complete with mocking,
                playgrounds, GraphQL Voyager, and Firebase Hosting integration
                for a custom url.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 className="font-weight-normal h5">Built for Firebase</h2>
          </div>
          <div className="col-md-4">
            <h2 className="font-weight-normal h5">Highly Customizable</h2>
          </div>
          <div className="col-md-4">
            <h2 className="font-weight-normal h5">Built for Firebase</h2>
          </div>
        </div>
      </div>
    </main>
  )
}
