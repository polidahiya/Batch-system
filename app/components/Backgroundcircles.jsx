import React from "react";

function Backgroundcircles({ color, absolute, pos }) {
  return (
    <div
      className={` min-h-[600px] h-full w-full  ${
        absolute ? "absolute" : "relative"
      } ${pos ? pos : ""}`}
    >
      <div
        style={{ top: "calc(50% - 30px )", left: "calc(50% + 30px)" }}
        className={`absolute translate-x-[-50%] translate-y-[-50%] h-[550px] w-[383px] border  rounded-[100%] rotate-[-45deg] ${
          color ? "border-white" : "border-black"
        }`}
      ></div>
      <div
        style={{ top: "calc(50% - 0px)", left: "calc(50% - 0px)" }}
        className={`absolute translate-x-[-50%] translate-y-[-50%] h-[550px] w-[383px] border  rounded-[100%] rotate-[-45deg] ${
          color ? "border-white" : "border-black"
        }`}
      ></div>
      <div
        style={{ top: "calc(50% + 30px)", left: "calc(50% - 30px)" }}
        className={`absolute translate-x-[-50%] translate-y-[-50%]  h-[550px] w-[383px] border  rounded-[100%] rotate-[-45deg] ${
          color ? "border-white" : "border-black"
        }`}
      ></div>
    </div>
  );
}

export default Backgroundcircles;
