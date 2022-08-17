import React from 'react'
import AboutUs from '../Components/AboutUs'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import Skills from '../Components/Skills'
import '../../src/styles/Pages/Portfolio.css'
import Footer from '../Components/Footer'
import Project from '../Components/Project'
import GetInTouch from '../Components/GetInTouch'
import Testimony from '../Components/Testimony'
import Services from '../Components/Services'

const Portfolio = () => {
  return (
    <div>
        <Nav />
        <Header />
        <AboutUs />
        <Skills />
        <Services />
        <Project />
        <Testimony />
        <GetInTouch />
        <Footer />
        
    </div>
  )
}

export default Portfolio