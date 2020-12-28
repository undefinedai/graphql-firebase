import type { AppProps } from "next/app"
import Head from "next/head"
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
        <title>GraphQL Firebase</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <Navbar bg="dark" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/">GraphQL Firebase</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="mr-auto">
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/installation">Getting Started</Nav.Link>
            <Nav.Link href="/options">Options</Nav.Link>
            <Nav.Link href="/hosting">Custom URL</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/undefinedai/graphql-firebase">
              Github
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Component {...pageProps} />
      <div className="mt-5 mx-auto" style={{ maxWidth: "540px" }}>
        <hr />
        <nav className="justify-content-center nav text-muted">
          <a
            className="nav-link text-reset"
            href="https://github.com/undefinedai/graphql-firebase"
          >
            Github
          </a>
        </nav>
      </div>
    </>
  )
}
