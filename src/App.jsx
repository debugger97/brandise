import "./App.css"

function App() {
  return (
    <>
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
                Overcome the beliefs that block your ability to connect with
                high quality men and learn the real reason why smart, successful
                women are still single after 40.
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

      {/* power of love */}
      <div className="bg-[#7e7666] lg:py-[123px] py-[78px] lg:px-[190px] px-[18px] w-full">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full">
            <h1 className="text-[28px] lg:text-[53px] text-[#fffaf3] font-bold font-playfair px-9 lg:px-0">
              See how women have been impacted by the{" "}
              <span className="text-[#ddba7c]"> power of love:</span>
            </h1>
            <div className="rectangleBox mt-16 pt-[35.9px] rounded-br-[85px] lg:rounded-br-[176px] px-5 lg:px-[72px]">
              <h2 className="font-playfair font-bold text-[24px] pb[26.6px] lg:text-[30px]  text-[#4b4334]">
                “Once Marni held me accountable, it was easier for me to finally
                recognize when Mr. Right (Mark) came along.”
              </h2>
              <p className="font-oxygen text-[21px] mt-[22.8px] text-[#7e7666]">
                If I hadn’t followed the guiding hand of Marni, I wouldn’t have
                been ready to accept the moments and opportunities presented to
                me every day.
              </p>
              <div className="flex gap-5 mt-7 items-center pb-[73px]">
                <img src="/avatar.webp" alt="" className="w-[49px] h-[49px]" />
                <span className="font-playfair italic text-[#535353] text-[23px] ">
                  Janice
                </span>
              </div>
            </div>
          </div>
          <div className="w-full hidden lg:block">
            <div className="rectangleBox mt-16 pt-[35.9px] rounded-tl-[85px] lg:rounded-tl-[176px] px-5 lg:px-[72px]">
              <h2 className="font-playfair font-bold text-[24px] pb[26.6px] lg:text-[30px]  text-[#4b4334]">
                “Once Marni held me accountable, it was easier for me to finally
                recognize when Mr. Right (Mark) came along.”
              </h2>
              <p className="font-oxygen text-[21px] mt-[22.8px] text-[#7e7666]">
                If I hadn’t followed the guiding hand of Marni, I wouldn’t have
                been ready to accept the moments and opportunities presented to
                me every day.
              </p>
              <div className="flex gap-5 mt-7 items-center pb-[73px]">
                <img src="/avatar.webp" alt="" className="w-[49px] h-[49px]" />
                <span className="font-playfair italic text-[#535353] text-[23px] ">
                  Janice
                </span>
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <div className="justify-center pt-[38px] flex items-center">
              <img src="/ArrowLeft.svg" alt="" />
              <div className="w-[10px] h-[10px] rounded-full inline-block bg-[#e0d3c2] ml-[34px]"></div>
              <div className="w-[10px] h-[10px] ml-[34px]  rounded-full inline-block bg-[#A59B8A] opacity-90"></div>
              <div className="w-[10px] h-[10px]  bg-[#A59B8A]  rounded-full mx-[34px] inline-block opacity-80"></div>
              <img src="/ArrowRight.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* power of love */}
    </>
  )
}

export default App
