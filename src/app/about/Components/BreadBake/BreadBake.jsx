import React from "react";
import BreadBake1 from "./Assets/BreadBake1.png";
import BreadBake2 from "./Assets/BreadBake2.png";
import BreadBake3 from "./Assets/BreadBake3.png";
import BreadBake4 from "./Assets/BreadBake4.png";
import Image from "next/image";

export default function BreadBake() {
  return (
    <div className=" relative px-[5%] bg-[#FBFBFB] py-20 mb-12 font-montserrat border-solid border-y-[1px] border-[#020e0154] ">
      <h1 className=" text-[2.3rem] font-semibold text-center mb-1">
        Bread Baking Philosophy
      </h1>
      <p className="font-quicksand px-[20%] text-center  text-[1.1rem] leading-[150%]">
        Unveiling Our Bread Baking Philosophy: Crafting Artisanal Loaves with
        Passion, Precision, and Wholesome Ingredients.
      </p>

      <section className=" flex justify-between mt-8 ">
        <div className=" w-1/5 ">
          <div>
            <Image
              src={BreadBake1}
              className=" w-full "
              alt="Meet The Bakers"
            />
          </div>
          <h2 className=" text-base font-semibold mt-2 ">
            Quality Ingredients First
          </h2>
          <p className=" font-quicksand text-[0.9rem] leading-[150%] ">
            We believe in using the finest and freshest ingredients, carefully
            selected to ensure superior taste, texture, and nutritional value in
            every loaf.
          </p>
        </div>
        <div className=" w-1/5 ">
          <div>
            <Image
              src={BreadBake2}
              className=" w-full "
              alt="Meet The Bakers"
            />
          </div>
          <h2 className=" text-base font-semibold mt-2 ">
            Respect for Traditions
          </h2>
          <p className=" font-quicksand text-[0.9rem] leading-[150%] ">
            Our breadmaking is rooted in time-honored artisanal techniques,
            blending tradition with innovation to create exceptional,
            handcrafted bread that tells a story.
          </p>
        </div>
        <div className=" w-1/5 ">
          <div>
            <Image
              src={BreadBake3}
              className=" w-full "
              alt="Meet The Bakers"
            />
          </div>
          <h2 className=" text-base font-semibold mt-2 ">
            Patience and Precision
          </h2>
          <p className=" font-quicksand text-[0.9rem] leading-[150%] ">
            Each bread demands time and attention. We exercise patience,
            allowing natural fermentation and proofing, resulting in bread with
            character and complexity.
          </p>
        </div>
        <div className=" w-1/5 ">
          <div>
            <Image
              src={BreadBake4}
              className=" w-full "
              alt="Meet The Bakers"
            />
          </div>
          <h2 className=" text-base font-semibold mt-2 ">Crafted with Love</h2>
          <p className=" font-quicksand text-[0.9rem] leading-[150%] ">
            Baking is an art form, and every loaf is a labor of love. Crumdelite
            pour our heart into every step, ensuring our bread delights and
            nourishes your soul.
          </p>
        </div>
      </section>
    </div>
  );
}
