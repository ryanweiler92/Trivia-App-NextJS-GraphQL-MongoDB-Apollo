import { gql } from "apollo-server-micro"

export const typeDefs = gql`
  type Query {
    greet: ExampleResponse
    question: Question
  }
  type Mutation {
    fetchQuestions: FetchQuestionsResponse
    register(user: NewUser!): AuthResponse
    signin(username: String!, password: String!): AuthResponse
  }
  input NewUser {
    username: String!
    password: String!
  }
  type AuthResponse {
    username: String
    token: String
  }
  type ExampleResponse {
    name: String
    message: String
  }
  type FetchQuestionsResponse {
    questionsSaved: Int
  }
  type Question {
    _id: String
    question: String
    category: String
    difficulty: String
    answers: [QuestionAnswer]
  }
  type QuestionAnswer {
    answer: String
    correct: Boolean
  }
`