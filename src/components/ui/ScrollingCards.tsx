"use client";
import React, { useRef, useEffect, useState } from "react";

type CardProps = {
    title: string;
    description: string;
    link: string;
    logos: { name: string; imageUrl: string; link: string }[];
};

const Card: React.FC<CardProps> = ({ title, description, link, logos }) => {
    return (
        <div className="relative border-t-8 border-t-indigo-600 bg-white rounded-t-2xl shadow-md p-6 flex flex-col justify-between min-h-[320px]  mb-12 w-80 flex-shrink-0">
            <div>
                <h2 className="text-xl font-bold text-slate-900">{title}</h2>
                <p className="text-slate-600 mt-3">{description}</p>
                <a
                    href={link}
                    className="text-indigo-600 font-semibold mt-4 inline-block hover:underline"
                >
                    Learn more →
                </a>
            </div>

            <div className="flex justify-start gap-4 mt-6 items-center">
                {logos.map((logo, index) => (
                    <a
                        key={index}
                        href={logo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={logo.name}
                    >
                        <img
                            src={logo.imageUrl}
                            alt={logo.name}
                            className="h-8 w-auto object-contain hover:scale-110 transition-transform"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
};

const ScrollingCards: React.FC = () => {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const cards: CardProps[] = [
  {
    title: "AI",
    description:
      "Stripe supports businesses across the AI ecosystem—from usage-based billing for for infrastructure providers like OpenAI.",
    link: "#",
    logos: [
      { name: "OpenAI", imageUrl: "https://openai.com/favicon.ico", link: "https://openai.com" },
      { name: "Cursor", imageUrl: "https://img.icons8.com/?size=100&id=43wJ5smERyVB&format=png&color=000000", link: "https://cursor.so" },
      { name: "Anthropic", imageUrl: "https://www.anthropic.com/favicon.ico", link: "https://www.anthropic.com" },
    ],
  },
  {
    title: "SaaS",
    description:
      "Quickly scale your SaaS with unified billing, revenue recognition, and subscription management tools.",
    link: "#",
    logos: [
      { name: "Slack", imageUrl: "https://slack.com/favicon.ico", link: "https://slack.com" },
      { name: "Notion", imageUrl: "https://img.icons8.com/?size=100&id=nvtEH6DpqruC&format=png&color=000000", link: "https://www.notion.so" },
      { name: "Figma", imageUrl: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000", link: "https://www.figma.com" },
    ],
  },
  {
    title: "Marketplaces",
    description:
      "Easily onboard sellers, manage compliance, and handle global payouts for your marketplace.",
    link: "#",
    logos: [
      { name: "Shopify", imageUrl: "https://www.shopify.com/favicon.ico", link: "https://www.shopify.com" },
      { name: "Amazon", imageUrl: "https://www.amazon.com/favicon.ico", link: "https://www.amazon.com" },
      { name: "Etsy", imageUrl: "https://www.etsy.com/favicon.ico", link: "https://www.etsy.com" },
    ],
  },
  {
    title: "E-commerce",
    description:
      "Accept payments, handle subscriptions, and manage products easily using Stripe.",
    link: "#",
    logos: [
      { name: "WooCommerce", imageUrl: "https://img.icons8.com/?size=100&id=105241&format=png&color=000000", link: "https://woocommerce.com" },
      { name: "Shopify", imageUrl: "https://www.shopify.com/favicon.ico", link: "https://www.shopify.com" },
    ],
  },
  {
    title: "Fintech",
    description:
      "Build modern financial services with Stripe’s APIs for payments, accounts, and cards.",
    link: "#",
    logos: [
      { name: "Plaid", imageUrl: "https://img.icons8.com/?size=100&id=W4aeMoz7bZZY&format=png&color=000000", link: "https://plaid.com" },
      { name: "Robinhood", imageUrl: "https://robinhood.com/favicon.ico", link: "https://robinhood.com" },
      { name: "Venmo", imageUrl: "https://img.icons8.com/?size=100&id=102678&format=png&color=000000", link: "https://venmo.com" },
    ],
  },
];



    return (
        <div className=" mx-auto max-w-7xl  flex justify-center">
            <div className="flex gap-6 overflow-x-auto my-16 overflow-y-hidden px-12 ">
                {cards.map((card, i) => (
                    <div
                        key={i}
                        ref={(el) => {
                            cardRefs.current[i] = el; // just assign, don't return anything
                        }}
                        data-index={i}
                        className='snap-start transition-transform duration-500'
                    >
                        <Card {...card} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScrollingCards;
