import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        <div className="bgJewelry h-48 flex items-center justify-around flex-col">
          <h3 className="text-3xl font-semibold text-white">
            {" "}
            Check out our Jewelry
          </h3>
          <Link href="/categories/jewelry">
            <button className="text-lg bg-white border border-white rounded-lg p-2 opacity-90 hover:opacity-100 hover:scale-110 transition-all">
              Let's go
            </button>
          </Link>
        </div>
        <div className="bgClothes h-48 flex items-center justify-around flex-col">
          <h3 className="text-3xl font-semibold text-white">
            {" "}
            Check out our clothes
          </h3>
          <Link href="/categories/clothes">
            <button className="text-lg bg-white border border-white rounded-lg p-2 opacity-90 hover:opacity-100 hover:scale-110 transition-all">
              Let's go
            </button>
          </Link>
        </div>

        <div className="bgElectronics h-48 flex items-center justify-around flex-col">
          <h3 className="text-3xl font-semibold text-white">
            {" "}
            Check out our Electronics
          </h3>
          <Link href="/categories/electronics">
            {" "}
            <button className="text-lg bg-white border border-white rounded-lg p-2 opacity-90 hover:opacity-100 hover:scale-110 transition-all">
              Let's go
            </button>
          </Link>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
