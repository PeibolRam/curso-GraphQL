'use strict'

const { graphql, buildSchema } = require('graphql')

// Definiendo el esquema inicial

const schema = buildSchema(`
    type Query{
        hello: String
        saludo: String
    }
`)

// Configurar los resolver

const resolvers = {
  hello: () => {
    return 'hola mundo'
  },
  saludo: () => {
    return 'hola a todos'
  }
}

// Ejecutar el query hello

graphql(schema, '{saludo}', resolvers).then((data) => {
  console.log(data)
})
