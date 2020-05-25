const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema
} = require("graphql");
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        launches: {
            type: GraphQLInt,
            args:{
                id:{
                   type: GraphQLInt,
                    description:'id'
                },
                name:{
                    type:GraphQLString,
                    description:"name"
                }
            },
            resolve(parent, {id,name}) {
                console.log({parent});
                console.log({id,name});
                return 2
            }
        }
    }
});
const RootMutation = new GraphQLObjectType({
    name:"RootMutation",
    fields:{
        updatelan:{
            type:GraphQLBoolean,
            args:{
                fid:{
                    type:GraphQLString,
                    description: "fid"
                }
            },
            resolve(parent, args) {
                console.log(args.fid);
                return true;
            }
        }
    }
})
const RootQueryArr = require(`./queries/index`);
// const {RootMutationAll} = require(`./mutations/index`);
module.exports = new GraphQLSchema({
    query: RootQueryArr,
    mutation:RootMutation
});