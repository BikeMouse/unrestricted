import React from 'react'


export default function About() {
    return (
        <div className='bg-teal-50 text-teal-950 p-24'>
            <div className='container-2xl absolute top-20 right-20'>
                <img src={new URL(`../assets/gears.jpg`, import.meta.url).href} className='object-cover h-48 w-96' />
            </div>
            <div className='container-xl font-sans'>
                <h2 className='font-semibold text-2xl pb-5 text-transform: capitalize'>about unrestricted</h2>
                <p className='font-normal text-lg pb-16 leading-8'>Cycle repairs are always needed when we least expect it. Our vision to you -a fellow cyclist-
                    is that we deliver the repairs you need whereever you are- may it be at home, at your workplace or when stuck out on the roads. We will travel to you by bike to reduce the impact on our environment.
                    Come have a look at our site and see what Services we provide!</p>
            </div>
            <div className='container-xl font-sans'>
                <h3 className='font-bold text-2xl pb-10 text-transform: capitalize'>key principles</h3>
                <ul className='pl-5'>
                    <li className='list-disc italic font-bold text-xl text-transform: capitalize'>safety first
                        <p className='font-normal text-lg pb-5'>Whichever our services you are using - please be safe!</p>
                    </li>
                    <li className='list-disc italic font-bold text-xl text-transform: capitalize'>satisfaction
                        <p className='font-normal text-lg pb-5'>The products that we -Unrestricted- use are products that had been to satisfactory quality for ourselves.</p>
                    </li>
                    <li className='list-disc italic font-bold text-xl text-transform: capitalize'>your location matters
                        <p className='font-normal text-lg pb-14'>We are mobile mechanics and travel to your destination. Please just keep in mind we are CYCLING mechanics and travel to you by bike.</p>
                    </li>
                </ul>
            </div>
            <p className='font-sans font-bold italic text-xl leading-8'>Find below our services and ways of contacting. Please note the pricing is for illustration purposes only, but when we do provide an invoice to you, it will be broken down in the same manner</p>
        </div>
    )
}