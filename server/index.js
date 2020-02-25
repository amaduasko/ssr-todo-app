const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const schema = require("./shema/shema");
const root = require("./resolver/resolver");
const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
