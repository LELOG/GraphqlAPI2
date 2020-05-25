const express = require('express');
const expressGraphql = require('express-graphql');
const graphqlHTTP = require("express-graphql");
const app = express();
const schema = require(`./graphql/shema`);
app.use(`/graphql`,graphqlHTTP({
    schema:schema,
    graphiql: true
}))
app.listen(3000,()=>{
    console.log('graphql is ok');
});