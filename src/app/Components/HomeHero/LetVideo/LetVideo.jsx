import React from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";

const LetVideo = () => {
  return (
<div className="  py-12 mb-6 font-montserrat border-solid border-b-[1px] border-[#020e0154]  ">
      <section className=" relative mx-[12%] pb-[56.25%]  h-0 overflow-hidden ">
        <iframe
          width="100%"
          height="100%"
          className=" w-full absolute top-0 left-0 "
          src={`https://www.youtube.com/embed/WsQHqyKKlME?si=OVF7jzE4EkPGPBb_`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded YouTube Let"
        />
      </section>
    </div>
  );
};

export default LetVideo;