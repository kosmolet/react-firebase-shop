const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.SK_STRIPE);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('it works'));

exports.api = functions.https.onRequest(app);

// http://localhost:5001/gunshop-7b627/us-central1/api
