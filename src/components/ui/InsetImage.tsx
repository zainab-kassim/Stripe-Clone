import React from 'react'

export default function InsetImage() {
    return (
        <div className="max-w-7xl xl:px-24 px-8 md:px-14 mb-14">
            <div className="relative overflow-hidden h-[300px] rounded-2xl">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                >
                    <source src="/gradient.mp4" type="video/mp4" />
                </video>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent rounded-2xl flex flex-col justify-end">
                    {/* Text container */}
                    <div className="p-6 text-white">
                        <h4 className="sm:text-3xl text-xl font-bold mb-4">
                            Ready to Stop Revenue Leaks?
                        </h4>
                        <a
                            href="#"
                            className="inline-block border-white border-[0.5px] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                            Start Free Trial
                        </a>
                    </div>
                </div>
            </div>
        </div>


    )
}
