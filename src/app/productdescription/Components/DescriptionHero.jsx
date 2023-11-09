"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Pic1 from "../Assets/Pic1.png";
import Pic2 from "../Assets/Pic2.png";
import Pic3 from "../Assets/Pic3.png";
import Pic4 from "../Assets/Pic4.png";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi"; 
import {  AiOutlineShoppingCart } from "react-icons/ai";

const images = [Pic2, Pic3, Pic4]; // Define your image sources

export default function Description() {
  const [count, setCount] = useState(3);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const [mainImage, setMainImage] = useState(Pic2); // Initial main image

  const handleImageClick = (imageSrc) => {
    setMainImage(imageSrc);
  };
  
  return (
    <div className="relative  mx-[5%] py-20 border-solid border-b-[1px] border-[#020e0154]">
      <section>
        <Link
          href="/wishlist"
          className=" hover:text-white hover:bg-Primary hover:border-none absolute rounded-[6px] border-[1px] border-solid border-[#DEE2E6] pl-[3%] pr-[1%] py-1 font-montserrat font-medium "
        >
          <button>back</button>
          <div className=" absolute top-[50%] translate-y-[-50%] left-[10%] ">
            <BiArrowBack />
          </div>
        </Link>
      </section>

      <section className="flex justify-between mt-12">
        <div className=" w-[47.5%] ">
          <div>
            <Image src={Pic1} className=" w-full" alt="Bread" />
          </div>
          <div className=" flex justify-between items-center">
            <Image src={Pic1} className=" w-1/3" alt="Bread" />
            <Image src={Pic3} className=" w-1/3" alt="Bread" />
            <Image src={Pic4} className=" w-1/3" alt="Bread" />
          </div>
        </div>
        {/* <div className="w-[47.5%]">
      <div>
        <Image src={mainImage} className="w-full" alt="Bread" />
      </div>
      <div className="flex justify-between items-center">
        {images.map((imageSrc, index) => (
          <div key={index} onClick={() => handleImageClick(imageSrc)}>
            <Image src={imageSrc} className="w-full" alt="Bread" />
          </div>
        ))}
      </div>
    </div> */}
        <div className=" w-[47.5%] ">
          <h1 className=" font-bold text-[2.4rem] ">
            Nutty, Hearty, and Simply Delicious Bread.
          </h1>
          <p className=" font-medium text-base font-quicksand leading-[150%] py-8 ">
            Golden Harvest Loaf: A delectable bread bursting with the rich
            flavors of nuts and seeds. Wholesome and hearty, it's a delightful,
            nutritious addition to any meal or snack.
          </p>
          <strong className=" font-quicksand font-bold text-[1.7rem] ">
            $125.00
          </strong>

          <div className="flex items-center gap-4 mt-4 ">
            <div className=" flex items-center gap-4 bg-[#F7F8FD] rounded-[10px] px-4 text-base font-semibold ">
              <button
                className="px-2 py-2 hover:text-Primary "
                onClick={decrement}
              >
                <AiOutlineMinus />
              </button>
              <p className="px-2 py-2 ">{count}</p>
              <button
                className="px-2 py-2 hover:text-Primary "
                onClick={increment}
              >
                <AiOutlinePlus />
              </button>
            </div>
            <div className=" relative text-white">
              <Link href="/cart" className="button bg-Primary rounded-[4px] py-2 pl-16 pr-12  font-quicksand font-medium text-base  ">
                Check Out
              </Link>
              <div className=" absolute top-[50%] translate-y-[-50%] left-[20%] ">
            <AiOutlineShoppingCart />
          </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" font-montserrat mt-12">
        <h2 className=" text-[1.8rem] font-bold leading-[120%] ">Description</h2>
        <div className=" mt-4 font-quicksand leading-[150%] text-base w-[70%] flex flex-col gap-4 ">
          <p>
            Golden Harvest Loaf: Experience the artistry of our 'Golden Harvest
            Loaf,' a bread that celebrates the harmonious blend of nature's
            bounty. This masterpiece combines the toasted richness of almonds
            and walnuts with the crunch of sunflower seeds, all set against a
            backdrop of hearty whole grains.
          </p>
          <p className="">
            Each bite unfolds a symphony of flavors and textures, with a nutty,
            slightly sweet profile that delights the senses. Beyond its
            delectable taste, this bread is a nutritional treasure trove,
            delivering healthy fats, protein, essential vitamins, and dietary
            fiber.
          </p>
          <p >
            Enjoy it at any time of the day, from breakfast to dinner, and savor
            its versatility as a standalone treat or paired with your favorite
            spreads. Crafted with artisanal precision and free from artificial
            additives, the 'Golden Harvest Loaf' is the epitome of wholesome,
            flavorful indulgence.
          </p>
        </div>
      </section>
    </div>
  );
}
