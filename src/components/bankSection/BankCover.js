import React, { useState } from 'react'
import video from '../../assets/videos/bank1.mp4'
import { Button } from '../ButtonElement'

import * as s from './BankCover.Style'


const BankCover = () => {

    const [hover, setHover ] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }

    return (
        <s.BankCoverContainer id = "home">
          <s.BankBg>
            <s.VideoBg autoPlay loop muted src = {video} type = "video/mp4"/>
          </s.BankBg>

          <s.BankContent>
            <s.BankH1>Virtual Banking Made Easy</s.BankH1>

            <s.BankP>
              Sign up for a new account today and receive $250 in credit towards your
              next payment. 
            </s.BankP>

            <s.BankWrapper>
             <Button to="signup" 
             onMouseEnter = { onHover} 
             onMouseLeave = {onHover}
             primary = "true" 
             dark = "true"
             smooth={true}
             duration={500}
             spy={true}
             exact = "true"
             offset = {-80}
             >
              Get Started {hover ? <s.ArrowForward/> : <s.ArrowRight/>}
             </Button>
            </s.BankWrapper>
          </s.BankContent>
        </s.BankCoverContainer>
    )
}

export default BankCover
