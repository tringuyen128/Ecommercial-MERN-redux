import React from 'react'
import Categories from '../Categories'
import Annoucement from '../components/Annoucement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Annoucement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  )
}

export default Home
