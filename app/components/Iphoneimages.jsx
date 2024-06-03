import React from "react";

function Iphoneimages({ customstyles, image }) {
  return (
    <div className={`absolute h-[504px] w-[250px]  ${customstyles}`}>
      <img
        src="/images/iphoneframe.png"
        alt="iphone frame"
        className="object-cover h-full w-full"
      />
      <img
        src={image}
        alt="screenshot image"
        className="absolute top-0 left-0 h-full w-full p-[10px]"
        style={{
          mask: `url('/svgs/iphonenotchmask.svg') no-repeat center / cover`,
          WebkitMask: `url('/svgs/iphonenotchmask.svg') no-repeat center / cover`,
        }}
      />
    </div>
  );
}

export default Iphoneimages;
