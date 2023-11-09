"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Cart from "../Assets/Cart.png";
import Image from "next/image";

export default function CartHero() {
  const [count, setCount] = useState(3);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="relative  mx-[5%] py-20 border-solid border-b-[1px] border-[#020e0154]">
      <section>
        <Link
          href="/productdescription"
          className=" hover:text-white hover:bg-Primary hover:border-none absolute rounded-[6px] border-[1px] border-solid border-[#DEE2E6] pl-[3%] pr-[1%] py-1 font-montserrat font-medium "
        >
          <button>back</button>
          <div className=" absolute top-[50%] translate-y-[-50%] left-[10%] ">
            <BiArrowBack />
          </div>
        </Link>
      </section>

      <section className=" font-montserrat">
        <table className="mt-16 w-full text-left">
          <thead className=" text-base font-semibold">
            <tr className="">
              <th className=" pb-6">Product</th>
              <th className=" pb-6">Price</th>
              <th className=" pb-6">Quantity</th>
              <th className=" pb-6">Subtotal</th>
            </tr>
          </thead>
          <tbody className=" text-base font-quicksand">
            <tr>
              <td className=" w-[35%] pb-4">
                <section className="flex gap-4">
                  <div className=" w-[15%] ">
                    <Image src={Cart} className="w-full" alt="Bread" />
                  </div>
                  <p>Nutty, Hearty Bread</p>
                </section>
              </td>
              <td className=" w-[15%] pb-4">$650</td>

              <td className=" relative w-[35%] pb-4">
                <div className=" absolute top-0 flex items-center gap-4 bg-[#F7F8FD] rounded-[10px] px-4 text-base font-semibold ">
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
              </td>

              <td className=" w-[15%] pb-4">#500</td>
            </tr>

            <tr>
              <td className=" w-[35%] pb-4">
                <section className="flex gap-4">
                  <div className=" w-[15%] ">
                    <Image src={Cart} className="w-full" alt="Bread" />
                  </div>
                  <p>Nutty, Hearty Bread</p>
                </section>
              </td>
              <td className=" w-[15%] pb-4">$650</td>

              <td className=" relative w-[35%] pb-4">
                <div className=" absolute top-0 flex items-center gap-4 bg-[#F7F8FD] rounded-[10px] px-4 text-base font-semibold ">
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
              </td>

              <td className=" w-[15%] pb-4">#500</td>
            </tr>
          </tbody>
        </table>

        <Link href="">
          <button className=" hover:bg-Primary hover:text-white text-base mt-8 font-medium px-6 py-2 rounded-[4px] border-solid border-[1px] border-[#DBE0E2] ">
            Continue Shopping
          </button>
        </Link>
      </section>

      <section className=" w-[40%] ml-[60%] text-base font-montserrat mt-8 font-normal px-[2%] py-4 rounded-[4px] border-solid border-[1px] border-[#DBE0E2] ">
        <h2 className=" font-semibold text-[1.2rem] text-right ">Cart Summary</h2>
        <table className=" w-full my-2">
          <tr>
            <td className=" pt-4 w-3/4">Subtotal:</td>
            <td className="pt-4 w-1/4 font-quicksand">#600</td>
          </tr>
          <tr>
            <td className="pt-4">Shipping:</td>
            <td className="pt-4 font-quicksand">#600</td>
          </tr>
          <tr className=" font-semibold">
            <td className="pt-4">Total:</td>
            <td className="pt-4 font-quicksand">#1200</td>
          </tr>
        </table>
        <Link href="" className="flex justify-end">
          <button className="bg-Primary text-white hover:bg-transparent hover:text-black text-base mt-4 font-medium px-6 py-2 rounded-[4px] hover:border-solid hover:border-[1px] border-[#DBE0E2] ">
          Proceed to Checkout
          </button>
        </Link>
      </section>
    </div>
  );
}
