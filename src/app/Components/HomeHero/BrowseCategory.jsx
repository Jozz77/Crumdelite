'use client'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Category1 from  './Assets/Category1.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination, Navigation } from "swiper/modules";


export default function BrowseCategory() {
  return (
    <div className=" mx-[5%] py-12 mb-6 font-montserrat border-solid border-b-[1px] border-[#020e0154]  ">
      <h1 className=" text-[2.3rem] font-semibold text-center mb-4 ">Browse By Category</h1>

      {/* <div>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div> */}

      <section className=" flex justify-between  text-base">
        <div className=" w-[12.5%] text-center  border-solid border-[#108F0A] border-[1px] rounded-[4px] px-[2%] py-4 ">
            <div className=" " >
                <Image src={Category1} className=" w-full " alt="Categories Image" />
            </div>
            <p>Classic</p>
        </div>
        <div className=" w-[12.5%] text-center border-solid border-[#DBE0E2] border-[1px] rounded-[4px] px-[2%] py-4 ">
            <div className=" " >
                <Image src={Category1} className=" w-full " alt="Categories Image" />
            </div>
            <p>Classic</p>
        </div>
        <div className=" w-[12.5%] text-center border-solid border-[#108F0A] border-[1px] rounded-[4px] px-[2%] py-4 ">
            <div className=" " >
                <Image src={Category1} className=" w-full " alt="Categories Image" />
            </div>
            <p>Classic</p>
        </div>
        <div className=" w-[12.5%] text-center border-solid border-[#108F0A] border-[1px] rounded-[4px] px-[2%] py-4 ">
            <div className=" " >
                <Image src={Category1} className=" w-full " alt="Categories Image" />
            </div>
            <p>Classic</p>
        </div>
        <div className=" w-[12.5%] text-center border-solid border-[#108F0A] border-[1px] rounded-[4px] px-[2%] py-4 ">
            <div className=" " >
                <Image src={Category1} className=" w-full " alt="Categories Image" />
            </div>
            <p>Classic</p>
        </div>
        <div className=" w-[12.5%] text-center border-solid border-[#108F0A] border-[1px] rounded-[4px] px-[2%] py-4 ">
            <div className=" " >
                <Image src={Category1} className=" w-full " alt="Categories Image" />
            </div>
            <p>Classic</p>
        </div>
        <div className=" w-[12.5%] text-center border-solid border-[#108F0A] border-[1px] rounded-[4px] px-[2%] py-4 ">
            <div className=" " >
                <Image src={Category1} className=" w-full " alt="Categories Image" />
            </div>
            <p>Classic</p>
        </div>
      </section>
    </div>
  );
}
