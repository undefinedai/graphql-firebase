import casual from "casual"
import { MockList } from "@graphql-tools/mock"

export const typeDefs = `type Organization {
  id: ID!
  companyName: String!
  email: String!
  emailVerified: Boolean!
  url: String
}

type Query {
  listOrganizations: [Organization]!
}

type Mutation {
  createOrganization(
    companyName: String!
    email: String!
    url: String
  ): Organization
}`

export const resolvers = {
  Query: {
    listOrganizations: () => organizations,
  },
  Mutation: {
    createOrganization: async (_: any, { companyName, email, url }: any) => {
      return {
        id: casual.uuid.replace(/-/g, ""),
        companyName,
        email,
        emailVerified: false,
        url,
      }
    },
  },
}

// Dummy data for testing consistent results on the live (not mocked) endpoint
const organizations = [
  {
    id: "b3st-id-3v3r",
    companyName: "Undefined LLC",
    email: "startafire@undefined.ai",
    emailVerified: true,
    url: "https://www.undefined.ai",
  },
  {
    id: "dhu3g83hfiuew",
    companyName: "Partial Company Inc",
    email: "partialcompanyinc@example.com",
    emailVerified: false,
  },
  {
    id: "d3iuh4if",
    companyName: "Nonsense Ltd - A Spam Company",
    email: "nonsense@domain.gov.edu",
    emailVerified: false,
    url: "https://www.nonsense.domain.gov.edu",
  },
]

// Mock data for the mock endpoint
export const mocks = {
  Query: () => ({
    listOrganizations: () => new MockList([3, 12]),
  }),
  Organization: () => ({
    id: casual.uuid.replace(/-/g, ""),
    companyName: casual.company_name,
    email: casual.email,
    emailVerified: casual.boolean,
    url: casual.url.toLocaleLowerCase(),
  }),
}
