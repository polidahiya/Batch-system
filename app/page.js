import React from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Backgroundcircles from "./components/Backgroundcircles";
import Iphoneimages from "./components/Iphoneimages";
import Gradientelips from "./components/Gradientelips";
import Star from "./components/Star";

function page() {
  return (
    <div className="px-[100px]">
      <Navbar />
      {/* first section */}
      <section className="flex">
        <Star pos="top-[80px] left-[30px] fill-black " />
        <Star pos="top-[50px] right-[20px] fill-black rotate-[27deg]" />
        {/* left seciton */}
        <div className="w-[50%]">
          <h1
            className="relative mt-[50px] text-[50px] font-black"
            style={{ lineHeight: "50px" }}
          >
            Make The Best Financial decisions
            <Gradientelips pos="top-[50%] left-[50%] translate-y-[-40%] translate-x-[-50%]" />
          </h1>
          <p className="mt-[20px]">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          {/* buttons */}
          <div className="mt-[20px] flex items-center gap-[40px]">
            <button className="bg-black text-white flex items-center justify-center gap-[10px] py-[10px] px-[25px] rounded-[4px]">
              Get Started
              <svg
                width="25"
                height="8"
                viewBox="0 0 25 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z"
                  fill="white"
                />
              </svg>
            </button>
            <button className="flex items-center gap-[10px]">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14.5" cy="14.5" r="14" stroke="black" />
                <path
                  d="M11 19.0809V9.91907C11 9.52282 11.4389 9.28402 11.7716 9.49929L18.8512 14.0802C19.1557 14.2772 19.1557 14.7228 18.8512 14.9198L11.7716 19.5007C11.4389 19.716 11 19.4772 11 19.0809Z"
                  fill="black"
                  stroke="black"
                />
              </svg>
              Watch Video
            </button>
          </div>
          {/* banner */}
          <div className=" relative w-full aspect-[19/12]">
            <div className="absolute bottom-[120px] left-[-10px] flex items-center rotate-[-25deg] ">
              <div className="text-[90px] font-black">A</div>
              <div className="relative h-[65px] w-[500px] translate-x-[-23px] translate-y-[6px] ">
                {/*  */}
                <div className="absolute bg-black flex items-center justify-around  h-full w-full top-0 left-0 rounded-tr-[8px] rounded-br-[8px] z-[2]">
                  <div className="flex items-center gap-[5px] text-white">
                    <svg
                      className="rotate-[27deg]"
                      width="44"
                      height="43"
                      viewBox="0 0 44 43"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_101_118)">
                        <path
                          d="M23.0609 23.4762C21.1488 24.4929 18.7746 23.767 17.7579 21.8549L16.0534 18.6492C15.9265 18.4104 15.863 18.291 15.8469 18.1769C15.82 17.9856 15.8792 17.7922 16.0084 17.6487C16.0855 17.563 16.2049 17.4995 16.4437 17.3726L21.7011 14.5772C21.9399 14.4502 22.0593 14.3867 22.1734 14.3707C22.3647 14.3438 22.5581 14.4029 22.7016 14.5322C22.7873 14.6093 22.8508 14.7287 22.9777 14.9675L24.6822 18.1732C25.6989 20.0853 24.973 22.4595 23.0609 23.4762ZM23.0609 23.4762L23.9814 25.2073M23.1482 15.2881L24.5907 14.521C24.8596 14.3781 24.994 14.3066 25.1234 14.2941C25.296 14.2775 25.468 14.3301 25.6018 14.4404C25.7021 14.5231 25.7735 14.6575 25.9165 14.9264L26.0699 15.2149C26.3552 15.7515 26.4979 16.0198 26.5559 16.2713C26.7135 16.9538 26.495 17.6685 25.9827 18.1462C25.794 18.3222 25.5257 18.4649 24.989 18.7502M16.2239 18.9698L14.7813 19.7368C14.5125 19.8798 14.378 19.9512 14.2953 20.0515C14.1851 20.1853 14.1325 20.3573 14.1491 20.5299C14.1616 20.6593 14.233 20.7937 14.376 21.0626L14.5294 21.3511C14.8147 21.8877 14.9574 22.156 15.1334 22.3448C15.6111 22.857 16.3258 23.0755 17.0083 22.918C17.2598 22.8599 17.5281 22.7173 18.0647 22.4319M22.5799 28.9131L27.8373 26.1177C27.9789 26.0424 28.0327 25.8665 27.9574 25.7249C27.3549 24.5918 25.9479 24.1616 24.8148 24.7641L23.1479 25.6504C22.0148 26.2529 21.5846 27.6599 22.1871 28.793C22.2624 28.9346 22.4383 28.9884 22.5799 28.9131Z"
                          stroke="#FF5555"
                          stroke-width="1.30704"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <circle
                        cx="22.1407"
                        cy="21.7454"
                        r="15.3578"
                        transform="rotate(-28 22.1407 21.7454)"
                        stroke="#FF5555"
                        stroke-width="0.653521"
                      />
                      <defs>
                        <clipPath id="clip0_101_118">
                          <rect
                            width="15.6845"
                            height="15.6845"
                            fill="white"
                            transform="translate(11.5345 18.5026) rotate(-28)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div>
                      <span>Achievements</span> <br />
                      <span className="text-[12px]">
                        Best Finance App On Playstore
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-[5px] text-white">
                    <svg
                      className="rotate-[27deg]"
                      width="43"
                      height="43"
                      viewBox="0 0 43 43"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_101_111)">
                        <path
                          d="M21.8001 19.2222L20.3575 19.9892C19.8795 20.2434 19.698 20.837 19.9522 21.315C20.2064 21.793 20.7999 21.9745 21.278 21.7203L21.855 21.4135C22.333 21.1593 22.9266 21.3408 23.1807 21.8188C23.4349 22.2968 23.2534 22.8904 22.7754 23.1446L21.3329 23.9116M20.3392 19.2588L20.646 19.8358M22.4869 23.298L22.7937 23.875M25.0286 19.726L25.0344 19.723M18.1043 23.4078L18.1101 23.4047M14.6304 22.4423L16.9621 26.8277C17.3058 27.474 17.4776 27.7972 17.7346 27.9772C17.9607 28.1355 18.2312 28.2182 18.5071 28.2134C18.8209 28.2079 19.144 28.036 19.7904 27.6924L27.6379 23.5198C28.2842 23.1761 28.6074 23.0043 28.7874 22.7472C28.9457 22.5211 29.0284 22.2507 29.0236 21.9747C29.0181 21.661 28.8463 21.3378 28.5026 20.6915L26.1709 16.3061C25.8272 15.6598 25.6554 15.3366 25.3983 15.1566C25.1722 14.9983 24.9018 14.9156 24.6258 14.9205C24.3121 14.9259 23.9889 15.0978 23.3426 15.4414L15.495 19.614C14.8487 19.9577 14.5255 20.1295 14.3456 20.3866C14.1872 20.6127 14.1046 20.8831 14.1094 21.1591C14.1149 21.4728 14.2867 21.796 14.6304 22.4423ZM25.3171 19.5726C25.4019 19.732 25.3414 19.9298 25.182 20.0146C25.0227 20.0993 24.8248 20.0388 24.7401 19.8795C24.6554 19.7201 24.7159 19.5223 24.8752 19.4375C25.0346 19.3528 25.2324 19.4133 25.3171 19.5726ZM18.3928 23.2544C18.4776 23.4137 18.4171 23.6116 18.2577 23.6963C18.0984 23.781 17.9005 23.7205 17.8158 23.5612C17.7311 23.4018 17.7916 23.204 17.9509 23.1192C18.1103 23.0345 18.3081 23.095 18.3928 23.2544Z"
                          stroke="#FF5555"
                          stroke-width="1.30704"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <circle
                        cx="21.5666"
                        cy="21.567"
                        r="15.3578"
                        transform="rotate(-28 21.5666 21.567)"
                        stroke="#FF5555"
                        stroke-width="0.653521"
                      />
                      <defs>
                        <clipPath id="clip0_101_111">
                          <rect
                            width="15.6845"
                            height="15.6845"
                            fill="white"
                            transform="translate(10.9604 18.3243) rotate(-28)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div>
                      <span>Finance</span> <br />
                      <span className="text-[12px]">
                        Most Popular Accounting App
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[-10px]  right-[-12px] skew-x-[-20deg] rotate-[-15deg] h-full w-[50px] bg-white  z-[1] "></div>
                <div
                  className="absolute right-0 top-0 rotate-[-20deg] z-[-1] h-[65px] w-[300px] translate-y-[-4px] skew-x-[-30deg] "
                  style={{ transformOrigin: "right bottom" }}
                >
                  <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-primary z-[5] rounded-[8px]">
                    <span className="skew-x-[30deg] ">
                      make the best financial decisions
                    </span>
                  </div>
                  {/*  */}
                  <div
                    className="absolute left-0  bottom-[3px] flex items-center gap-[10px] h-[50px] w-[300px] rotate-[32deg] rounded-[8px] skew-x-[11deg]"
                    style={{
                      backgroundColor: "#f64848",
                      transformOrigin: "left bottom",
                    }}
                  >
                    <div className="flex items-center justify-center ml-[70px] h-full aspect-[2/1] border-l-2 border-r-2 border-black  skew-x-[0deg]">
                      <Star pos="scale-x-[2] rotate-[20deg] scale-y-[0.7]" />
                    </div>
                    <div>
                      <p className="font-semibold">Uifry Premium</p>
                      <p className="text-[14px]">Free Trial</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* images */}
        <div className="relative w-[50%] ">
          {/* background circles */}
          <Star pos="bottom-[50px] left-[50px] fill-black rotate-[32deg]" />
          <Backgroundcircles />
          <Gradientelips pos="top-[70%] left-[50%] translate-y-[-50%] translate-x-[-50%] scale-[1.3] rotate-[180deg]" />
          <Iphoneimages
            image="/images/iphoneimage1.png"
            customstyles="z-[3] top-[0px] left-[50px] rotate-[-15deg]"
          />
          <Iphoneimages
            image="/images/iphoneimage2.png"
            customstyles="z-[2] top-[50px] left-[150px] rotate-[-15deg]"
          />
          <Iphoneimages
            image="/images/iphoneimage3.png"
            customstyles="z-[1] top-[100px] left-[250px] rotate-[-15deg]"
          />
        </div>
      </section>

      {/* second section */}
      <section className="flex items-center ">
        <div className="relative w-[40%] ">
          <Star pos="top-[50px] left-[-60px] fill-black" />
          <Backgroundcircles />
          <Gradientelips pos="top-[20%] left-[30%] translate-y-[-50%] translate-x-[-50%] scale-[1.3] rotate-[180deg]" />
          <Iphoneimages
            image="/images/iphoneimage1.png"
            customstyles="z-[3] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          />
        </div>
        <div className="relative w-[60%] pl-[100px]">
          <p className="text-primary">Features</p>
          <h2 className="text-[40px] font-black">uifry premium</h2>
          <h3 className="flex  items-center gap-[5px] font-bold mt-[30px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L10.6985 7.20599C10.4445 8.22185 10.3176 8.72978 10.0531 9.14309C9.81915 9.50868 9.50868 9.81915 9.14309 10.0531C8.72978 10.3176 8.22185 10.4445 7.20599 10.6985L2 12L7.20599 13.3015C8.22185 13.5555 8.72978 13.6824 9.14309 13.9469C9.50868 14.1808 9.81915 14.4913 10.0531 14.8569C10.3176 15.2702 10.4445 15.7782 10.6985 16.794L12 22L13.3015 16.794C13.5555 15.7782 13.6824 15.2702 13.9469 14.8569C14.1808 14.4913 14.4913 14.1808 14.8569 13.9469C15.2702 13.6824 15.7782 13.5555 16.794 13.3015L22 12L16.794 10.6985C15.7782 10.4445 15.2702 10.3176 14.8569 10.0531C14.4913 9.81915 14.1808 9.50868 13.9469 9.14309C13.6824 8.72978 13.5555 8.22185 13.3015 7.20599L12 2Z"
                stroke="#FF5555"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            budgeting intervals
          </h3>
          <p className="mt-[10px]">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <h3 className="flex  items-center gap-[5px] font-bold mt-[30px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2.50002V12M12 12L20.5 7.27773M12 12L3.5 7.27773M12 12V21.5M20.5 16.7222L12.777 12.4317C12.4934 12.2741 12.3516 12.1954 12.2015 12.1645C12.0685 12.1371 11.9315 12.1371 11.7986 12.1645C11.6484 12.1954 11.5066 12.2741 11.223 12.4317L3.5 16.7222M21 16.0586V7.94147C21 7.59883 21 7.4275 20.9495 7.27471C20.9049 7.13953 20.8318 7.01545 20.7354 6.91076C20.6263 6.79242 20.4766 6.70922 20.177 6.54282L12.777 2.43171C12.4934 2.27415 12.3516 2.19537 12.2015 2.16448C12.0685 2.13715 11.9315 2.13715 11.7986 2.16448C11.6484 2.19537 11.5066 2.27415 11.223 2.43171L3.82297 6.54282C3.52345 6.70922 3.37369 6.79242 3.26463 6.91076C3.16816 7.01545 3.09515 7.13953 3.05048 7.27471C3 7.42751 3 7.59883 3 7.94147V16.0586C3 16.4012 3 16.5725 3.05048 16.7253C3.09515 16.8605 3.16816 16.9846 3.26463 17.0893C3.37369 17.2076 3.52345 17.2908 3.82297 17.4572L11.223 21.5683C11.5066 21.7259 11.6484 21.8047 11.7986 21.8356C11.9315 21.8629 12.0685 21.8629 12.2015 21.8356C12.3516 21.8047 12.4934 21.7259 12.777 21.5683L20.177 17.4572C20.4766 17.2908 20.6263 17.2076 20.7354 17.0893C20.8318 16.9846 20.9049 16.8605 20.9495 16.7253C21 16.5725 21 16.4012 21 16.0586Z"
                stroke="#FF5555"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            budgeting intervals
          </h3>
          <p className="mt-[10px]">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <h3 className="flex  items-center gap-[5px] font-bold mt-[30px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 14H6M6 14V1.5M6 14L1.5 18.5M1.5 6H14M14 6V18.5M14 6L18.5 1.5M19 13.3373V1.8C19 1.51997 19 1.37996 18.9455 1.273C18.8976 1.17892 18.8211 1.10243 18.727 1.0545C18.62 1 18.48 1 18.2 1H6.66274C6.41815 1 6.29586 1 6.18077 1.02763C6.07873 1.05213 5.98119 1.09253 5.89172 1.14736C5.7908 1.2092 5.70432 1.29568 5.53137 1.46863L1.46863 5.53137C1.29568 5.70432 1.2092 5.7908 1.14736 5.89172C1.09253 5.98119 1.05213 6.07873 1.02763 6.18077C1 6.29586 1 6.41815 1 6.66274V18.2C1 18.48 1 18.62 1.0545 18.727C1.10243 18.8211 1.17892 18.8976 1.273 18.9455C1.37996 19 1.51997 19 1.8 19H13.3373C13.5818 19 13.7041 19 13.8192 18.9724C13.9213 18.9479 14.0188 18.9075 14.1083 18.8526C14.2092 18.7908 14.2957 18.7043 14.4686 18.5314L18.5314 14.4686C18.7043 14.2957 18.7908 14.2092 18.8526 14.1083C18.9075 14.0188 18.9479 13.9213 18.9724 13.8192C19 13.7041 19 13.5818 19 13.3373Z"
                stroke="#FF5555"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            budgeting intervals
          </h3>
          <p className="mt-[10px]">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <Gradientelips pos="top-[50%] left-[120%] translate-y-[-50%] translate-x-[-50%]" />
        </div>
      </section>
      {/* third section */}
      <section className="flex items-center ">
        <div className="w-[60%] pr-[100px]">
          <p className="text-primary">advatnages</p>
          <h2 className="text-[40px] font-black">why choose Uifry?</h2>
          <h3 className="flex  items-center gap-[5px] font-bold mt-[30px]">
            <svg
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24.488" r="24" fill="#FF5555" />
              <path
                d="M26 33.488H22M30 20.488C30 18.8967 29.3679 17.3706 28.2427 16.2454C27.1174 15.1202 25.5913 14.488 24 14.488C22.4087 14.488 20.8826 15.1202 19.7574 16.2454C18.6322 17.3706 18 18.8967 18 20.488C18 23.5782 17.2205 25.694 16.3497 27.0934C15.6151 28.2739 15.2479 28.8641 15.2613 29.0288C15.2763 29.2111 15.3149 29.2806 15.4618 29.3896C15.5945 29.488 16.1926 29.488 17.3889 29.488H30.6112C31.8074 29.488 32.4056 29.488 32.5382 29.3896C32.6852 29.2806 32.7238 29.2111 32.7387 29.0288C32.7522 28.8641 32.3849 28.2739 31.6504 27.0935C30.7795 25.694 30 23.5782 30 20.488Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            clever notifications
          </h3>
          <p className="mt-[10px]">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
        <div className="relative w-[40%] ">
          <Backgroundcircles />
          <Gradientelips pos="top-[70%] left-[40%] translate-y-[-50%] translate-x-[-50%]" />
          <Iphoneimages
            image="/images/iphoneimage2.png"
            customstyles="z-[3] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          />
        </div>
      </section>

      {/* fourth section */}
      <section className="relative flex items-center ">
        <Star pos="top-[-50px] left-[50%] fill-black" />
        <Star pos="bottom-0 right-0 fill-black rotate-[32deg] scale-[1.3]" />
        <div className="relative w-[40%] ">
          <Backgroundcircles />
          <Gradientelips pos="top-[60%] left-[60%] translate-y-[-50%] translate-x-[-50%] scale-[1.3] " />
          <Iphoneimages
            image="/images/iphoneimage3.png"
            customstyles="z-[3] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          />
        </div>
        <div className="w-[60%] pl-[100px]">
          <h3 className="flex  items-center gap-[5px] font-bold mt-[30px]">
            <svg
              width="48"
              height="49"
              viewBox="0 0 48 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="24.9761" r="24" fill="#FF5555" />
              <path
                d="M24 14.9761L22.6985 20.1821C22.4445 21.1979 22.3176 21.7059 22.0531 22.1192C21.8192 22.4848 21.5087 22.7952 21.1431 23.0292C20.7298 23.2936 20.2218 23.4206 19.206 23.6746L14 24.9761L19.206 26.2776C20.2218 26.5315 20.7298 26.6585 21.1431 26.923C21.5087 27.1569 21.8192 27.4674 22.0531 27.833C22.3176 28.2463 22.4445 28.7542 22.6985 29.7701L24 34.9761L25.3015 29.7701C25.5555 28.7542 25.6824 28.2463 25.9469 27.833C26.1808 27.4674 26.4913 27.1569 26.8569 26.923C27.2702 26.6585 27.7782 26.5315 28.794 26.2776L34 24.9761L28.794 23.6746C27.7782 23.4206 27.2702 23.2936 26.8569 23.0292C26.4913 22.7952 26.1808 22.4848 25.9469 22.1192C25.6824 21.7059 25.5555 21.1979 25.3015 20.1821L24 14.9761Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            fully customizable
          </h3>
          <p className="mt-[10px]">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </section>
      {/* testimonial */}
      <section className="relative">
        <Star pos="bottom-0 left-0 fill-black " />
        <p className="text-center text-[20px]">testimonial</p>
        <h2
          className="text-[40px] font-black text-center"
          style={{ lineHeight: "48px" }}
        >
          what our users <br /> say about us?
        </h2>
        <div className="flex items-center ">
          {/* imges */}
          <div className="relative w-[50%] ">
            <Backgroundcircles />
            <Gradientelips pos="top-[60%] left-[45%] translate-y-[-50%] translate-x-[-50%] scale-[1] " />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  rounded-full h-[150px] aspect-square">
              <img
                src="/images/centerperson.jpeg"
                alt=""
                className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  rounded-full h-[150px] aspect-square object-cover object-center border-[2px] border-black"
              />
              <div className="absolute top-[50%] left-full translate-x-[-50%] translate-y-[-50%] flex items-center justify-center h-[60px] aspect-square rounded-full bg-primary  z-[2]">
                <svg
                  width="36"
                  height="28"
                  viewBox="0 0 36 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="scale-[0.6]"
                >
                  <path
                    d="M12.7424 0.878174L14.628 4.35142C13.5694 5.84969 12.577 7.51821 11.6507 9.35699C10.7906 11.1958 10.2944 13.1026 10.162 15.0776L15.6205 16.0992V27.8469H0.436127V19.4703C0.436127 14.635 1.52781 10.7531 3.71118 7.82467C5.96071 4.82814 8.97111 2.51264 12.7424 0.878174ZM32.3927 0.878174L34.2783 4.35142C33.2197 5.84969 32.2273 7.51821 31.301 9.35699C30.4409 11.1958 29.9447 13.1026 29.8124 15.0776L35.2708 16.0992V27.8469H20.0864V19.4703C20.0864 14.635 21.1781 10.7531 23.3615 7.82467C25.611 4.82814 28.6214 2.51264 32.3927 0.878174Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            {/*  */}
            <img
              src="/images/topleftperson.jpeg"
              alt=""
              className=" absolute top-[10%] left-[5%] rounded-full h-[100px] aspect-square object-cover object-center border-[2px] border-black"
            />
            <img
              src="/images/toprightperson.jpeg"
              alt=""
              className=" absolute top-[12%] right-[13%] rounded-full h-[100px] aspect-square object-cover object-center border-[2px] border-black"
            />
            <img
              src="/images/bottomrightperson.jpeg"
              alt=""
              className=" absolute bottom-[10%] right-[5%] rounded-full h-[100px] aspect-square object-cover object-center border-[2px] border-black"
            />
            <img
              src="/images/bottomleftperson.jpeg"
              alt=""
              className=" absolute bottom-[12%] left-[13%] rounded-full h-[100px] aspect-square object-cover object-center border-[2px] border-black"
            />
          </div>
          {/* content */}
          <div className="w-[50%] pl-[100px]">
            <h3
              className="text-[25px]  items-center gap-[5px] font-bold mt-[30px] "
              style={{ lineHeight: "28px" }}
            >
              The Best Financial Accounting App Ever!
            </h3>
            <p className="opacity-50 mt-[20px]">
              &#34;Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.&#34;
            </p>
            {/* small profile images */}
            <div className="flex items-center gap-[10px] mt-[20px]">
              <img
                className="h-[30px] aspect-square rounded-full overflow-hidden object-cover object-center scale-[1.2] cursor-pointer"
                src="/images/smallprofiles1.png"
                alt=""
                style={{ backgroundColor: "#E7BF9F" }}
              />
              <img
                className="h-[30px] aspect-square rounded-full overflow-hidden object-cover object-center opacity-[0.8] cursor-pointer"
                src="/images/smallprofiles2.png"
                alt=""
                style={{ backgroundColor: "#F49392" }}
              />
              <img
                className="h-[30px] aspect-square rounded-full overflow-hidden object-cover object-center opacity-[0.8] cursor-pointer"
                src="/images/smallprofiles3.png"
                alt=""
                style={{ backgroundColor: "#422F15" }}
              />
              <img
                className="h-[30px] aspect-square rounded-full overflow-hidden object-cover object-center opacity-[0.8] cursor-pointer"
                src="/images/smallprofiles4.png"
                alt=""
                style={{ backgroundColor: "#F09B83" }}
              />
              <img
                className="h-[30px] aspect-square rounded-full overflow-hidden object-cover object-center opacity-[0.8] cursor-pointer"
                src="/images/smallprofiles5.png"
                alt=""
                style={{ backgroundColor: "#8B554D" }}
              />
            </div>
            <p className="font-semibold mt-[20px]">Nick jonas</p>
          </div>
        </div>
      </section>
      {/* faqs */}
      <section className="relative">
        <Star pos="top-[50px] left-[50%] fill-black rotate-[32deg]" />
        <p className="text-primary mt-[50px]">FAQ</p>
        <h2 className="text-[40px] font-black" style={{ lineHeight: "40px" }}>
          {" "}
          Frequently Asked <br /> Questions
        </h2>
        <div className="grid grid-cols-2 gap-[20px] mt-[20px]">
          <div className="p-[20px] rounded-[8px] bg-primary text-white">
            <h4 className="text-[20px] font-semibold">
              The Best Financial Accounting App Ever!
            </h4>
            <p>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="p-[20px] rounded-[8px] ">
            <h4 className="text-[20px] font-semibold">
              The Best Financial Accounting App Ever!
            </h4>
            <p>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="p-[20px] rounded-[8px] ">
            <h4 className="text-[20px] font-semibold">
              The Best Financial Accounting App Ever!
            </h4>
            <p>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="p-[20px] rounded-[8px] bg-primary text-white">
            <h4 className="text-[20px] font-semibold">
              The Best Financial Accounting App Ever!
            </h4>
            <p>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="p-[20px] rounded-[8px] bg-primary text-white">
            <h4 className="text-[20px] font-semibold">
              The Best Financial Accounting App Ever!
            </h4>
            <p>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="p-[20px] rounded-[8px] ">
            <h4 className="text-[20px] font-semibold">
              The Best Financial Accounting App Ever!
            </h4>
            <p>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
        </div>
      </section>
      {/* download app */}
      <section className="relative w-full aspect-[2.1/1]">
        <Star pos="top-[30%] left-[-70px] fill-black" />
        <Gradientelips pos="top-[10%] left-[50px] translate-y-[-50%] translate-x-[-50%] scale-[1]" />
        <div className="h-full w-full relative flex flex-col justify-center items-start gap-[20px] bg-black text-white p-[100px] mt-[100px] rounded-[8px] overflow-hidden">
          <Star pos="bottom-[50px] left-[30%] fill-white" />
          <Star pos="top-[30px] left-[60%] fill-white rotate-[32deg] scale-[1.3]" />
          <h2 className="text-[45px] font-black">Ready To Get Started?</h2>
          <p>
            Risus habitant leo egestas mauris diam eget morbi tempus <br />{" "}
            vulputate.
          </p>
          <button className="flex items-center gap-[15px] text-[20px] text-black px-[30px] py-[10px] bg-white rounded-[4px] z-[2]">
            Download App
            <svg
              width="26"
              height="33"
              viewBox="0 0 26 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.5273 17.5307C21.4939 13.536 24.8032 11.5889 24.9573 11.5019C23.0815 8.77184 20.1742 8.39714 19.1492 8.37037C16.7041 8.11614 14.3393 9.82909 13.0933 9.82909C11.8271 9.82909 9.91117 8.39714 7.84121 8.43732C5.18165 8.47743 2.69631 10.0164 1.33641 12.3985C-1.4772 17.263 0.61963 24.4092 3.31934 28.3436C4.6658 30.2707 6.24014 32.4186 8.30346 32.3449C10.3198 32.2646 11.0768 31.0602 13.5086 31.0602C15.9203 31.0602 16.6303 32.3449 18.7339 32.2981C20.8977 32.2646 22.2643 30.3643 23.5639 28.4239C25.1248 26.2158 25.7478 24.0412 25.7746 23.9341C25.721 23.9006 21.5676 22.3149 21.5273 17.5307ZM17.5548 5.78089C18.6401 4.42259 19.3836 2.58252 19.176 0.708984C17.6084 0.77586 15.6389 1.79292 14.5134 3.11782C13.5153 4.28877 12.6176 6.20242 12.8521 8.00237C14.6072 8.12949 16.4227 7.11242 17.5548 5.78089Z"
                fill="black"
              />
            </svg>
          </button>
          {/* iphone images */}
          <div className="absolute h-[460px] w-[600px] bottom-0 right-[-100px]">
            <Gradientelips pos="top-[60%] left-[45%] translate-y-[-50%] translate-x-[-50%] scale-[1] " />
            {/* first */}
            <div className="absolute h-[352px] w-[272px] bottom-0 left-0 z-[10]">
              <img
                src="/images/bottomiphoneframe1.png"
                alt=""
                className="absolute top-0 left-0 h-full w-full"
              />
              <img
                src="/images/bottomiphoneimages1.png"
                alt=""
                className="absolute top-0 left-0 h-full w-full "
                style={{
                  mask: `url('/svgs/iphonenotchmaskbottom1.svg') no-repeat 60% 50% / contain`,
                  WebkitMask: `url('/svgs/iphonenotchmaskbottom1.svg') no-repeat 60% 50% / contain`,
                }}
              />
            </div>
            {/* second */}
            <div className="absolute h-[370px] w-[209px] bottom-[10px] left-[180px] z-[5]">
              <img
                src="/images/bottomiphoneframe2.png"
                alt=""
                className="absolute top-0 left-0 h-full w-full"
              />
              <img
                src="/images/bottomiphoneimages2.png"
                alt=""
                className="absolute top-0 left-0 h-full w-full "
                style={{
                  mask: `url('/svgs/iphonenotchmaskbottom2.svg') no-repeat 60% 50% / contain`,
                  WebkitMask: `url('/svgs/iphonenotchmaskbottom2.svg') no-repeat 60% 50% / contain`,
                }}
              />
            </div>
            {/* third */}
            <div className="absolute h-[386px] w-[201px] bottom-[50px] left-[350px]">
              <img
                src="/images/bottomiphoneframe3.png"
                alt=""
                className="absolute top-0 left-0 h-full w-full"
              />
              <img
                src="/images/bottomiphoneimages3.png"
                alt=""
                className="absolute top-[5px] left-0 h-[95%] w-[95%] "
                style={{
                  mask: `url('/svgs/iphonenotchmaskbottom3.svg') no-repeat 60% 50% / contain`,
                  WebkitMask: `url('/svgs/iphonenotchmaskbottom3.svg') no-repeat 60% 50% / contain`,
                }}
              />
            </div>
          </div>
          <Backgroundcircles
            color="white"
            absolute={true}
            pos="bottom-[0px] left-[0px] translate-x-[-50%] translate-y-[50%]"
          />
          <Backgroundcircles
            color="white"
            absolute={true}
            pos="top-[0px] right-[0px] translate-x-[50%] translate-y-[-50%]"
          />
        </div>
      </section>
      {/* footer */}
      <footer className="mt-[100px] mb-[30px]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-[20px]">
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
            <Link
              href="#"
              className="flex items-center font-semibold text-[14px] gap-[10px]"
            >
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9394 0.708984C16.2804 0.708984 17.5704 1.23898 18.5194 2.18998C19.4694 3.13898 20.0004 4.41898 20.0004 5.75898V13.659C20.0004 16.449 17.7304 18.709 14.9394 18.709H5.06043C2.26943 18.709 0.000427246 16.449 0.000427246 13.659V5.75898C0.000427246 2.96898 2.25943 0.708984 5.06043 0.708984H14.9394ZM16.0704 5.90898C15.8604 5.89798 15.6604 5.96898 15.5094 6.10898L11.0004 9.70898C10.4204 10.19 9.58943 10.19 9.00043 9.70898L4.50043 6.10898C4.18943 5.87898 3.75943 5.90898 3.50043 6.17898C3.23043 6.44898 3.20043 6.87898 3.42943 7.17898L3.56043 7.30898L8.11043 10.859C8.67043 11.299 9.34943 11.539 10.0604 11.539C10.7694 11.539 11.4604 11.299 12.0194 10.859L16.5304 7.24898L16.6104 7.16898C16.8494 6.87898 16.8494 6.45898 16.5994 6.16898C16.4604 6.01998 16.2694 5.92898 16.0704 5.90898Z"
                  fill="#FF5555"
                />
              </svg>
              Help@frybix.com
            </Link>
            <Link
              href="#"
              className="flex items-center font-semibold text-[14px] gap-[10px]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.53174 10.1814C13.5208 14.1693 14.4258 9.5557 16.9656 12.0938C19.4143 14.5417 20.8216 15.0322 17.7192 18.1337C17.3306 18.446 14.8616 22.2032 6.1846 13.5287C-2.49348 4.85298 1.26158 2.38143 1.57397 1.99293C4.68387 -1.11717 5.16586 0.298367 7.61449 2.74631C10.1544 5.28548 5.54266 6.1934 9.53174 10.1814Z"
                  fill="#FF5555"
                />
              </svg>
              +1 234 456 678 89
            </Link>
          </div>
          {/*  */}
          <div className="flex flex-col gap-[15px]">
            <h3 className="text-[25px] font-semibold">Links</h3>
            <Link
              href="#"
              className="flex items-center font-semibold text-[14px]"
            >
              Home
            </Link>
            <Link
              href="#"
              className="flex items-center font-semibold text-[14px]"
            >
              About us
            </Link>
            <Link
              href="#"
              className="flex items-center font-semibold text-[14px]"
            >
              Bookings
            </Link>
            <Link
              href="#"
              className="flex items-center font-semibold text-[14px]"
            >
              Blogs
            </Link>
          </div>
          {/*  */}
          <div className="flex flex-col gap-[15px]">
            <h3 className="text-[25px] font-semibold">Legal</h3>
            <Link
              href="#"
              className="flex items-center font-semibold text-[14px]"
            >
              Terms of Use
            </Link>
            <Link
              href="#"
              className="flex items-center font-semibold text-[14px]"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="flex items-center font-semibold text-[14px]"
            >
              Cookie Policy
            </Link>
          </div>
          {/*  */}
          <div className="flex flex-col gap-[15px]">
            <h3 className="text-[25px] font-semibold">Product</h3>
            <Link
              href="#"
              className="flex items-center font-semibold text-[14px]"
            >
              Take Tour
            </Link>
            <Link
              href="#"
              className="flex items-center font-semibold text-[14px]"
            >
              Live Chat
            </Link>
            <Link
              href="#"
              className="flex items-center font-semibold text-[14px]"
            >
              Reviews
            </Link>
          </div>
          {/*  */}
          <div className="flex flex-col gap-[15px]">
            <h3 className="text-[25px] font-semibold">Newsletter</h3>
            <Link
              href="#"
              className="flex items-center font-semibold text-[14px]"
            >
              Stay Up To Date
            </Link>
            <div className="p-[10px]  bg-white rounded-[4px]">
              <input
                type="email"
                name=""
                id=""
                placeholder="Your Email"
                className="indent-[10px] w-[150px] outline-none bg-white"
              />
              <button className="bg-black text-white py-[10px] px-[25px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div
          className="h-[2px] w-full mt-[50px]"
          style={{
            background:
              "linear-gradient(90deg,transparent,#696969,transparent)",
          }}
        ></div>
        <div className="text-center font-semibold p-[50px]">
          Copyright 2022 Uifry.Com All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

export default page;
