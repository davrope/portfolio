import React from 'react'
import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import {FaBars} from 'react-icons/fa';

const Navbar = () => {
    return (
        <Router >
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <h2>David</h2>
                    </NavLogo>

                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinkS to='about'>About</NavLinkS>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </Router >
    )
}

export default Navbar;

const Nav = styled.nav`
    box-sizing: border-box;
    width: 100%;
    padding: 1em;
    margin-bottom: 2em;
    

    background-color: #f7f7f2;
    height: 80px;
    // margin-top: -80px;
    display: flex;
    justify-content: center;
    /* align-items:center; */
    align-items: baseline;
    font-size: 1rem;
    position: sticky;
    top:0;
    z-index: 10;
    color: #f7f7f2;

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
    color: red;
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

    @media screen and (mad-width: 768px){
        display:block_;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate (-100%, 60%);
        font-size: 1.8 rem;
        cuirsor: pointer;
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
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #01bf71;
    }
`