import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import ItemList from '../component/ItemList'
import Footer from '../component/Footer'

const Home = () => {
  return (
      <>
          <Navbar />
          <Hero />
          <ItemList />
          <Footer/>
      </>
  )
}

export default Home