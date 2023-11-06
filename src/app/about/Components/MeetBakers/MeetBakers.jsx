import React from "react";
import MeetBakers1 from "./Assets/MeetBakers1.png";
import MeetBakers2 from "./Assets/MeetBakers2.png";
import MeetBakers3 from "./Assets/MeetBakers3.png";
import MeetBakers4 from "./Assets/MeetBakers4.png";
import Image from "next/image";

export default function MeetBakers() {
  return (
    <div className=" relative px-[5%] bg-[#FBFBFB] py-20 mb-12 font-montserrat border-solid border-y-[1px] border-[#020e0154] ">
      <h1 className=" text-[2.3rem] font-semibold text-center mb-1">
        Meet the Bakers
      </h1>
      <p className="font-quicksand px-[20%] text-center  text-[1.1rem] leading-[150%]">
        Introducing Our Master Bakers: The Creative Minds Behind Your Favorite
        Bread Creations.
      </p>

      <section className=" flex justify-between mt-8 ">
        <div className=" w-1/5 ">
          <div>
            <Image
              src={MeetBakers1}
              className=" w-full "
              alt="Meet The Bakers"
            />
          </div>
          <h2 className=" text-base font-semibold mt-2 ">Endurance Lone</h2>
          <p className=" font-quicksand text-[0.9rem] leading-[150%] ">
            Pioneering innovation, turning dreams into groundbreaking realities.
          </p>
        </div>
        <div className=" w-1/5 ">
          <div>
            <Image
              src={MeetBakers2}
              className=" w-full "
              alt="Meet The Bakers"
            />
          </div>
          <h2 className=" text-base font-semibold mt-2 ">Mr Thomas</h2>
          <p className=" font-quicksand text-[0.9rem] leading-[150%] ">
            Energizing goals with determination, achieving success through
            collective strength
          </p>
        </div>
        <div className=" w-1/5 ">
          <div>
            <Image
              src={MeetBakers3}
              className=" w-full "
              alt="Meet The Bakers"
            />
          </div>
          <h2 className=" text-base font-semibold mt-2 ">Ebenezer Francis</h2>
          <p className=" font-quicksand text-[0.9rem] leading-[150%] ">
            Harmonizing efforts, creating synergy for impactful accomplishments.
          </p>
        </div>
        <div className=" w-1/5 ">
          <div>
            <Image
              src={MeetBakers4}
              className=" w-full "
              alt="Meet The Bakers"
            />
          </div>
          <h2 className=" text-base font-semibold mt-2 ">Sweet Mary</h2>
          <p className=" font-quicksand text-[0.9rem] leading-[150%] ">
            Pursuing excellence with precision, achieving greatness through
            attention to detail.
          </p>
        </div>
      </section>
    </div>
  );
}
