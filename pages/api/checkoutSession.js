const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { items,email } = req.body;
    
  const productData = items.map(item=>({
    quantity:1,
      price_data:{
        unit_amount:item.price*100,
          currency:'usd',
          product_data: {
              name: item.title,
              description: item.description,
              images: [item.image],
            }
      }
  }))


  if (req.method === 'POST') {

    try {

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items:productData,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/basket`,
      });
      console.log(session)
      res.status(200).json({id:session.id})
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}