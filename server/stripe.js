const express = require('express');
const router = express.Router();
require('dotenv').config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


router.post('/checkout', async (req, res) => {
    try {
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        line_items: [
          {
            price: COFFEE_PRICE_ID,  // Pre-created Price ID
            quantity: 1,
          },
        ],
        allow_promotion_codes: false,
        success_url: `${process.env.PUBLIC_BASE_URL}/thanks?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.PUBLIC_BASE_URL}/cancelled`,
      });
  
      res.json({ url: session.url });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to create session' });
    }
  });


module.exports = router;