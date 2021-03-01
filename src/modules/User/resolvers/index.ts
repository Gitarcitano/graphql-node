import { User } from "../models/User"

type FindUser = {
  id: String;
}

type CreateUser = {
  name: String;
  email: String;
}

export const resolvers = {
  Query: {
    users: ()=> User.find(),
    user: (_, { id }: FindUser) => User.findById(id),
  },

  Mutation: {
    createUser: (_, {name, email}: CreateUser) => User.create({name, email}),
  }
}
