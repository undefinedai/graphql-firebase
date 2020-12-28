import Link from "next/link"

export default function OptionsFourOhFourPage() {
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="display-4">404 Handling</h1>
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
              If you don&#8217;t have any 404 handling, requests to non-existant
              paths on your Firebase Functions will just eventually time out.
              While this may be perfectly acceptible to you, this does consume
              server resources which could be directed to good requests.
            </p>
            <p>
              By default, we set <code>fourOhFourTheRest: true</code> and serve
              up a simple 404 error page. If you want to handle this another way
              (like with the <code>additionalRoutes</code> option), or to simply
              disable 404 handling, set <code>fourOhFourTheRest: false</code>.
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
