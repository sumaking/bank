import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import * as s from './Footer.Style'

const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop() 
     }

    return (
        <s.FooterContainer>
            <s.FooterWrap>
              <s.FooterLinksContainer>
                <s.FooterLinksWrapper>
                  <s.FooterLinkItems>
                    <s.FooterLinkTitle>About Us</s.FooterLinkTitle>
                      <s.FooterLink to="/">How it works</s.FooterLink>
                      <s.FooterLink to="/">Testimonials</s.FooterLink>
                      <s.FooterLink to="/">Careers</s.FooterLink>
                      <s.FooterLink to="/">Investors</s.FooterLink>
                      <s.FooterLink to="/">Terms of Services</s.FooterLink>
                  </s.FooterLinkItems>
                  <s.FooterLinkItems>
                    <s.FooterLinkTitle>Contact Us</s.FooterLinkTitle>
                      <s.FooterLink to="/">Contact </s.FooterLink>
                      <s.FooterLink to="/">Support </s.FooterLink>
                      <s.FooterLink to="/">Destinations</s.FooterLink>
                      <s.FooterLink to="/">SponsorShips</s.FooterLink>
                  </s.FooterLinkItems>
                </s.FooterLinksWrapper>

                <s.FooterLinksWrapper>
                  <s.FooterLinkItems>
                    <s.FooterLinkTitle>Videos</s.FooterLinkTitle>
                      <s.FooterLink to="/">Submit Video</s.FooterLink>
                      <s.FooterLink to="/">Ambassador</s.FooterLink>
                      <s.FooterLink to="/">Agency</s.FooterLink>
                      <s.FooterLink to="/">Influencer</s.FooterLink>
                  </s.FooterLinkItems>
                  <s.FooterLinkItems>
                    <s.FooterLinkTitle>Social Media</s.FooterLinkTitle>
                      <s.FooterLink to="/">Instagram</s.FooterLink>
                      <s.FooterLink to="/">Facebook</s.FooterLink>
                      <s.FooterLink to="/">Youtube</s.FooterLink>
                      <s.FooterLink to="/">Twitter</s.FooterLink>
                      <s.FooterLink to="/">Linkedin</s.FooterLink>
                  </s.FooterLinkItems>
                </s.FooterLinksWrapper>
              </s.FooterLinksContainer>

              <s.SocialMedia>
                 <s.SocialMediaWrap>
                   <s.SocialLogo to="/" onClick={toggleHome}>
                    bank
                   </s.SocialLogo>
                   <s.WebsiteRight>bank &copy; {new Date().getFullYear()} All rights reserved</s.WebsiteRight>
                   <s.SocialIcons>
                     <s.SocialIconLink href="#" /*target="_blank"*/ arial-label="Facebook"><FaFacebook/></s.SocialIconLink>
                     <s.SocialIconLink href="#" /*target="_blank"*/ arial-label="Instagram"><FaInstagram/></s.SocialIconLink>
                     <s.SocialIconLink href="#" /*target="_blank"*/ arial-label="Youtube"><FaYoutube/></s.SocialIconLink>
                     <s.SocialIconLink href="#" /*target="_blank"*/ arial-label="Twitter"><FaTwitter/></s.SocialIconLink>
                     <s.SocialIconLink href="#" /*target="_blank"*/ arial-label="Linkedin"><FaLinkedin/></s.SocialIconLink>
                   </s.SocialIcons>
                 </s.SocialMediaWrap>
              </s.SocialMedia>
            </s.FooterWrap>
        </s.FooterContainer>
    )
}

export default Footer
