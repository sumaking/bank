import React from 'react'
import { Button } from '../ButtonElement'
import * as s from './Infor.Style'
import Icon1 from '../../assets/images/Bcg.jpg'

const InfoSection = (props) => {
    const {
      lightBg ="",id ="",imgStart ="",
      topLine ="",headline ="",description ="",
      lightText ="",darkText ="",buttonLabel ="",
      img ="",alt="",primary ="",
      dark ="",dark2 =""
    } = props
    return (
        <>
         <s.InfoContainer lightBg = {lightBg} id = {id}>
            <s.InfoWrapper>
              <s.InfoRow imgStart = { imgStart}>
                <s.Column1>
                  <s.TextWrapper>
                    <s.TopLine>{topLine}</s.TopLine>
                    <s.Heading lightText = {lightText}>{headline}</s.Heading>
                    <s.Subtitle darkText = {darkText}>{description}</s.Subtitle>
                    <s.BtnWrap>
                      <Button to="home"
                      smooth = {true}
                      duration = {500}
                      spy = {true}
                      exact = 'true'
                      offset = {-80}
                      primary = {primary ? 1 : 0}
                      dark = {dark ? 1 : 0}
                      dark2 = {dark2 ? 1 : 0}
                      >{buttonLabel}</Button>
                    </s.BtnWrap>
                  </s.TextWrapper>
                </s.Column1>
                <s.Column2>
                  <s.ImgWrap>
                    <s.Img src= {Icon1} alt = {alt}/>
                  </s.ImgWrap>
                </s.Column2>
              </s.InfoRow>
            </s.InfoWrapper>
         </s.InfoContainer> 
        </>
    )
}

export default InfoSection
