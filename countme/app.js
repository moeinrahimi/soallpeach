const fastify = require('fastify')({
  // logger: true
})
fastify.register(require('fastify-formbody'))
// const rawBody = require('raw-body')
// fastify.addContentTypeParser('*', (req, done) => {
//   console.log(req.headers['content-length'])
//   rawBody(req, {
//     length: req.headers['content-length'],
//     limit: '1mb',
//     encoding: 'utf8', // Remove if you want a buffer
//   }, (err, body) => {
//   console.log("body", body)
//     if (err) return done(err)
//     done(null, parse(body))
//   })
// })
let sum = 0

fastify.post('/', function (req, reply) {
  // console.log(req.body,'-------')
  // let number = Number(Object.keys(req.body)[0])
  // console.log("number", number)
  sum += parseInt(req.body)
  console.log("sum", sum)
  return reply.send(sum)
})
fastify.get('/count', function (req, reply) {

  return reply.send(sum)
})


fastify.listen(80,'0.0.0.0', function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`server listening on ${address}`)
})