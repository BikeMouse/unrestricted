import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Card from './components/Card'
import data from './data'
import Footer from './components/Footer'

export default function App() {
  const cardElements = data.map((e) => {
    return <Card
      key={e.id}
      {...e}
    />
  })
  return (
    <div>
      <Header />
      <About />
      <div className='flex'>
        {cardElements}
      </div>
      <Footer />
    </div>
  )
}