import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";


export default function BreadCard({name, price, image}) {
  return (
    <div className="font-quicksand">
      <section>
        <Image src={image} className=" w-full " alt="Bread" />
      </section>
      <section className="flex justify-between items-center mt-2">
        <div>
          <Link href="/productdescription">
          <h3 className=" hover:text-Primary text-base font-medium ">{name}</h3>
          </Link>
          <div className="flex justify-between items-center mt-2">
            <p className=" text-base font-medium">Price</p>
            <strong className=" font-bold text-[1.05rem] ">{price}</strong>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className=" text-[1rem] text-[#CC9600] flex gap-1 ">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <small className=" font-semibold text-[0.85rem] text-[#2B2B2B] ">
              (65)
            </small>
          </div>
        </div>
        <div className=" bg-Primary text-white rounded-full p-1 text-[1.1rem] ">
          <Link href="/wishlist">
            <AiOutlineShoppingCart />
          </Link>
        </div>  
      </section>
    </div>
  );
}
