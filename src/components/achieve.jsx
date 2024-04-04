import img from "../images/shape.png"
import image from "../images/shapetwo.png"
import shapeImage from "../images/shapthree.png"

const Achieve = () => {
  return (
    <div className="mt-5">
      <h1 className="text-center text-[#4b4334] font-bold font-PlayfairDisplay-Bold  text-xl lg:text-[53px] mb-5 py-4 px-5">
        What you&apos;ll achieve
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center px-5">
        <div className="flex flex-col items-center">
          <img src={img} className="w-[180px]" />
          <p className="text-center font-Oxygen-Regular py-4 px-4 text-[#7e7666]">
            Why you don’t need to settle for unhappiness in this ONE area of
            your life
          </p>
        </div>
        <div className="flex flex-col items-center md:mt-[80px]">
          <img src={image} className="w-[180px]" />
          <p className="text-center  font-Oxygen-Regular py-4 px-4 text-[#7e7666]">
            Why you CAN have it all (and how to stop attracting the wrong guys
            who are intimidated by your success)
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={shapeImage} className="w-[180px]" />
          <p className="text-center  font-Oxygen-Regular py-4 px-4 text-[#7e7666]">
            How to break down the walls that keep your authentic self hidden
            from your forever partner
          </p>
        </div>
      </div>
    </div>
  )
}

export default Achieve
