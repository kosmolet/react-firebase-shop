const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SK);
// const stripe = require('stripe')(`${functions.config().stripe.key}`);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('it works'));

app.post('/payments/create', async (req, res) => {
  try {
    const total = req.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: 'usd'
    });

    return res.status(201).send({
      clientSecret: paymentIntent.client_secret
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

exports.api = functions.https.onRequest(app);
