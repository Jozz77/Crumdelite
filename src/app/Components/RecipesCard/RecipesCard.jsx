import React from "react";
import Image from "next/image";
import { FcLike } from "react-icons/fc";
import { FiShare2, FiEye } from "react-icons/fi";
import Link from "next/link";

export default function RecipesCard({badge, name, img, text, seen, like}) {
  return (
    <div className=" ">
      <div>
        <Image src={img} className=" w-full" alt="Image" />
      </div>
      <section className="flex justify-between mt-3">
        <span className=" bg-[#EDFEF0] text-Primary px-3 py-1 rounded-[16px] text-[0.85rem] ">
          {badge}
        </span>
        <FiShare2 />
      </section>
      <section className=" py-2 ">
        <Link href="/recipesdetails">
          <h2 className=" text-[1.05rem]  font-semibold hover:text-Primary py-1 ">
            {name}
          </h2>
        </Link>
        <p className=" font-quicksand h-[6rem] xxl:h-[5rem] text-base leading-[150%] ">
          {text}
        </p>
      </section>
      <section className=" flex gap-4 font-quicksand text-base ">
        <div className="flex items-center gap-1">
          <FiEye />
          <span>{seen}</span>
        </div>
        <div className="flex items-center gap-1">
          <FcLike />
          <span>{like}</span>
        </div>
      </section>
    </div>
  );
}
