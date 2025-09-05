import React from 'react'
import Image from 'next/image'
import CompaniesLogo from '../ui/CompaniesLogo'
import Navbar from '../ui/Navbar'


function Herosection() {
  return (
    <div className='text-white'>
      <section className="relative min-h-[520px] overflow-hidden">
        {/* Background video with slant */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10 [clip-path:polygon(0_0,100%_0,100%_60%,0_100%)]"
        >
          <source src="/bubbleVideo.mp4" type="video/mp4" />
        </video>
 <Navbar/>
        
      </section>


      <div className="absolute w-full top-16 mt-16 mb-28 gap-5 z-20 grid  md:grid-cols-2">
        <div className="max-w-7xl mx-auto w-full pl-7 px-3 md:pl-14 xl:pl-28">
          <section className="bg-black/30 inline-flex items-center font-bold text-sm rounded-full w-auto mb-8 px-4 py-2">
            Calculate my revenue
            <Image
              alt="icon"
              src="https://img.icons8.com/?size=100&id=41195&format=png&color=ffffff"
              width={50}
              height={50}
              className="w-4 h-4 ml-2"
            />
          </section>
          <h1 className="lg:text-6xl  tracking-wide text-4xl md:text-5xl text-slate-900/80 font-bold">
            Stop Losing Billable Time You've Already Earned
          </h1>
          <p className='text-md mt-6  text-slate-900'>
            Sque is the Legal Revenue & Operating System — it captures work automatically and runs billing as your system of record.
          </p>

          <div className="relative mt-10 w-auto text-sm sm:text-md  sm:w-2xs">
            <input
              type="text"
              placeholder="Email address"
              className="w-full outline-blue-600 h-12 ring-[0.5px] text-gray-700 ring-slate-400 bg-slate-100 rounded-full px-6 py-2 pr-36"
            />

            <button className="flex font-medium flex-row h-10 items-center rounded-full bg-slate-800 text-white absolute top-1/2 right-2 -translate-y-1/2 px-4 py-2">
              Start now
              <Image
                alt="icon"
                src="https://img.icons8.com/?size=100&id=41195&format=png&color=ffffff"
                width={50}
                height={50}
                className="w-4 h-4 ml-2"
              />
            </button>
          </div>
        </div>
        {/* Image Section */}
        <div className="relative hidden md:block h-[90%]">
          <Image
            src="https://storage.googleapis.com/sque_storage/videos/Screenshot%202025-08-27%20at%202.40.43%E2%80%AFAM.png"
            alt="image"
            fill
            className="object-cover  sm:rounded-l-md"
          />
        </div>
      </div>
      
    </div>
  )
}

export default Herosection