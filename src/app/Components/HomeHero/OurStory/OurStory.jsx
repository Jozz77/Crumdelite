import Image from "next/image";
import React from "react";
import Image1 from "./Assets/Link1.png";

export default function OurStory() {
  return (
    <div className="our-story px-[5%] py-12 flex items-center justify-between mb-12  ">
      <section className="w-[45%] ">
        <Image src={Image1} className="w-full" alt="chefs" />
      </section>

      <section className="w-[50%]">
        <small className=" text-[0.9rem] font-semibold">About Our Bakery</small>
        <h1 className=" text-[2.3rem] font-semibold leading-none mb-4">Our Story</h1>
        <div className=" font-quicksand text-[1.1rem] leading-[150%] ">
          <p>
            At PanVans, we are passionate about creating a global bread
            experience that transcends borders and tantalizes taste buds. Our
            artisanal bakery brings you the finest selection of bread from
            around the world, curated with love by our team of international
            bakers.{" "}
          </p>
          <p className=" mt-2">
            From traditional French baguettes to exotic Asian-inspired
            creations, we strive to offer you an unparalleled journey through
            the diverse and delectable world of bread.
          </p>
          <p className=" mt-2">
            Quality, authenticity, and a touch of creativity define each loaf we
            craft. As we knead, mix, and bake with passion, we invite you to
            savor the harmony of flavors and embrace the rich culture that bread
            embodies{" "}
          </p>
        </div>
      </section>
    </div>
  );
}
