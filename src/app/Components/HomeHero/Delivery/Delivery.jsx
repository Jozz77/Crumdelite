import Image from "next/image";
import Link from "next/link";
import React from "react";
import Delivery1 from "./Assets/Delivery1.png";
import Delivery2 from "./Assets/Delivery2.png";
import Delivery3 from "./Assets/Delivery3.png";

export default function Delivery() {
  return (
    <div className="delivery relative px-[15%] py-20 mb-6 font-montserrat border-solid border-y-[1px] border-[#020e0154] ">
      <h1 className=" text-[2.3rem] font-semibold text-center mb-1">
        Delivery and Pick Up Options
      </h1>
      <p className="font-quicksand  text-center  text-[1.1rem] leading-[120%]">
        The convenience of delivery or the satisfaction of picking up your order
        fresh from the oven.
      </p>
      <Link
        href=""
        className=" text-Primary flex justify-center text-[1.2rem] tracking-[0.25px] mt-4 font-semibold "
      >
        View More
      </Link>

      <section className=" flex justify-between mt-10">
        <div className="shadow-md w-[30%] border-solid border-black border-[1px] px-[2%] py-6 rounded-[10px] ">
          <div>
            <Image src={Delivery1} className=" w-full" alt="Delivery" />
          </div>
          <h2 className=" text-base font-semibold mt-2">Standard Delivery</h2>
          <p className=" font-quicksand text-[0.95rem] leading-[150%] ">
            Reliable delivery to your doorstep within the designated area.
          </p>
        </div>
        <div className="shadow-md w-[30%] border-solid border-black border-[1px] px-[2%] py-6 rounded-[10px] ">
          <div>
            <Image src={Delivery2} className=" w-full" alt="Delivery" />
          </div>
          <h2 className=" text-base font-semibold mt-2">Pickup Collection</h2>
          <p className=" font-quicksand text-[0.95rem] leading-[150%] ">
          Conveniently collect your order from our bakery location at your preferred time
          </p>
        </div>
        <div className="shadow-md w-[30%] border-solid border-black border-[1px] px-[2%] py-6 rounded-[10px] ">
          <div>
            <Image src={Delivery1} className=" w-full" alt="Delivery" />
          </div>
          <h2 className=" text-base font-semibold mt-2">Express Delivery</h2>
          <p className=" font-quicksand text-[0.95rem] leading-[150%] ">
          Get your bakery treats faster with our speedy express service
          </p>
        </div>
      </section>
    </div>
  );
}
