const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(
  'sk_test_51IqIfPA8aPbaxRBHngtmUJohLAjthUyzPI5crKhk33tUM7MTWsCfbaA4GTGChf42EM54MjKFOJvzXw18WKAp8ebm00q2ceK8ea'
)
// APi

// app config
const app = express()

//Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

//Api routes

app.post('/payments/create', async (request, response) => {
  const total = request.query.total

  console.log('Payment Request Received', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 'total',
    currency: 'usd',
  })

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})

//listen command
exports.api = functions.https.onRequest(app)
