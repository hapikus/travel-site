import { AnchorLink } from "gatsby-plugin-anchor-links"
import * as React from "react"
import styled from "styled-components"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"

import { FaBars } from "react-icons/fa"
import { useState } from 'react';

const Header = () => {
  const barsElement = React.useRef()
  const [isActive, setIsActive] = useState(false);

  const clickChecker = () => {
    setIsActive(current => !current);    
  }

  const navMenuClick = (e) => {
    if (e.target.attributes.length > 1) {
      setIsActive(current => !current);
    } 
  }

  return (
    <Nav>
      <NavLink to="/" active={false}>EXPLORE</NavLink>
      <Bars onClick={clickChecker} active={isActive} ref={barsElement}/>
      <NavMenu active={isActive} onClick={navMenuClick}>
        {menuData.map((elem, index) => (
          <NavLink to={elem.link} key={index} active={true} >
            {elem.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/">
          Book a Flight!
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

let color = "white"

const Nav = styled.nav`
  background: transparent;
  height: 80px;

  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  justify-content: space-between;
  padding: 0.5rem max(calc((100vw - 1500px) / 2), 10px);

  position: relative;
  z-index: 100;
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  transition: 0.4s all linear;
  
  @media screen and (max-width: 760px) {
    display: block;
    position: ${({active}) => (active ? 'fixed' : 'absolute')};
    color: ${({active}) => (active ? 'black' : 'white')};
    top: 0;
    right: 0;
    transform: translate(-100%, 90%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 3;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-rigth: -48px;
  transition: 0.4s all linear;

  font-weight: 700;

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #eee;
    padding: 100px;
    z-index: 2;

    transform: ${({active}) => (active ? 'none' : 'translateX(100%)')};
  }
`

const NavLink = styled(AnchorLink)`
  color: ${color};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 700;
  transition: 0.4s all linear;

  @media screen and (max-width: 760px) {
    display: ${({active}) => (active ? 'block' : 'flex')};
    font-size: ${({active}) => (active ? '42px' : 'none')};
    line-height: ${({active}) => (active ? '52px' : 'none')};
    height: ${({active}) => (active ? 'auto' : '100%')};
    color: ${({active}) => (active ? 'black' : 'white')};
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-rigth 24px;
  
  @media screen and (max-width: 760px) {
    display: none;
  }
`
