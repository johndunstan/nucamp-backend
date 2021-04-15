const express = require('express')
const promotionRouter = express.Router()

promotionRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
  })
  .get((req, res) => {
    res.end(`Will send the details of the promotions to you`)
  })
  .post((req, res) => {
    res.end(
      `Will add the promotions: ${req.body.name} with description ${req.body.description} to you`
    )
  })
  .put((req, res) => {
    res.statusCode = 403
    res.end('PUT operation not supported on /promotions')
  })
  .delete((req, res) => {
    res.end('Deleting all promotions')
  })

promotionRouter
  .route('/:promotionId')
  .all((req, res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    next()
  })
  .get((req, res) => {
    res.end(
      `Will send the details of the promotion ${req.params.promotionId} to you`
    )
  })
  .post((req, res) => {
    res.statusCode = 403
    res.end(`POST operation not supported on /promotions/Id`)
  })
  .put((req, res) => {
    res.write(`Updating the campsite: ${req.params.promotionId}\n`)
    res.end(
      `Will update the promotion ${req.body.name} with description ${req.body.description}`
    )
  })
  .delete((req, res) => {
    res.end(`Deleting promotion ${req.params.promotionId}`)
  })

module.exports = promotionRouter
