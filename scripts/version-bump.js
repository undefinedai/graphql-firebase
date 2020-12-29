const chalk = require("chalk")
const fs = require("fs")
const semver = require("semver")

function end(text, color = "red") {
  let msg
  if (color === "green") {
    msg = chalk.green(`\n${text}\n`)
  } else if (color === "white") {
    msg = chalk.white(`\n${text}\n`)
  } else {
    msg = chalk.red(`\n${text}\n`)
  }
  console.log(msg)
  process.exit()
}

const flag = process.argv[2]

switch (flag) {
  case "--major":
    end(
      "Major version bumps must be handled manually. Update the main package.json and re-run this command with --sync."
    )
  case "--minor":
  case "--patch":
  case "--sync":
    break
  case "--help":
    end("Pass --major, --minor, or --patch to bump the version.", "white")
  default:
    end(
      "Pass --major, --minor, or --patch to bump the version.\nYou did not pass a valid flag so nothing has been updated."
    )
}

const primaryPackageJSON = JSON.parse(fs.readFileSync("package.json"))

if (!semver.valid(primaryPackageJSON.version)) {
  end(
    "Invalid version number in main package.json. Please use a valid semver string. The version has NOT been bumped."
  )
}

const docsPackageJSON = JSON.parse(fs.readFileSync("docs/package.json"))
const modulePackageJSON = JSON.parse(fs.readFileSync("module/package.json"))

if (flag !== "--sync") {
  // This is a minor or patch version bump. Update the main package.json version and then
  // use the updated version string. In a `--sync`, we use the package.json version as-is.
  const bumped = semver.inc(primaryPackageJSON.version, flag.replace("--", ""))
  primaryPackageJSON.version = bumped
}

if (
  (semver.valid(docsPackageJSON.version) &&
    semver.lt(primaryPackageJSON.version, docsPackageJSON.version)) ||
  (semver.valid(modulePackageJSON.version) &&
    semver.lt(primaryPackageJSON.version, modulePackageJSON.version))
) {
  end(
    `The proposed version in the main package.json (${primaryPackageJSON.version}) is\nless than the version in one of the subpackages.\nYou can not downgrade a version.\nNo versions have been changed.`
  )
}

if (flag !== "--sync") {
  // Update the main package.json
  fs.writeFileSync("package.json", JSON.stringify(primaryPackageJSON, null, 2))
}

// Update the docs package.json
docsPackageJSON.version = primaryPackageJSON.version
fs.writeFileSync("docs/package.json", JSON.stringify(docsPackageJSON, null, 2))

// Update the module package.json
modulePackageJSON.version = primaryPackageJSON.version
fs.writeFileSync(
  "module/package.json",
  JSON.stringify(modulePackageJSON, null, 2)
)

if (flag !== "--sync") {
  end(
    `All packages have been bumped to version ${primaryPackageJSON.version}`,
    "green"
  )
} else {
  end(
    `All packages have been synced to version ${primaryPackageJSON.version}`,
    "green"
  )
}
