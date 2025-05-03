import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ProductSection from './Components/ProductSection'
import ContactForm from './Components/ContactForm'
import Footer from './Components/Footer'
import Review from './Components/Review'
import Testimonials from './Components/Testimonials'

const App = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <ProductSection/>
     <Review/>
     <Testimonials/>
     <ContactForm/>
     <Footer/>
    </div>
  )
}

export default App
