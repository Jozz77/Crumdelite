"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import CrumdeliteFlavour1 from "./Assets/CrumdeliteFlavour1.png";
import CrumdeliteFlavour2 from "./Assets/CrumdeliteFlavour2.png";
import CrumdeliteFlavour3 from "./Assets/CrumdeliteFlavour3.png";
import Baguette from "./Assets/Chip.png";

export default function Flavour() {
  return (
    <div className=" pt-12 mb-6 font-montserrat ">
      <section className="flex overflow-hidden w-full whitespace-nowrap">
        <div className="animate-marquee w-full">
          <Image
            src={CrumdeliteFlavour1}
            className="w-full"
            alt="Crumdelite Flavours 1"
          />
        </div>
        <div className="animate-marquee w-full">
          <Image
            src={CrumdeliteFlavour2}
            className="w-full"
            alt="Crumdelite Flavours 2"
          />
        </div>
        <div className="animate-marquee w-full">
          <Image
            src={CrumdeliteFlavour3}
            className="w-full"
            alt="Crumdelite Flavours 3"
          />
        </div>
      </section>

      <section className=" px-[5%] mt-6 flex justify-between ">
        <div className=" w-[30%] ">
          <div>
            <Image src={Baguette} className="w-full" alt="Baguette" />
          </div>
          <h2 className=" text-[1.05rem] font-semibold pt-2 ">
            Baguette
          </h2>
          <p className=" text-[0.9rem] leading-[150%] font-quicksand ">
            Its long, slender shape and crisp exterior create an irresistible
            contrast to its soft, airy crumb, making it an iconic French
            delight.
          </p>
        </div>
        <div className=" w-[30%] ">
          <div>
            <Image src={Baguette} className="w-full" alt="Baguette" />
          </div>
          <h2 className=" text-[1.05rem] font-semibold pt-2 ">
            Baguette
          </h2>
          <p className=" text-[0.9rem] leading-[150%] font-quicksand ">
            Its long, slender shape and crisp exterior create an irresistible
            contrast to its soft, airy crumb, making it an iconic French
            delight.
          </p>
        </div>
        <div className=" w-[30%] ">
          <div>
            <Image src={Baguette} className="w-full" alt="Baguette" />
          </div>
          <h2 className=" text-[1.05rem] font-semibold pt-2 ">
            Baguette
          </h2>
          <p className=" text-[0.9rem] leading-[150%] font-quicksand ">
            Its long, slender shape and crisp exterior create an irresistible
            contrast to its soft, airy crumb, making it an iconic French
            delight.
          </p>
        </div>
      </section>
      <hr  className=" border-solid border-b-[1px] border-[#020e0154] mx-[5%] mt-12 "/>
    </div>
  );
}
