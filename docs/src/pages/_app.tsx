import type { AppProps } from "next/app"
import { ImGithub, ImNpm } from "react-icons/im"
import Head from "next/head"
import Link from "next/link"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import "bootstrap/dist/css/bootstrap.min.css"

export default function GraphQLFirebaseDocs({
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" key="charset" />
        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          key="viewport"
          name="viewport"
        />
        <link
          rel="icon"
          href={
            process.env.NODE_ENV === "production"
              ? `/graphql-firebase/favicon.png`
              : `/favicon.png`
          }
          type="image/png"
        />
        <title>GraphQL Firebase</title>
        <meta
          content="The easiest, fastest, and most flexible way to add a GraphQL server to your Firebase Functions. Complete with mocking, playgrounds, GraphQL Voyager, and Firebase Hosting integration for a custom url."
          key="description"
          name="description"
        />
        <script
          async={true}
          src="https://www.googletagmanager.com/gtag/js?id=G-0DE5Y7ZMEZ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-0DE5Y7ZMEZ');
`,
          }}
        />
      </Head>
      <Navbar bg="dark" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand as={Link} href="/">
          <a className="navbar-brand">GraphQL Firebase</a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="mr-auto">
            <Nav.Link as={Link} href="/features">
              <a className="nav-link">Features</a>
            </Nav.Link>
            <Nav.Link as={Link} href="/installation">
              <a className="nav-link">Getting Started</a>
            </Nav.Link>
            <Nav.Link as={Link} href="/options">
              <a className="nav-link">Options</a>
            </Nav.Link>
            <Nav.Link as={Link} href="/firebase-hosting">
              <a className="nav-link">Custom URL</a>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/undefinedai/graphql-firebase">
              <ImGithub />
            </Nav.Link>
            <Nav.Link href="https://www.npmjs.com/package/@undefinedai/graphql-firebase">
              <ImNpm />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Component {...pageProps} />
      <div className="my-5 mx-auto text-center" style={{ maxWidth: "540px" }}>
        <hr />
        <small className="text-muted">
          Docs updated {process.env.buildTime}
        </small>
      </div>
    </>
  )
}
