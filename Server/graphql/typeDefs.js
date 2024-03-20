const typeDefs = `
  type Work {
    _id: ID!
    imageWorks: [ImageWork!]!
    nameWork: String!
    description: String!
    nameArch: String!
    clientName: String!
    termWork: String!
    typeProj: String!
    strategyWork: String!
    dateWork: String!
  }

  type ImageWork {
    img: String!
  }

  input ImageWorkInput {
    img: String!
  }

  input CreateWorkInput {
    imageWorks: [ImageWorkInput!]!
    nameWork: String!
    description: String!
    nameArch: String!
    clientName: String!
    termWork: String!
    typeProj: String!
    strategyWork: String!
    dateWork: String
  }

  input UpdateWorkInput {
    imageWorks: [ImageWorkInput!]
    nameWork: String
    description: String
    nameArch: String
    clientName: String
    termWork: String
    typeProj: String
    strategyWork: String
    dateWork: String
  }

  type Query {
    getWork(id: ID!): Work
    getAllWorks: [Work!]!
  }

  type Mutation {
    createWork(input: CreateWorkInput!): Work!
    updateWork(id: ID!, input: UpdateWorkInput!): Work!
    deleteWork(id: ID!): Work!
  }
`;

export default typeDefs;