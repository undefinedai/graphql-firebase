import { Request, Response, NextFunction } from "express"
import { join } from "path"

interface ConfigMiddlewareProps {
  dashboardEndpoint: string
  disableDashboard: boolean
  disableMockQL: boolean
  disablePlaygrounds: boolean
  disableVoyager: boolean
  graphEndpoint: string
  graphPlaygroundEndpoint: string
  mockEndpoint: string
  mockPlaygroundEndpoint: string
  voyagerEndpoint: string
}
export default function ConfigMiddleware({
  dashboardEndpoint,
  disableDashboard,
  disableMockQL,
  disablePlaygrounds,
  disableVoyager,
  graphEndpoint,
  graphPlaygroundEndpoint,
  mockEndpoint,
  mockPlaygroundEndpoint,
  voyagerEndpoint,
}: ConfigMiddlewareProps) {
  return function (_: Request, res: Response, next: NextFunction) {
    let reservedEndpoints = [graphEndpoint]
    if (disableMockQL === false && reservedEndpoints.includes(mockEndpoint)) {
      res.status(500).render(join(__dirname, "views/error"), {
        errorCode: res.statusCode,
        errorTitle: "Endpoint Naming Conflict",
        errorMessage: `You can't serve live and mock GraphQL from the same endpoint: <code>/${graphEndpoint}</code>. You can change your mock endpoint, or disable the mock server altogether by setting <code>{disableMockQL: true}</code>.`,
      })
      return
    }
    reservedEndpoints = [...reservedEndpoints, mockEndpoint]
    if (
      disablePlaygrounds === false &&
      reservedEndpoints.includes(graphPlaygroundEndpoint)
    ) {
      res.status(500).render(join(__dirname, "views/error"), {
        errorCode: res.statusCode,
        errorTitle: "Playground Naming Conflict",
        errorMessage: `You must set a unique endpoint for your GraphQL Playground (eg, <code>playground/graphql</code>), or disable playgrounds altogether by setting <code>{disablePlaygrounds: true}</code>.`,
      })
      return
    }
    reservedEndpoints = [...reservedEndpoints, graphPlaygroundEndpoint]
    if (
      disablePlaygrounds === false &&
      disableMockQL === false &&
      reservedEndpoints.includes(mockPlaygroundEndpoint)
    ) {
      res.status(500).render(join(__dirname, "views/error"), {
        errorCode: res.statusCode,
        errorTitle: "Playground Naming Conflict",
        errorMessage: `You must set a unique endpoint for your MockQL Playground (eg, <code>playground/mockql</code>), or disable playgrounds altogether by setting <code>{disablePlaygrounds: true}</code>.`,
      })
      return
    }
    reservedEndpoints = [...reservedEndpoints, mockPlaygroundEndpoint]
    if (
      disableVoyager === false &&
      reservedEndpoints.includes(voyagerEndpoint)
    ) {
      res.status(500).render(join(__dirname, "views/error"), {
        errorCode: res.statusCode,
        errorTitle: "Voyager Naming Conflict",
        errorMessage: `Your Voyager endpoint name <code>${voyagerEndpoint}</code> conflicts with one of your other endpoints. You should change your Voyager endpoint, or disable Voyager altogether by setting <code>{disableVoyager: true}</code>.`,
      })
      return
    }
    reservedEndpoints = [...reservedEndpoints, voyagerEndpoint]
    if (
      disableDashboard === false &&
      reservedEndpoints.includes(dashboardEndpoint)
    ) {
      res.status(500).render(join(__dirname, "views/error"), {
        errorCode: res.statusCode,
        errorTitle: "Dashboard Naming Conflict",
        errorMessage: `Your Dashboard endpoint name <code>${dashboardEndpoint}</code> conflicts with one of your other GraphQL endpoints. You should change your Dashboard endpoint, or disable the Dashboard altogether by setting <code>{disableDashboard: true}</code>.`,
      })
      return
    }
    next()
  }
}
