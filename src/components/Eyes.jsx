import React, { useEffect, useRef, useState } from "react";

function Eyes() {
  
  const [rotate1, setRotate1] = useState(0);
  const [rotate2, setRotate2] = useState(0);

  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      console.log(e.clientX,e.clientY)
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;

      var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
      setRotate1(angle-240);
      setRotate2(angle);
    })
  })

  return (

    <div className="eyes w-full h-screen overflow-hidden">
      <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className="absolute gap-10 flex top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div className="w-[8vw] h-[8vw] relative rounded-full bg-zinc-900">
              <div style={{transform: `translate(-50%,-50%) rotate(${rotate1}deg)`}} className="line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                <div className="w-[1.3vw] h-[1.3vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
            <div className="w-[8vw] h-[8vw] relative rounded-full bg-zinc-900">
              <div style={{transform: `translate(-50%,-50%) rotate(${rotate2}deg)`}} className="line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                <div className="w-[1.3vw] h-[1.3vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
