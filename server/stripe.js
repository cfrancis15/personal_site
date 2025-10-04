const express = require('express');
const router = express.Router();


require('dotenv').config();



const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);




router.post('/checkout', async (req, res) => {
    try {



      const session = await stripe.checkout.sessions.create({
        mode:"payment",
      
      
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: { name: 'Coffee' },
              unit_amount: 500, // 500 pennies!
            },
            quantity: 1,
          },
        ],
        allow_promotion_codes: false,
        success_url: `${process.env.PUBLIC_BASE_URL}/`,
        cancel_url: `${process.env.PUBLIC_BASE_URL}/`,
      });
  
      res.json({ url: session.url });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to create session' });
    }
  });


module.exports = router;