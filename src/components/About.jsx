import React from 'react'


export default function About() {
    return (
        <div className='About'>
            <div>
                <h2>About Unrestricted</h2>
                <p>Cycle repairs are always needed when we least expect it. Our vision to you -a fellow cyclist-
                    is that we deliver the repairs you need whereever you are- may it be at home, at your workplace or when stuck out on the roads. We will travel to you by bike to reduce the impact on our environment.
                    Come have a look at our site and see what Services we provide!</p>
            </div>
            <div className='pic'>
                <img src={new URL(`../assets/gears.jpg`, import.meta.url).href} className='Img' />
            </div>
            <div>
                <h3>Key Principles</h3>
                <p>Safety First</p>
                <p>Whichever our services you are using - please be safe!</p>
                <p>Satisfaction</p>
                <p>The products that We -Unrestricted- use are products that had been to satisfactory quality for ourselves.</p>
                <p>Your Location Matters</p>
                <p>We are mobile mechanics and travel to your destination. Please just keep in mind we are CYCLING mechanics and travel to you by bike.</p>
            </div>
            <p>Find below our services and ways of contacting. Please note the pricing is for illustration purposes only, but when we do provide a proposal to you, it will be broken down in the same manner</p>
        </div>
    )
}