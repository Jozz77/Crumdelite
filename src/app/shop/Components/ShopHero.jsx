import Button from "@/app/Components/HomeHero/Button/Button";
import Image from "next/image";
import React from "react";
import Dotted from "../Assets/Dotted.png";
import Bread from "../Assets/Bread.png";
import { AiFillStar } from "react-icons/ai";

export default function ShopHero() {
  return (
    <div className="shop-hero flex items-center gap-8 py-20 px-[5%] h-[100vh]  ">
      <section className="relative w-[50%] ">
        <h1 className=" font-sacramento text-[4rem] leading-[120%] ">
          Crumdelite Flavorful Fare Discounted Loaves
        </h1>
        <p className=" font-quicksand text-[1.05rem] leading-[120%]  text-[#2C2E33] ">
          Delight in budget-friendly Crumdelite loaves, where flavor meets
          affordability in every delicious bite. Explore our tempting discounted
          offers today!
        </p>
        <div className="mt-6">
          <Button text="Shop Now" />
        </div>

        <div className=" absolute top-[80%] left-[28%] xxl:left-[25%] w-[100%] flex items-end gap-4">
          <div className=" w-[25%] ">
            <Image src={Dotted} className=" w-full" alt="Dotted image" />
          </div>
          <div>
            <div className=" flex gap-2 items-center">
              <h5>4.3</h5>
              <div className=" text-[1rem] text-[#CC9600] flex gap-1 ">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
            <p>(11.6k Total Review)</p>
          </div>
        </div>
      </section>

      <section className=" relative w-[25%] ">
        <Image src={Bread} className="w-full" alt="Bread" />

        <div className="absolute w-[100%] top-[2%] left-[70%] flex gap-2">
          <div className=" w-[50%] ">
            <Image src={Dotted} className=" w-full" alt="Dotted image" />
          </div>
          <div className=" uppercase text-[1rem] font-medium ">
            <p className="  ">Indian Bread</p>
            <strong className=" font-quicksand text-[1.7rem] font-semibold  ">
              #3,000
            </strong>
            <p className=" mt-2">Sold out</p>
            <strong className=" font-quicksand text-[1.7rem] font-semibold  ">
              #1,000
            </strong>
          </div>
        </div>
      </section>
    </div>
  );
}
