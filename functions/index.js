const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SK);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('it works'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Recieved for this amount >  ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd'
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
});

exports.api = functions.https.onRequest(app);
