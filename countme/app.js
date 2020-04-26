const fastify = require('fastify')({
  // logger: true
})
fastify.register(require('fastify-formbody'))

let sum = 0

fastify.post('/', function (req, reply) {
  let number = Number(Object.keys(req.body)[0])
  console.log("number", number)
  sum += number
  return reply.send(sum)
})
fastify.get('/count', function (req, reply) {

  return reply.send(sum)
})


fastify.listen(80, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`server listening on ${address}`)
})