import React from 'react'

function LandingPage() {
  return (
    // we write pt-1 here because the app.jsx is taking mt-32 as base and shifting the navbar as well to the bottom by mt-32 thereby adding pt-1 gives this a priority and the nav bar stays ixed on the top
    
    // or we can undertand by that after adding pt-1 we have the first element as the main outer div so the navbar takes it as refrence for position rather than taking the textstructure div as refrence with m-32
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-32'>
            <div className='masker'>
                <h1 className='text-9xl font-foundersgrotesk'>WE CREATE</h1>
            </div>
        </div>
    </div>
  )
}

export default LandingPage