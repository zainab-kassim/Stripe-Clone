import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="max-w-7xl mx-auto text-md px-8 md:px-14 xl:px-28 py-6  font-bold flex justify-between items-center relative z-10">
              <div className="flex flex-row gap-7 items-center">
                <div className="flex gap-1 flex-row items-center">
                  <Image
                    alt="sque icon"
                    src="https://www.sque.ai/app/assets/Brand/SVG/Sque_icon_universal.svg"
                    className="w-12 h-12"
                    width={50}
                    height={50}
                  />
                  <h2 className="text-2xl">Sque</h2>
                </div>
    
                <div className="hidden gap-7 md:flex items-center">
                  <h2>Features</h2>
                  <h2>Resources</h2>
                </div>
    
    
              </div>
    
              <div className="md:flex flex-row hidden items-center gap-5">
                <div className="flex items-center flex-row">
                  <button>Login</button>
                  <Image
                    alt="icon"
                    src="https://img.icons8.com/?size=100&id=41195&format=png&color=ffffff"
                    width={50}
                    height={50}
                    className="w-4 h-4"
                  />
                </div>
    
                <button className="bg-blue-700 rounded-lg px-4 py-2">Get Started</button>
              </div>
            </div>
  )
}
