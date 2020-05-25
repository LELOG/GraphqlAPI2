const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema
} = require("graphql");
const QueryUserResolve = require(`./../resolve/QueryUserResolve`);
const {UserType} = require(`./../graphqlType/QueryUsertype`);
module.exports = {
    getuser:{
        type:UserType,
        args:{
            fid:{
                type:GraphQLString,
                description:"用户id"
            }
        },
        resolve:QueryUserResolve.getUser
    },
    getUserlist:{
        type:GraphQLList(UserType),
        args:{
            name:{
                type:GraphQLString,
                description:"getlist"
            }
        },
        resolve: QueryUserResolve.getUserList
    }
}