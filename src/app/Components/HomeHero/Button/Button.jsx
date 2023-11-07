import React from "react";

export default function Button({text}) {
  return (
    <button className="button bg-Primary rounded-[4px] py-2 px-12 text-white font-quicksand font-medium text-base  ">
      {text}
    </button>
  );
}
