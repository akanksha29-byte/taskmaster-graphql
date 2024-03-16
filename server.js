const express = require('express');
let { createHandler } = require("graphql-http/lib/use/express")
const { schema } = require('./schema');
const PORT = 3002;
const app = express();

const getAllBoards = () => {
   console.log("Board Data")
}

var root = {
    getAllBoards: getAllBoards()
}

app.all('/graphql', createHandler({
    schema,
    rootValue: root,
}))

app.listen(PORT, () => {
    console.log(`Server listning at port ${PORT}...`);
})