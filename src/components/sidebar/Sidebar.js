import React from 'react'
import * as s from './Sidebar.Style'

const Sidebar = ({toggle, isOpen}) => {
    return (
        <s.SidebarContainer isOpen = { isOpen} onClick = {toggle}>
            <s.Icon onClick = {toggle}>
             <s.CloseIcon/>
            </s.Icon>
            <s.SidebarWrapper>
               <s.SidebarMenu>
                 <s.SidebarLink to="about"  onClick = {toggle}>About</s.SidebarLink>
                 <s.SidebarLink to="discover"  onClick = {toggle}>Discover</s.SidebarLink>
                 <s.SidebarLink to="services"  onClick = {toggle}>Services</s.SidebarLink>
                 <s.SidebarLink to="signup"  onClick = {toggle}>sign Up</s.SidebarLink>
               </s.SidebarMenu>
               <s.SideBtnWrap>
                 <s.SidebarRoute to="/signin">Sign In</s.SidebarRoute>
               </s.SideBtnWrap>
            </s.SidebarWrapper>
        </s.SidebarContainer>
    )
}

export default Sidebar
