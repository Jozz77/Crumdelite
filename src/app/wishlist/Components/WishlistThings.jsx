import BreadCard from "@/app/Components/BreadCard/BreadCard";
import Link from "next/link";
import React from "react";
import WishlistThingsData from "./WishlistThingsData";

export default function WishlistThings() {
  return (
    <div className="relative px-[5%] py-24 ">
      <section >
        <Link href="" className=" absolute rounded-[6px] border-[1px] border-solid border-[#DEE2E6] px-[2%] py-1 font-montserrat font-medium ">
            <button>back</button>
        </Link>
      </section>
      <section className='flex flex-wrap justify-between gap-y-20 mt-12 '>
        {WishlistThingsData.map((shop) => (
          <div key={shop.id} className=" w-[22%] ">
            <BreadCard name={shop.name} price={shop.price} image={shop.img} />
          </div>
        ))}
      </section>
    </div>
  );
}
