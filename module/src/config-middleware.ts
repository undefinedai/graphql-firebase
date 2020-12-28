import { Request, Response, NextFunction } from "express"
import { join } from "path"

interface ConfigMiddlewareProps {
  dashboardEndpoint: string
  disableDashboard: boolean
  disableMockQL: boolean
  disablePlaygrounds: boolean
  disableVoyager: boolean
  graphEndpoint: string
  mockEndpoint: string
  playgroundPrefix: string
  voyagerEndpoint: string
}
export default function ConfigMiddleware({
  dashboardEndpoint,
  disableDashboard,
  disableMockQL,
  disablePlaygrounds,
  disableVoyager,
  graphEndpoint,
  mockEndpoint,
  playgroundPrefix,
  voyagerEndpoint,
}: ConfigMiddlewareProps) {
  return function (_: Request, res: Response, next: NextFunction) {
    if (disableMockQL === false && graphEndpoint === mockEndpoint) {
      res.status(500).render(join(__dirname, "views/error"), {
        errorCode: res.statusCode,
        errorTitle: "Endpoint Naming Conflict",
        errorMessage: `You can't serve live and mock GraphQL from the same endpoint: <code>/${graphEndpoint}</code>. You can change your mock endpoint, or disable the mock server altogether by setting <code>{disableMockQL: true}</code>.`,
      })
      return
    }
    if (disablePlaygrounds === false && playgroundPrefix === "") {
      res.status(500).render(join(__dirname, "views/error"), {
        errorCode: res.statusCode,
        errorTitle: "Playground Naming Conflict",
        errorMessage: `You must set a prefix for your playground endpoints (eg, <code>playground</code>), or disable playgrounds altogether by setting <code>{disablePlaygrounds: true}</code>.`,
      })
      return
    }
    if (disableVoyager === false) {
      if (
        voyagerEndpoint === graphEndpoint ||
        (disableMockQL === false && voyagerEndpoint === mockEndpoint) ||
        (disablePlaygrounds === false &&
          voyagerEndpoint === `${playgroundPrefix}/${graphEndpoint}`) ||
        (disableMockQL === false &&
          disablePlaygrounds === false &&
          voyagerEndpoint === `${playgroundPrefix}/${mockEndpoint}`)
      ) {
        res.status(500).render(join(__dirname, "views/error"), {
          errorCode: res.statusCode,
          errorTitle: "Voyager Naming Conflict",
          errorMessage: `Your Voyager endpoint name <code>${voyagerEndpoint}</code> conflicts with one of the other GraphQL endpoints. You should change your Voyager endpoint, or disable Voyager altogether by setting <code>{disableVoyager: true}</code>.`,
        })
        return
      }
    }
    if (disableDashboard === false) {
      if (
        dashboardEndpoint === graphEndpoint ||
        (disableMockQL === false && dashboardEndpoint === mockEndpoint) ||
        (disablePlaygrounds === false &&
          dashboardEndpoint === `${playgroundPrefix}/${graphEndpoint}`) ||
        (disableMockQL === false &&
          disablePlaygrounds === false &&
          dashboardEndpoint === `${playgroundPrefix}/${mockEndpoint}`) ||
        (disableVoyager === false && dashboardEndpoint === voyagerEndpoint)
      ) {
        res.status(500).render(join(__dirname, "views/error"), {
          errorCode: res.statusCode,
          errorTitle: "Dashboard Naming Conflict",
          errorMessage: `Your Dashboard endpoint name <code>${dashboardEndpoint}</code> conflicts with one of the other GraphQL endpoints. You should change your Dashboard endpoint, or disable the Dashboard altogether by setting <code>{disableDashboard: true}</code>.`,
        })
        return
      }
    }
    next()
  }
}
