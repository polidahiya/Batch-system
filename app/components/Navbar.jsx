import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="h-[60px] flex items-center  ml-auto mt-[30px]">
      <Link href="/" className="flex items-center">
        <svg
          width="28"
          height="34"
          viewBox="0 0 28 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.3829 10.8852C23.1564 10.6651 22.8387 10.5651 22.5277 10.6163C22.2162 10.6672 21.9472 10.8628 21.8027 11.1434C21.3057 12.1089 20.6745 12.9961 19.9318 13.7805C20.0058 13.2139 20.0431 12.6439 20.0431 12.0724C20.0431 10.9759 19.8961 9.84742 19.6061 8.71805C18.6527 5.00853 16.1525 1.87144 12.7468 0.111205C12.4503 -0.0419942 12.097 -0.0366153 11.8053 0.125549C11.5136 0.287779 11.3226 0.585213 11.2964 0.917908C11.0309 4.28895 9.2945 7.35586 6.52981 9.33424C6.49322 9.3606 6.4569 9.38729 6.42057 9.41386C6.34534 9.46891 6.27441 9.52097 6.20814 9.56467C6.19778 9.57157 6.18749 9.57861 6.17739 9.58585C4.43861 10.8308 3.00391 12.4903 2.0282 14.3854C1.03675 16.3131 0.534058 18.3818 0.534058 20.5336C0.534058 21.6299 0.681015 22.7583 0.970878 23.8879C2.50055 29.8417 7.85847 33.9999 14.0004 33.9999C21.4253 33.9999 27.4659 27.9589 27.4659 20.5336C27.4659 16.872 26.0159 13.4454 23.3829 10.8852Z"
            fill="#FF5555"
          />
        </svg>
        <svg
        className="ml-[10px]"
          width="67"
          height="30"
          viewBox="0 0 67 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.58629 23.1301C7.62223 23.1301 8.53863 22.9408 9.3355 22.5623C10.1324 22.1639 10.74 21.5662 11.1583 20.7693V22.7715H15.3419V6.45552H10.8595V15.9881C10.8595 16.9244 10.5806 17.6815 10.0228 18.2592C9.465 18.817 8.74781 19.0959 7.87125 19.0959C6.99469 19.0959 6.27751 18.817 5.7197 18.2592C5.16188 17.6815 4.88298 16.9244 4.88298 15.9881V6.45552H0.400574V16.3467C0.400574 18.3787 0.928501 20.0223 1.98436 21.2773C3.06013 22.5125 4.59411 23.1301 6.58629 23.1301Z"
            fill="black"
          />
          <path
            d="M18.6181 4.99127H23.1005V0.50886H18.6181V4.99127ZM18.6181 22.7715H23.1005V6.45552H18.6181V22.7715Z"
            fill="black"
          />
          <path
            d="M28.3528 22.7715H32.8352V10.3403H36.3315V6.45552H32.8352V6.21646C32.8352 4.76217 33.6819 4.03502 35.3752 4.03502C35.6542 4.03502 35.9829 4.0649 36.3614 4.12467V0.299682C35.9032 0.200073 35.3752 0.150269 34.7776 0.150269C32.7456 0.150269 31.1618 0.678196 30.0262 1.73405C28.9106 2.78991 28.3528 4.28404 28.3528 6.21646V6.45552H25.6036V10.3403H28.3528V22.7715Z"
            fill="black"
          />
          <path
            d="M38.6371 22.7715H43.1195V13.986C43.1195 12.7707 43.4582 11.8344 44.1355 11.177C44.8129 10.4996 45.6994 10.161 46.7951 10.161H48.1996V6.27622H47.2433C46.2473 6.27622 45.3607 6.46548 44.5838 6.84399C43.8268 7.20259 43.2391 7.88989 42.8207 8.9059V6.45552H38.6371V22.7715Z"
            fill="black"
          />
          <path
            d="M52.7042 29.4054C55.6924 29.4054 57.854 27.7021 59.1887 24.2955L66.1813 6.45552H61.3702L57.5153 16.9443L53.6604 6.45552H48.8493L55.2741 22.7715L54.9753 23.4588C54.7362 23.9967 54.4274 24.4748 54.0489 24.8932C53.6704 25.3115 53.0428 25.5207 52.1663 25.5207C51.4491 25.5207 50.7718 25.4211 50.1343 25.2219V28.8974C50.4729 29.0767 50.8614 29.2062 51.2997 29.2859C51.7579 29.3656 52.2261 29.4054 52.7042 29.4054Z"
            fill="black"
          />
        </svg>
        <span>&trade;</span>
      </Link>
      <div className="flex items-center gap-[20px] ml-[30px]">
        <Link href="#" className="text-[16px] font-medium text-primary">
          Home
        </Link>
        <Link href="#" className="text-[16px] font-medium">
          About Us
        </Link>
        <Link href="#" className="text-[16px] font-medium">
          Pricing
        </Link>
        <Link href="#" className="text-[16px] font-medium">
          Features
        </Link>
      </div>
      <button className="bg-black text-white py-[10px] px-[30px] ml-auto rounded-[4px]">
        Download
      </button>
    </nav>
  );
}

export default Navbar;