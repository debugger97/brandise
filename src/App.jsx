import "./App.css"

function App() {
  return (
    <>
      <div className="container mx-auto px-[170]">
        <div className="flex">
          <div className="w-full">
            <img src="/Logo.webp" alt="" className="mt-[41px]" />
            <div className="mt-[225px] max-w-3xl">
              <h1 className=" font-playfair text-[80px] mb-[33px] font-bold text-[#4b4334] ">
                How to attract your dream partner
              </h1>
              <p className="text-[27px] text-[#7e7666] font-oxygen">
                Overcome the beliefs that block your ability to connect with
                high quality men and learn the real reason why smart, successful
                women are still single after 40.
              </p>
              <button className="button mt-[41px]">
                Download Your Guide Now
              </button>
            </div>
          </div>
          <div className="w-full relative">
            <div className="flex justify-center">
              <div className="imgshape">
                <img src="/PDFImage.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
