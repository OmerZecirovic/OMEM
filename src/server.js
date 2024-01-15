const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_51OYrgkE9IaDnmeAe8jdsz1r4l5JGzz0RzKvC2VRAMHYchfYP4bUbtmFSEvG4lFteEodwg3Zx8ObBut2ppH42SnyS007btmvAPP');

app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  try {
    // Create a Checkout Session on the server
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Your Product',
            },
            unit_amount: 1000, // amount in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/success', // Redirect after successful payment
      cancel_url: 'http://localhost:3000/cancel', // Redirect if payment is canceled
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
