# GraphQL Firebase - Beta

This is a beta version of GraphQL Firebase. It is mostly stable, but we may introduce changes that are backwards incompatible. You likely want to wait until version 1.0.0 or higher before using this in production.

GraphQL Firebase is the fastest, easiest, and most extensible way to add a GraphQL server to your Firebase Functions and an optional web app to visualize your graph and to run queries against live or mock data.

- A full-featured [GraphQL server](https://github.com/graphql/express-graphql)
- Optional "MockQL" server
- Separate [GraphQL Playgrounds](https://github.com/graphql/graphql-playground) for live and mock servers
- [GraphQL Voyager](https://github.com/APIs-guru/graphql-voyager) to visualize your graph
- Highly flexible API so you can customize it to your needs
- Easily connect it to Firebase Hosting for a custom domain
- Built in typescript types

## Installation

In your Firebase Functions project:

```sh
npm i @undefinedai/graphql-firebase
```

or

```sh
yarn install @undefined/graphql-firebase
```

## Basic Use

In the main `index.js` or `index.ts` of your functions, simply create a new HTTP OnRequest function and connect `GraphQLFirebase`:

```typescript
// Using requires
const functions = require("firebase-functions")

const { GraphQLFirebase } = require("@undefinedai/graphql-firebase")

exports.graphql = functions.https.onRequest(GraphQLFirebase())
```

```typescript
// Or with imports
import * as functions from "firebase-functions"

import { GraphQLFirebase } from "@undefinedai/graphql-firebase"

export const graphql = functions.https.onRequest(GraphQLFirebase())
```

That's it! You now have a working GraphQL server with a MockQL server, playgrounds, and GraphQL voyager.

## Full Documentation

[Read the full documentation](https://undefinedai.github.io/graphql-firebase) including how to connect to Firebase Hosting, all of the configuration options, and more.
