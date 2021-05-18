// const express = require("express");
// const app = express();
// // This is your real test secret API key.
// const stripe = require("stripe")("sk_test_51IoCj3KngNA5hdnVJRtqntV6tpr4uaGXWEoxeL0AphnkH3FP5nWPGQBoczZSU1JK09OT2Ry3z4TgGsuYpKc1BNHX00adjeiQzR");

// app.use(express.static("."));
// app.use(express.json());

// const calculateOrderAmount = items => {
//   // Replace this constant with a calculation of the order's amount
//   // Calculate the order total on the server to prevent
//   // people from directly manipulating the amount on the client
//   return 1400;
// };

// app.post("/create-payment-intent", async (req, res) => {
//   const { items } = req.body;
//   // Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: calculateOrderAmount(items),
//     currency: "usd"
//   });

//   res.send({
//     clientSecret: paymentIntent.client_secret
//   });
// });

// app.listen(3000, () => console.log('Node server listening on port 3000!'));
