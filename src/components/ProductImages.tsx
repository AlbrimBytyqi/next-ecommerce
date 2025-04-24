"use client";

import Image from "next/image";
import React, { useState } from "react";

// const images = [
//   {
//     id: 1,
//     url: "https://images.pexels.com/photos/30085252/pexels-photo-30085252.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
//   },
//   {
//     id: 2,
//     url: "https://images.pexels.com/photos/28041016/pexels-photo-28041016/free-photo-of-legno-paesaggio-natura-uomo.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
//   },
//   {
//     id: 3,
//     url: "https://images.pexels.com/photos/29732975/pexels-photo-29732975.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
//   },
//   {
//     id: 4,
//     url: "https://images.pexels.com/photos/31578534/pexels-photo-31578534/free-photo-of-pedoni-che-si-godono-una-giornata-di-sole-a-istanbul.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
//   },
// ];

const ProductImages = ({ items }: { items: any }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt=""
          fill
          sizes="50vw"
          className=" object-cover rounded-md"
        />
      </div>
      <div className=" flex justify-between gap-4 mt-8">
        {items.map((item: any, i: number) => (
          <div
            className=" w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={item._id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image?.url}
              alt=""
              fill
              sizes="30vw"
              className=" object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
