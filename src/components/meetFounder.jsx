import profile from "../images/profile.png"
import OprahLogo from "../images/OprahLogo.png"
import GlamourLogo from "../images/GlamourLogo.png"
import ABCLogo from "../images/ABCLogo.png"
import DrPhiLogo from "../images/DrPhiLogo.png"
import CosmopolitanLogo from "../images/CosmopolitanLogo.png"
import MaskGroup from "../images/MaskGroup.png"
import minusImg from "../images/minus-circle-line.png"
import plusImg from "../images/plus-circle-line.png"

const MeetFounder = () => {
  const data = [
    { src: OprahLogo },
    { src: GlamourLogo },
    { src: ABCLogo },
    { src: DrPhiLogo },
    { src: CosmopolitanLogo },
  ]
  return (
    <>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 justify-center px-5 py-5 mt-9">
        <div className="flex justify-center items-center">
          <img src={profile} className="w-[400px]" />
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold mb-9 font-PlayfairDisplay-Bold text-4xl">
            <p className="text-[#4b4334] font-playfair text-[92px] font-bold mb-12">
              Meet our
            </p>
            <p className="text-[#4b4334] font-playfair text-[92px] font-bold ">
              founder,<span className="text-[#d88d78] pl-2">Marni</span>{" "}
            </p>
          </h1>
          <div className="flex flex-col gap-5 mt-5 mb-9">
            <p className="font-oxygen text-[#7e7666] md:w-[400px]">
              Having been married for 17 years, divorced, and successfully dated
              again in today’s complex social environment, and now happily
              married, Marni understands what it feels like to be lonely and
              sick of wasting time going on dates and having relationships with
              unavailable men that go nowhere.
            </p>
            <p className="font-oxygen text-[#7e7666] md:w-[400px]">
              Through her own journey to find love, Marni discovered that
              creating a process to shorten the journey for other women
              suffering from the inability to create emotionally safe and
              fulfilling life relationships was truly the mission of her soul
              and purpose.
            </p>
          </div>
          <button className="bg-[#e27c61] mt-9 w-[300px] text-white font-bold py-2 px-4 rounded-[35.5px]">
            Discover Marni’s Proven Process
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-5 justify-center px-5 py-5 mt-9 mb-5 ">
        {data.map((item, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={item.src}
              alt={`Image ${index + 1}`}
              className="w-[80px]"
            />
          </div>
        ))}
      </div>
      {/* Let go of limiting beliefs */}
      <div className="flex flex-col-reverse lg:flex-row gap-5 justify-center px-5 py-5 mt-9 mb-9 container mx-auto ">
        <div className="flex flex-col w-full">
          <h1 className="font-bold mb-5font-PlayfairDisplay-Bold text-2xl text-[#2c2820] mb-2">
            {" "}
            Let go of limiting beliefs
          </h1>
          <div className="flex justify-between items-center">
            <div></div>
            <img src={minusImg} alt="minus" className="w-[20px]" />
          </div>
          <p className="font-Oxygen-Regular text-[#7e7666] mb-3 mt-3 lg:w-[500px]">
            If you don’t think you deserve a good man, you’re grappling with
            accepting that a relationship is not in the cards for you, or you
            think you have to settle for a less than ideal soul mate, we’ll help
            you identify and learn to let go of what’s holding you back.
          </p>
          <div className="border border-[#aa9f89] mt-5 border-solid"></div>
          <div className="flex justify-between items-center py-5">
            <div className="font-bold  text-[#2c2820] font-PlayfairDisplay-Bold text-2xl  ">
              {" "}
              Break down barriers
            </div>
            <img src={plusImg} alt="minus" className="w-[20px] " />
          </div>
          <div className="border border-[#aa9f89] mt-2 border-solid"></div>
          <div className="flex justify-between gap-3  items-center py-5">
            <div className="font-bold  text-[#2c2820] font-PlayfairDisplay-Bold text-2xl  ">
              {" "}
              Fall in love with your true self
            </div>
            <img src={plusImg} alt="minus" className="w-[20px] " />
          </div>
          <div className="border border-[#aa9f89] mt-2 border-solid"></div>
        </div>
        <div className="flex justify-center items-center w-full  ">
          <img src={MaskGroup} className="w-[500px]" />
        </div>
      </div>
    </>
  )
}

export default MeetFounder
