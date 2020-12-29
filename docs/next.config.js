const isProduction = process.env.NODE_ENV === "production"

module.exports = {
  assetPrefix: isProduction ? "/graphql-firebase" : "",
  basePath: isProduction ? "/graphql-firebase" : "",
  env: {
    buildTime: new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      month: "long",
      second: "numeric",
      timeZone: "UTC",
      timeZoneName: "short",
      year: "numeric",
    }).format(new Date()),
  },
}
