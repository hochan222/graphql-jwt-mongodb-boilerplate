import User from '../../models/user'

export default {
    Query: {
        info: () => `This is the API of a graphql boilerplate`,
        feed: async() => {
            return await User.find()
        }
    },
    Mutation: {
        createUser: async (root, args) => {
            return await User.create({
                email: args.email,
                password: args.password
            })
        },
        updateUser: async (root, {email, password, new_email, new_password}) => {
            return await User.findOneAndUpdate(
                { email, password },
                { email: new_email, password: new_password },
                { new: true }
            )
        },
        deleteUser: async (root, {email, password}) => {
            return await User.findOneAndDelete({email, password})
        }
    }
}