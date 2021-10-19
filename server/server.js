const express = require('express')
const {ApolloServer, gql} = require('apollo-server-express')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const { connect } = require('http2')
const mongoose = require('mongoose')

async function startServer() {
  const app = express()
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  })

  await apolloServer.start()

  apolloServer.applyMiddleware({app});
  
  app.use((req,res)=> {
    res.send('hello form express apollo server')
  })
  await mongoose.connect(`mongodb+srv://cherif:1230@cluster0.0vnvp.mongodb.net/refill?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log('connected to mongoose')
  app.listen(4000, ()=> {
    console.log('server is running on port 4000')
  })
}
startServer();