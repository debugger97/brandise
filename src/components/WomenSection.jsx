export default function WomenSection() {
  return (
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
              been ready to accept the moments and opportunities presented to me
              every day.
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
              been ready to accept the moments and opportunities presented to me
              every day.
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
  )
}
