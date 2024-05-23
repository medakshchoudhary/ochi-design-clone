import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';

function App() {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'> 
    {/* how does the min-h-screen removed the extra white space from round corners? */}
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
    </div>
  )
}

export default App