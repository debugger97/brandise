import React from "react"

export default function HeroSection() {
  return (
    <div className="container mx-auto px-[17px] lg:px-0 ">
      <div className="flex flex-col-reverse lg:flex-row ">
        <div className="w-full ">
          <img
            src="/Logo.svg"
            alt=""
            className="hidden lg:block mt-[41px] w-[137px] h-[80px]"
          />
          <div className=" mt-[120.9px] lg:mt-[225px] max-w-3xl">
            <h1 className=" font-playfair text-[35px] lg:text-[80px] mb-[33px] font-bold text-[#4b4334] px-[18px] lg:px-0 ">
              How to attract your dream partner
            </h1>
            <p className="text-[21px] lg:text-[27px] text-[#7e7666] font-oxygen px-[18px] lg:px-0">
              Overcome the beliefs that block your ability to connect with high
              quality men and learn the real reason why smart, successful women
              are still single after 40.
            </p>
            <button className="button mt-[24px] lg:mt-[41px]">
              Download Your Guide
              <span className="hidden xl:block">&nbsp;Now</span>
            </button>
          </div>
        </div>
        <div className="w-full relative justify-center flex">
          <div className="flex justify-center">
            <div className="hidden lg:block imgshape flex justify-center"></div>
            <div className="imgshapeMobile flex justify-center lg:hidden"></div>
          </div>
          <img
            src="/Logo.svg"
            alt=""
            className=" absolute  lg:hidden w-[71px] h-[42px]"
          />
          <img
            src="/PDFImage.png"
            alt=""
            className="absolute top-[234.9px] max-w-[584px] max-h-[728.1px] hidden lg:block"
          />
          <img
            src="/PDFImageMobile.webp"
            alt=""
            className="absolute top-[81.6px] max-w-[584px] max-h-[728.1px] lg:hidden "
          />
          <img
            src="/CircleTextImage.webp"
            alt=""
            className="w-[225.1px] h-[225.2px] absolute top-[160px] right-2 hidden lg:block "
          />
        </div>
      </div>
    </div>
  )
}
