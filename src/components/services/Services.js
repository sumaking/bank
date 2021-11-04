import React from 'react'
import Icon1 from '../../assets/images/Bcg.jpg'
import Icon2 from '../../assets/images/Bcg.jpg'
import Icon3 from '../../assets/images/Bcg.jpg'
import * as s from './Services.Style'

const Services = () => {
    return (
        <s.ServicesContainer id = "services">
          <s.ServicesH1><span>Our</span> Services</s.ServicesH1>
          <s.ServicesWrapper>
            <s.ServicesCard>
              <s.ServicesIcon src={Icon1}/>
              <s.ServicesH2>Reduce expenses</s.ServicesH2>
              <s.ServicesP>We help reduce your fees and icrease
              your overall revenue.</s.ServicesP>
            </s.ServicesCard>

            <s.ServicesCard>
                <s.ServicesIcon src={Icon2}/>
                <s.ServicesH2>Virtual Offices</s.ServicesH2>
                <s.ServicesP>You can access our platform online anywhere in the world.</s.ServicesP>
            </s.ServicesCard>

            <s.ServicesCard>
                <s.ServicesIcon src={Icon3}/>
                <s.ServicesH2>Premium Benefits</s.ServicesH2>
                <s.ServicesP>Unlock our special membership card 
                that returns 5% cash back.</s.ServicesP>
            </s.ServicesCard>
          </s.ServicesWrapper>
            
        </s.ServicesContainer>
    )
}

export default Services
