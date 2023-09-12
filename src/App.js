import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Studies from './Components/Studies/Studies'
import { Intro } from './Components/Intro/Intro'
import Courses from './Components/Courses/Courses'
import Instructors from './Components/Instructors/Instructors'
import JoinUs from './Components/JoinUS/JoinUs'
import Testimonial from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Intro/>
    <Studies/>
    <Courses/>
    <Instructors/>
    <JoinUs/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default App
