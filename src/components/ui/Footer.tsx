import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 bottom-0 text-gray-400">
      <div className="max-w-7xl mx-auto px-8 md:px-14 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="flex flex-col space-y-4">
          <h2 className="text-white text-2xl font-bold">Sque</h2>
          <p className="text-gray-400 text-sm">
            Modern solutions to grow your business efficiently.
          </p>
        </div>

       
        <div className="flex justify-between md:justify-center space-x-12">
          <div className="flex flex-col space-y-2">
            <h3 className="text-white font-semibold">Product</h3>
            <a href='#' className="hover:text-white transition">Overview</a>
            <a href="#"  className="hover:text-white transition">Pricing</a>
            <a href="#"  className="hover:text-white transition">Features</a>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="text-white font-semibold">Company</h3>
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Careers</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>

        {/* Support / Resources */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-white font-semibold">Resources</h3>
          <a href="#"  className="hover:text-white transition">Blog</a>
          <a href="#"  className="hover:text-white transition">Help Center</a>
          <a href="#"  className="hover:text-white transition">Privacy</a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()}  All rights reserved.
      </div>
    </footer>
  )
}
