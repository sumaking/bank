import React, { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'

import Footer from '../footer/Footer'
import HeroSection from '../bankSection/BankCover'
import InfoSection from '../inforSection/InforSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../inforSection/Data'
import Navbar from '../navbar/Navbar'
import Services from '../services/Services'
import Sidebar from '../sidebar/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen ] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

 
 
    const toggleHome = () =>{
       scroll.scrollToTop() 
    }
    return (
        <div>
            <Sidebar isOpen = { isOpen } toggle = {toggle}/>
            <Navbar toggle = { toggle } />
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services/>
            <InfoSection {...homeObjThree}/>
            <Footer/>
        </div>
    )
}

export default Home
