import React from 'react'

export default function Card(props) {
    return (
        <div className=' bg-teal-50 text-teal-950 px-24 pb-20 w-1/3'>
            <div className='flex flex-col'>
                <div className='img'>
                    <img src={new URL(`../assets/${props.coverImg}`, import.meta.url).href} className='object-cover h-96 w-96' />
                </div>
                <div className='stuff'>
                    <h1 className='py-5 font-bold text-xl'>{props.name.toUpperCase()}</h1>
                    <p className='py-5 leading-8 text-lg'>{props.description}</p>
                    <h2 className='py-5 font-semibold text-lg'>Sample pricing:</h2>
                    <p className='py-5 text-lg'>{props.sample}</p>
                    <p className='py-5 text-lg'>{props.labour}</p>
                    <p className='py-5 text-lg'>{props.total}</p>
                </div>
            </div>
        </div>
    )
}