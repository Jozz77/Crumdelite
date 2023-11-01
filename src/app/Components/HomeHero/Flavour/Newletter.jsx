import React from "react";

export default function Newletter() {
  return (
    <div className=" relative px-[25%] bg-[#FBFBFB] py-20 mb-12 font-montserrat border-solid border-b-[1px] border-[#020e0154] ">
    <h1 className=" text-[2.3rem] font-semibold text-center mb-1">Join our Newsletter</h1>
    <p className="font-quicksand  text-center  text-[1.1rem] leading-[150%]">
        Subscribe for exclusive bread recipes, tips, and a thriving baking
        community. Join us in the kitchen!
      </p>

      <form action="" className=" pt-6">
        <label htmlFor="email">
        Email Address
        </label>
        <section className="flex justify-between pt-2">
            <input type="email" className=" bg-[#F5F5F5] rounded-[4px] outline-none py-2 px-[2%] w-[68%] " name="" id="email" />
            <button className=" bg-Primary rounded-[4px] px-[2%] text-white font-quicksand font-medium text-base w-[30%] ">Submit Now</button>
        </section>
      </form>
    </div>
  );
}
