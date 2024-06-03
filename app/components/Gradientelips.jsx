import React from "react";

function Gradientelips({ pos }) {
  return (
    <div className={`absolute p-[100px] z-[-1] ${pos} `}>
      <div
        className="relative h-[150px] w-[300px] rounded-[100%] z-[2] opacity-[0.8]"
        style={{ background: "#FF5555" }}
      ></div>
      <div
        className="h-[150px] w-[300px] rounded-[100%] translate-y-[-80px] translate-x-[-30px] opacity-[0.8]"
        style={{ background: "#FDE598" }}
      ></div>
      <div
        className="absolute top-0 left-0 h-full w-full z-10"
        style={{ backdropFilter: "blur(20px)" }}
      ></div>
    </div>
  );
}

export default Gradientelips;
