import React from 'react'
import Image from 'next/image'

export default function Companies() {
    return (

        <div className="grid max-w-7xl mx-auto  px-8  grid-cols-2 md:grid-cols-4 gap-y-20 justify-center justify-items-center items-center mb-24 mt-30 lg:mt-44 ">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" alt="img1" width={200} height={200} className="w-fit size-8" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="img2" width={200} height={200} className="w-fit size-8" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="img3" width={200} height={200} className="w-fit size-8" />
            <Image src="https://img.icons8.com/?size=300&id=1wOILhZiKNMY&format=png&color=000000" alt="img4" width={200} height={200} className="w-fit size-8" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg" alt="img5" width={200} height={200} className="w-fit size-4" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" alt="img6" width={200} height={200} className="w-fit size-8" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" alt="img7" width={200} height={200} className="w-fit size-8" />
            <Image src='/URBN .png' alt="img8" width={200} height={200} className="w-fit size-8" />
        </div>
    )
}
