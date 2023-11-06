import Image from "next/image";
import React from "react";
import { PiPhoneCallFill } from "react-icons/pi";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import facebook from "../Assets/facebook.png";

export default function ContactForm() {
  return (
    <div className=" relative px-[10%] py-20 mb-6 font-montserrat border-solid border-y-[1px] border-[#020e0154] ">
      <h1 className=" text-[2.3rem] font-semibold text-center mb-1">
        Contact Us
      </h1>
      <p className="font-quicksand  text-center  text-[1.1rem] leading-[120%]">
        Quality, authenticity, and a touch of creativity define each loaf we
        produce.
      </p>

      <div className="pt-10 ">
        <div className= " contact1 w-[45%] px-[2%] flex flex-col gap-16 py-8 text-white ">
          <section>
            <h2>Contact Information</h2>
            <p className=" text-[#C9C9C9] ">
              Say something to start a live chat!
            </p>
          </section>
          <section className="flex flex-col gap-8  ">
            <div className="flex gap-4 items-center">
              <PiPhoneCallFill />
              <p>+123 456 7890</p>
            </div>
            <div className="flex gap-4 items-center">
              <PiPhoneCallFill />
              <p>+123 456 7890</p>
            </div>
            <div className="flex gap-4 items-center">
              <PiPhoneCallFill />
              <p>+123 456 7890</p>
            </div>
          </section>

          <section className="flex text-[1rem] gap-2 pt-12 ">
            <AiFillTwitterCircle className="" />
            <BsFacebook className="" />
            <FaLinkedin className="" />
            <AiFillYoutube className="" />
          </section>
        </div>

        <form action="" className="  "></form>
      </div>
    </div>
  );
}
