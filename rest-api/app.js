const fastify = require('fastify')({ logger: true })
const cors = require('@fastify/cors')

fastify.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
})
fastify.register(require('./routes'), { prefix: '/api' })
// Run the server!
const start = async () => {
  try {
    await fastify.listen(4000, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
