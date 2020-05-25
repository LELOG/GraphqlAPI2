const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema
} = require('graphql');

const UserType = new GraphQLObjectType({
    name:'User',
    description:"用户信息",
    fields:{
        fid:{
            type:GraphQLString,
            description:'id'
        },
        fname:{
            type:GraphQLString,
            description:'fanme'
        },
        fage:{
            type:GraphQLString,
            description:'age'
        }
    }
})
module.exports = {
    UserType
}