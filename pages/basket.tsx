import Image from "next/image";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Nav from "../components/Nav";
import { removeFromBasket, selectItems } from "../slices/basketSlice";
function Basket() {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();
  return (
    <div>
      <Nav></Nav>
      <div className="max-w-screen-2xl mx-auto p-3 text-center">
        <h1 className="text-3xl mt-2 mb-5">
          {items.length !== 0 ? "Your Basket" : "Your basket is empty"}
        </h1>
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

                  dispatch(removeFromBasket(id));
                }}
                className="p-2 my-3 mx-3 font-semibold opacity-90 hover:opacity-100 transition-all text-white bg-darkRed rounded-md"
              >
                REMOVE FROM BASKET
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Basket;
