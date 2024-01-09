import React from 'react'

export default function Card(props){
    console.log(props);
    return (
        <div className='card'>
            <div className='flex'>
                <img src={new URL(`../assets/${props.coverImg}`, import.meta.url).href} className='CardImg'/>
            </div>
            <div className='text'>
                <h1>{props.name.toUpperCase()}</h1>
                <p>{props.description}</p>
                <h2>Sample pricing:</h2>
                <p>{props.sample}</p>
                <p>{props.labour}</p>
                <p>{props.total}</p>
            </div>
        </div>
    )
}