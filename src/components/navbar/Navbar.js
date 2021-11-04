import React, { useState, useEffect } from 'react'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import {FaBars } from 'react-icons/fa'

import * as s from './Navbar.Style'

const Navbar = ({toggle}) => {
   const [scrollNav, setScrollNav] = useState(false)

   const changeNav = () =>{
      if(window.scrollY >= 80){
         setScrollNav(true)
      }else{
         setScrollNav(false)
      }
   }

   useEffect(()=>{
      window.addEventListener('scroll',changeNav)
   }, [])

   const toggleHome = () =>{
      scroll.scrollToTop() 
   }
    return (
        <>
         <IconContext.Provider value={{color:"#fff"}}>
          <s.Nav scrollNav = { scrollNav}>
            <s.NavbarContainer >
              <s.NavLogo to="/" onClick={toggleHome}>bank </s.NavLogo>
              <s.MobileIcon onClick = {toggle}>
                <FaBars/>
              </s.MobileIcon>
              <s.NavMenu>
                 <s.NavItem>
                    <s.NavLinks to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact = "true"
                    offset = {-80}
                    >About</s.NavLinks> 
                 </s.NavItem>
                 <s.NavItem>
                    <s.NavLinks to="discover"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact = "true"
                    offset = {-80}
                    >Discover</s.NavLinks>
                 </s.NavItem>
                 <s.NavItem>
                    <s.NavLinks to="services"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact = "true"
                    offset = {-80}
                    >Services</s.NavLinks>
                 </s.NavItem>
                 <s.NavItem>
                    <s.NavLinks to="signup"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact = "true"
                    offset = {-80}
                    >Sign Up</s.NavLinks>
                 </s.NavItem>
              </s.NavMenu>
              <s.NavBtn>
                 <s.NavBtnLink to="/signin">Sign in</s.NavBtnLink>
              </s.NavBtn>
            </s.NavbarContainer>
          </s.Nav>
          </IconContext.Provider>
        </>
    )
}

export default Navbar
