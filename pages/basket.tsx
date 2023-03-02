import { useSession,signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import Nav from "../components/Nav";
const axios = require('axios').default;
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
import {
  removeFromBasket,
  selectItems,
  selectTotalPrice,
} from "../slices/basketSlice";
function Basket() {
  const  session  = useSession()
  const items = useSelector(selectItems);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();
  const createCheckoutSession = async () =>{
    const stripe = await stripePromise;

      const checkOutSession = await axios.post('/api/checkoutSession',{
        items:items,
        email:session.data.user.email
      })

      const redirect = await stripe.redirectToCheckout({
        sessionId:checkOutSession.data.id
      });
      if(redirect.error){
        alert(redirect.error.message)
      }

  }
  return (
    <div>
      <Nav></Nav>
      <div className="max-w-screen-2xl mx-auto p-3 text-center">
        <h1 className="text-3xl mt-2 mb-5">
          {items.length !== 0 ? "Your Basket. " : "Your basket is empty"}{" "}
          {items.length !== 0 ? `Total price is ${totalPrice} $` : ""}
        </h1>
        <main className="grid grid-cols-6">
          <div className="col-span-5 mr-5">
          {items.map(({ id, title, price, image, description }) => (
            <div
              key={id}
              className="border flex justify-between flex-row m-3 rounded-sm bg-white"
            >
              <Image
                src={image}
                width={200}
                height={200}
                className="object-contain p-3 mr-auto"
                alt={title}
              ></Image>
              <div className="mr-auto">
                <h2 className="p-2 font-semibold ">{title}</h2>
                <h2 className="font-semibold ">{price}$</h2>
                <h2 className="pt-2 line-clamp-3">{description}</h2>
                <button
                  onClick={() => {
                    dispatch(removeFromBasket({ id, price }));
                  }}
                  className="p-2 my-3 mx-3 font-semibold opacity-90 hover:opacity-100 transition-all text-white bg-darkRed rounded-md"
                >
                  REMOVE FROM BASKET
                </button>
              </div>
            </div>
          ))}
          </div>
          {items.length>0?          <div className="flex flex-col space-y-4 text-lg">
            <h1>Order Summary</h1>
            <h1>{`(${items.length}) `}{ items.length>=2 ?'items: ':"item: "} {totalPrice} $</h1>
            <h1 className="border-b-2 pb-1">Delivery: Free</h1>
            <h1 className="font-bold text-xl">Total: {totalPrice} $</h1>
            {session?            <button onClick={()=>{createCheckoutSession()}}
            className="p-2 my-3 mx-3 font-semibold opacity-90 hover:opacity-100 transition-all text-white bg-darkRed rounded-md"
          >
            CHECK OUT
          </button>:
                      <button onClick={()=>{signIn()}}
                      className="p-2 my-3 mx-3 font-semibold opacity-90 hover:opacity-100 transition-all text-white bg-darkRed rounded-md"
                    >
                     SIGN IN TO CHECK OUT
                    </button>}

          </div>:null}

        </main>
      </div>
    </div>
  );
}

export default Basket;
