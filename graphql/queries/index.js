// import _ from "lodash";
const _  = require('lodash');
const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema
} = require("graphql");
const user = require('./User');
const book = require('./book');
let methList = [user,book]
var all = user;
_.forEach(methList,(value)=>{
    all=_.merge(all,value);
})
console.log({all});
module.exports= new GraphQLObjectType({
    name:"RootQueryType",
    fields:all
})