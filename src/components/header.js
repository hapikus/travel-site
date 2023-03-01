import { AnchorLink } from "gatsby-plugin-anchor-links";
import * as React from "react"
import styled from "styled-components"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">EXPLORE</NavLink>
      <NavMenu>
        {menuData.map((elem, index) => (
          <NavLink to={elem.link} key={index}>
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

  @media screen and (max-width: 465px) {
    justify-content: center;
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
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-rigth: -48px;

  font-weight: 700;

  @media screen and (max-width: 760px) {
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-rigth 24px;
  
  @media screen and (max-width: 625px) {
    display: none;
  }
`
