import Link from "next/link"

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
            <h2 className="h5">Built for Firebase</h2>
            <p>
              GraphQL Firebase was built specifically for use with Firebase
              Functions (and optionally, Firebase Hosting).
            </p>
          </div>
          <div className="col-md-4">
            <h2 className="h5">Highly Customizable</h2>
            <p>
              From middleware to custom paths to full template overrides, you
              can customize your GraphQL server however you want.
            </p>
          </div>
          <div className="col-md-4">
            <h2 className="h5">Very Lightweight</h2>
            <p>
              GraphQL Firebase was built to be what a GraphQL server should be
              &ndash; a super thin, fast layer for your api.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="alert alert-warning my-5" role="alert">
                <h4 className="alert-heading">GraphQL Firebase is in beta</h4>
                <p>
                  We are doing some final testing in staging and production to
                  ensure that everything is buttoned up before we officially
                  release version 1.0.0. At this point, things are not likely to
                  change, but use caution for now.
                </p>
                <hr />
                <p className="mb-0">
                  <Link href="/features">
                    <a className="alert-link">Check out the current features</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
