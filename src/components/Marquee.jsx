import React from 'react'

function Marquee() {
  return (
    <div className='w-full rounded-tl-3xl py-20 bg-[#004D43]'>
        <div className="text whitespace-nowrap gap-16 flex border-t-2 border-b-2 overflow-hidden border-zinc-400">
            <h1 className='text-[28vw] -mb-32 pt-4 uppercase font-bold font-["Founders_Grotesk_X_Condensed"] leading-none'>WE ARE OCHI</h1>
            <h1 className='text-[28vw] -mb-32 pt-4 uppercase font-bold font-["Founders_Grotesk_X_Condensed"] leading-none'>WE ARE OCHI</h1>
        </div>
    </div>
  )
}

export default Marquee