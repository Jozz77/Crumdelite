import React from "react";
import { AiFillStar } from "react-icons/ai";
import DescriptionReviewsData from "./DescriptionReviewsData";

export default function DescriptionReviews() {
  return (
    <div className=" font-montserrat px-[5%] mt-12">
      <h2 className=" text-[1.8rem] font-bold leading-[120%] ">Reviews</h2>

      <section className=" flex justify-between flex-wrap gap-6 font-montserrat mt-8">
        {DescriptionReviewsData.map((description) => (
            <div className=" w-[30%] " key={description.id}>
            <div className="flex items-center gap-2">
              <h3 className=" text-base font-medium ">{description.name}</h3>
              <div className=" text-[1rem] text-[#CC9600] flex gap-1 ">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
            <p className="mt-1 text-[0.75rem] italic leading-[150%] ">
              "{description.text}"
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
