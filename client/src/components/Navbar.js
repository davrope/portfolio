import React from 'react'
import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import {FaBars} from 'react-icons/fa';

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <h2>David Rodríguez</h2>
                </NavLogo>

                <MobileIcon onClick={toggle} >
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinkS to='about'>About</NavLinkS>
                    </NavItem>
                    <NavItem>
                        <NavLinkS to='projects'>Projects</NavLinkS>
                    </NavItem>
                    <NavItem>
                        <NavLinkS to='contact'>Contact</NavLinkS>
                    </NavItem>
                    <NavItem>
                        <NavLinkS to='blog'>Blog</NavLinkS>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>    
    )
}

export default Navbar;

const Nav = styled.nav`
    box-sizing: border-box;
    width: 100%;
    padding: 1em;
    margin-bottom: 0em;
    

    background-color: #000;
    height: 80px;
    margin-top: 0;
    display: flex;
    justify-content: center;
    align-items:center;
    /* align-items: baseline; */
    font-size: 1rem;
    position: sticky;
    top:0;
    z-index: 1;
    

    @media screen and (max-width:960px){
        transition: 0.8s all ease;
    }
`
const NavbarContainer = styled.nav`
    display:flex;
    justify-content: space-between;
    height:80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

const NavLogo = styled(LinkR)`
    color: #0fd27a;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display:flex;
    align-items: center;
    margin-left:24px;
    font-weight: bold;
    text-decoration: none;  
`

const  MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display:block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate (-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #f7f7f2;
        
        /* background-color: green; */
    }
`
const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

const NavItem = styled.li`
    height: 80px;

`




const NavLinkS = styled(LinkS)`
    color: #f7f7f2;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #00A3A3;
    }
`

const NavButton = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;

    }

`

const NavButtonLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #01bf71;
        
    }
`