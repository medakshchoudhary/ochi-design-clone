import React from "react";

function About() {
  return (
    <div className="font-['Neue_Montreal'] rounded-2xl bg-[#CDEA68]">
      <h1 className="px-14 pt-20 pb-14 text-[3.6vw] tracking-tight text-[#212121] leading-none w-[85%]">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="whatexpect text-[17px] pt-3 pl-14 pb-24 pr-20 text-[#212121] border-t-[1px] border-b-[1px] flex border-[#99AD53]">
        <div className="what w-[50%]">
          <h4>What you can expect:</h4>
        </div>
        <div className=" w-[22%]">
          <h4 className="flex flex-col leading-6">
            <p className="mb-10">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it&apos;s live or
              digital, delivered for one or a hundred people.
            </p>

            <p>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </h4>
        </div>
        <div className="socials pl-48 pt-20">
          <h4 className="flex flex-col">
            <p className="mb-6">S:</p>
            <p className="flex flex-col">
              <a href="">Instagram</a>
              <a href="">Behance</a>
              <a href="">Facebook</a>
              <a href="">Linkedin</a>
            </p>
          </h4>
        </div>
      </div>
      <div className="flex gap-5 w-full px-12 pt-5 pb-10">
        <div className="w-1/2">
          <h1 className="text-5xl text-[#212121]">Our approach:</h1>
          <button className="flex items-center text-sm gap-8 uppercase mt-5 py-4 px-6 bg-black rounded-full text-white">
            Read More
            <div className="circle rounded-full w-2 h-2 bg-white"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-2xl bg-[#99AD53]"></div>
      </div>
    </div>
  );
}

export default About;
