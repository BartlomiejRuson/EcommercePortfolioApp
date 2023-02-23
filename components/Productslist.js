import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
function Productslist({ products }) {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 text-center">
      {products.map(({ id, title, price, image, description }) => (
        <div
          key={id}
          className="border flex justify-between flex-col m-3 rounded-sm bg-white"
        >
          <Image
            src={image}
            width={200}
            height={200}
            className="object-contain p-3 m-auto"
            alt={title}
          ></Image>
          <h2 className="p-2 font-semibold ">{title}</h2>
          <h2 className="font-semibold ">{price}$</h2>
          <h2 className="pt-2 line-clamp-3">{description}</h2>
          <button
            onClick={() => {
              const product = {
                id:id,
                title:title,
                price:price,
                image:image,
                description:description
              };
              dispatch(addToBasket(product))
            }}
            className="p-2 my-3 mx-3 font-semibold opacity-90 hover:opacity-100 transition-all text-white bg-darkRed rounded-md"
          >
            ADD TO BASKET
          </button>
        </div>
      ))}
    </div>
  );
}

export default Productslist;
