import React from "react";
import { FaArrowUp } from "react-icons/fa6";

function LandingPage() {
  return (
    // we write pt-1 here because the app.jsx is taking mt-32 as base and shifting the navbar as well to the bottom by mt-32 thereby adding pt-1 gives this a priority and the nav bar stays ixed on the top

    // or we can undertand by that after adding pt-1 we have the first element as the main outer div so the navbar takes it as refrence for position rather than taking the textstructure div as refrence with m-32
    <div  data-scroll data-scroll-section data-scroll-speed="-0.7" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-36 px-12">
        {["we create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <div className="mr-[1vw] w-[9vw] h-[5.7vw] rounded-md relative bottom-[0.8vw] bg-red-500"></div>
                )}
                <h1 className='pt-[2vw] -mb-[1vw] text-[9vw] uppercase font-bold leading-[.65] font-["Founders_Grotesk_X_Condensed"]'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 flex font-neuemontreal  border-zinc-700 mt-20 justify-between py-3 px-10">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p key={index} className={`text-md ${index === 1 && "ml-48"}`}>
            {item}
          </p>
        ))}
        <div className="start flex gap-2">
          <div className="border-[1px] h-8 text-sm border-zinc-500 px-3 flex items-center justify-center rounded-full uppercase">
            Start the project
          </div>
          <div className="w-8 h-8 flex items-center justify-center border-[1px] rounded-full border-zinc-500">
            <span className="rotate-[45deg]">
              <FaArrowUp className="w-5 h-5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
