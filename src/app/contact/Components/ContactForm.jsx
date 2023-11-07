import Image from "next/image";
import React from "react";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsFacebook } from "react-icons/bs"; 
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai"; 
import { AiFillYoutube } from "react-icons/ai"; 

export default function ContactForm() {
  return (
    <div className=" relative px-[15%] py-24 mb-6 font-montserrat border-solid border-y-[1px] border-[#020e0154] ">
      <h1 className=" text-[2.3rem] font-semibold text-center mb-1">
        Contact Us
      </h1>
      <p className="font-quicksand text-center text-[1.1rem] leading-[120%]">
        Quality, authenticity, and a touch of creativity define each loaf we
        produce.
      </p>

      <div className="pt-16 flex justify-between items-center ">
        <div className= " contact1 w-[47.5%] px-[3%] rounded-[4px] flex flex-col gap-16 py-8 text-white ">
          <section>
            <h2 className=" text-[1.5rem] font-semibold ">Contact Information</h2>
            <p className=" text-[#C9C9C9] ">
              Say something to start a live chat!
            </p>
          </section>
          <section className="flex flex-col gap-8 text-base  ">
            <div className="flex gap-4 items-center">
              <PiPhoneCallFill className="text-[1.3rem]"/>
              <p>+123 456 7890</p>
            </div>
            <div className="flex gap-4 items-center">
              <MdEmail className="text-[1.3rem]"/>
              <p>demo@gmail.com</p>
            </div>
            <div className="flex gap-4 items-center">
              <MdLocationOn className="text-[1.3rem]"/>
              <p className=" w-[75%]">no 55, Unity street off Idunmota, Island, Lagos State</p>
            </div>
          </section>

          <section className="flex text-[1.2rem] gap-3 pt-12 ">
            <AiFillTwitterCircle className="" />
            <BsFacebook className="" />
            <FaLinkedin className="" />
            <AiFillYoutube className="" />
          </section>
        </div>

        <form action="" className="w-[47.5%]  ">
          <div>
            <label htmlFor="name" className=" text-base">Name</label>
            <input type="text" className=" w-full bg-[#F5F5F5] rounded-[4px] outline-none px-[3%] py-2 mt-1 " name="name" id="name" />
          </div>
          <div className=" mt-4 ">
            <label htmlFor="email" className=" text-base">Email</label> 
            <input type="email" className=" w-full bg-[#F5F5F5] rounded-[4px] outline-none px-[3%] py-2 mt-1 " name="email" id="email" />
          </div>
          <div className=" mt-4 ">
            <label htmlFor="number" className=" text-base">Phone Number</label>
            <input type="number" className=" w-full bg-[#F5F5F5] rounded-[4px] outline-none px-[3%] py-2 mt-1 " name="number" id="number" />
          </div>
          <div className=" mt-4 ">
            <label htmlFor="message" className=" text-base">Message</label>
            <textarea type="text" rows={3} className=" resize-none w-full bg-[#F5F5F5] rounded-[4px] outline-none px-[3%] py-2 mt-1 " name="message" id="message" />
          </div>
         <div className=" mt-4 flex justify-end">
         <button className=" text-right bg-[#108F0A] text-white rounded-[4px] px-8 py-2 font-medium text-base ">Send</button>
         </div>
        </form>
      </div>
    </div>
  );
}
