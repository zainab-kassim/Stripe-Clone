

"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function RevenueSections() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionsRef = useRef<(HTMLElement | null)[]>([]);

    const sections = [
        {
            icon:'https://img.icons8.com/?size=100&id=GHcWqSGJuqG4&format=png&color=000000',
            title: "Calculate Revenue",
            heading: "Estimate your savings in 10 seconds",
            text: "Sque is the Legal Revenue & Compliance OS. Without it, invoices stop, audit trails break, and revenue leaks return. Our system ensures your financial operations never stall and your compliance remains bulletproof.",
            button1: "Get Started",
            button2: "Learn More",
        },
        {
            icon:'https://img.icons8.com/?size=100&id=24W3YiVHWvNC&format=png&color=000000',
            title: "Grow Smarter",
            heading: "Unlock new revenue channels",
            text: "Scale your business with confidence. Automate compliance checks, reduce costly errors, and redirect your team’s time toward innovation and growth. With Sque, revenue growth comes without added risk.",
            button1: "Start Growing",
            button2: "See Features",
        },
        {
            icon:'https://img.icons8.com/?size=100&id=3N5nsXW7ytVx&format=png&color=000000',
            title: "Stay Compliant",
            heading: "Never miss an audit again",
            text: "Built-in audit trails and intelligent monitoring keep you always ready. Sque ensures peace of mind, helping you focus on your business while we safeguard your compliance in the background.",
            button1: "Stay Protected",
            button2: "Contact Sales",
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute("data-index"));
                        setActiveIndex(index);
                    }
                });
            },
            { threshold: 0.6 } // at least 60% visible
        );

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionsRef.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className='md:py-24 py-10 xl:px-24 px-8 md:px-14 max-w-7xl mx-auto   '>
            <div className="grid md:grid-cols-2 grid-cols-1 ">
                {/* LEFT SIDE (scrollable text content) */}
                <div className="space-y-10 px-6">
                    {sections.map((sec, idx) => (
                        <section
                            key={idx}
                            data-index={idx}

                            ref={(el) => {
                                sectionsRef.current[idx] = el; // ✅ store element in array
                            }}
                            className="h-screen flex flex-col justify-center"
                        >
                           <div className="text-xl items-center text-indigo-700 font-bold flex flex-row gap-2"> <Image alt='icon' width={80} height={80} src={sections[activeIndex].icon} className="w-8 h-8" />{sections[activeIndex].title}</div>
                            <p className="md:text-6xl text-4xl text-slate-800 font-bold pt-10">
                                {sec.heading}
                            </p>
                            <p className="text-slate-900 text-md my-5">{sec.text}</p>
                            <div className="flex gap-4 text-sm">
                                <button className="px-6 py-3 bg-indigo-700 text-white rounded-2xl shadow-md hover:bg-indigo-800 transition">
                                    {sec.button1}
                                </button>
                                <button className="px-6 py-3 bg-slate-200 text-slate-900 rounded-2xl shadow-md hover:bg-slate-300 transition">
                                    {sec.button2}
                                </button>
                            </div>
                        </section>
                    ))}
                </div>

                {/* RIGHT SIDE (sticky video with changing text) */}
                <div className="hidden md:block h-screen overflow-hidden rounded-l-xl sticky top-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover z-10"
                    >
                        <source src="/gradient.mp4" type="video/mp4" />
                    </video>

                    <div className="relative z-20 flex items-center justify-center h-full backdrop-blur-xl text-white px-6 text-center">
                        <div className="transition-opacity duration-700">
                            <h2 className="text-4xl font-bold ">{sections[activeIndex].title}</h2>
                            <p className="mt-4 text-xl font-semibold">
                                {sections[activeIndex].heading}
                            </p>
                            <p className="mt-4 max-w-xl text-lg">{sections[activeIndex].text}</p>

                            <div className="flex gap-4 mt-6 justify-center">
                                <button className="px-6 py-3  bg-white/80 text-slate-900 rounded-2xl shadow-md hover:bg-white transition">
                                    {sections[activeIndex].button1}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
