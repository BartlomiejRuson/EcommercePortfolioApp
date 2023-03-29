import Link from "next/link";
import React from "react";
import Nav from "../../components/Nav";
import Productslist from "../../components/Productslist";
function Jewelry({ products }) {
  const sortedItems = products.filter((item) => {
    return item.category == `jewelery`;
  });

  return (
    <>
      <Nav></Nav>
      <main className="max-w-screen-2xl mx-auto">
        <div className="flex items-center p-2 space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>

          <h3 className="font-semibold">
            <Link href="/">Back to homepage</Link>
          </h3>
        </div>
        <h1 className="mx-auto text-center text-4xl font-semibold py-3 ">Jewelry</h1>
        <Productslist products={sortedItems}></Productslist>
      </main>
    </>
  );
}

export default Jewelry;
export async function getServerSideProps() {
  const products = await fetch(
    "https://fakestoreapi.com/products?limit=12"
  ).then((res) => res.json());

  return {
    props: {
      products,
    },
  };
}
