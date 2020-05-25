const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema
} = require("graphql");
const QueryUserResolve = require(`./../resolve/QueryUserResolve`);
module.exports = {
    getbook:{
        type:GraphQLInt,
        args:{
            fid:{
                type:GraphQLString,
                description:"用户id"
            }
        },
        resolve:QueryUserResolve.getBook
    }
}