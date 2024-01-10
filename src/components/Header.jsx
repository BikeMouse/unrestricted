import React from 'react'


export default function Header() {
    return (
        <nav className='container-2xl flex bg-teal-950 text-teal-50 px-24 py-10'>
            <div className='flex flex-row'>
                <div className='font-sans hover:font-serif font-extrabold'>
                    <h1 className='pb-5 text-transform: capitalize text-4xl'>unrestricted</h1>
                    <p className='text-transform: capitalize text-2xl'>your local mobile bike mechanic</p>
                </div>
            </div>
        </nav>
    )
}