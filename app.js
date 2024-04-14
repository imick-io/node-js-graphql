const express = require("express");
const mongoose = require("mongoose");
const { createHandler } = require("graphql-http/lib/use/express");

const graphqlSchema = require("./graphql/schema");
const graphqlResolvers = require("./graphql/resolvers");
const { mongoUri } = require("./config");

const app = express();

app.use(
  "/graphql",
  createHandler({
    schema: graphqlSchema,
    resolvers: graphqlResolvers,
  })
);

mongoose
  .connect(mongoUri)
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
