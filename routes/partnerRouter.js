const express = require('express')
const partnerRouter = express.Router()

partnerRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
  })
  .get((req, res) => {
    res.end('Will send the details of the partners to you')
  })
  .post((req, res) => {
    res.end(
      `Will add the promotions: ${req.body.name} with ${req.body.description} to you`
    )
  })
  .put((req, res) => {
    res.statusCode = 403
    res.end('PUT operation not supported on /partners')
  })
  .delete((req, res) => {
    res.end('Deleting all partners. Are you sure you wanted to do that?!')
  })

partnerRouter
  .route('/:partnerId')
  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
  })
  .get((req, res) => {
    res.end(
      `Will send the details of the partner ${req.params.partnerId} to you`
    )
  })
  .post((req, res) => {
    res.statusCode = 403
    res.end('POST operation not supported on /partners/Id')
  })
  .put((req, res) => {
    res.write(`Updating the partner: ${req.params.partnerId}\n`)
    res.end(
      `Will update the partner: ${req.body.name} with description ${req.body.description}`
    )
  })
  .delete((req, res) => {
    res.end(`Deleting partner ${req.params.partnerId}`)
  })

module.exports = partnerRouter
