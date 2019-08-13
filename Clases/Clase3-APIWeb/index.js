'use strict'

const { graphql, buildSchema } = require('graphql')
const express = require('express')
const gqlMiddleware = require('express-graphql')

const app = express()
const port = process.env.port || 3001

// Definiendo el esquema inicial

const schema = buildSchema(`
    type Query{
        hello: String
    }
`)

// Configurar los resolver

const resolvers = {
  hello: () => {
    return 'hola mundo'
  }
}

app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listenig at http://localhost:${port}/api`)
})
