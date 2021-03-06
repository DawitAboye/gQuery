
const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

require('dotenv').config()
var url = process.env.MONGO_URL

const app = express()

mongoose.connect(url, {useNewUrlParser: true})
mongoose.connection.once('open', () => {
  console.log('Connected to database')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log("now listening to requests on port 4000")
})
