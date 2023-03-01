import React from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Footer = () => {
  return (
    <FooterContainter>
      <FooterLinkWrapper>
        <FooterDesc>
          <h1>Explore</h1>
          <p>We strive to create best experiences for our customers</p>
        </FooterDesc>
        <FooterLinkItem>
          <FooterLinkTitle>Contact us</FooterLinkTitle>
          <FooterLink to="#contact">Contact</FooterLink>
          <FooterLink to="/">Support</FooterLink>
          <FooterLink to="/">Destinations</FooterLink>
          <FooterLink to="/">Sponsorships</FooterLink>
        </FooterLinkItem>
      </FooterLinkWrapper>
      <FooterLinkWrapper>
        <FooterLinkItem>
          <FooterLinkTitle>Videos</FooterLinkTitle>
          <FooterLink to="/">Submit Video</FooterLink>
          <FooterLink to="/">Ambassadors</FooterLink>
          <FooterLink to="/">Agency</FooterLink>
          <FooterLink to="/">Influencer</FooterLink>
        </FooterLinkItem>
        <FooterLinkItem>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterLink to="/">Instagram</FooterLink>
          <FooterLink to="/">Facebook</FooterLink>
          <FooterLink to="/">Youtube</FooterLink>
          <FooterLink to="/">Twitter</FooterLink>
        </FooterLinkItem>
      </FooterLinkWrapper>
    </FooterContainter>
  )
}

export default Footer

const FooterContainter = styled.div`
  padding: 5rem max(calc((100vw - 1300px) / 2), 10px);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #eee;
`
const FooterDesc = styled.div`
  height: 165px;

  padding: 0 2rem;

  h1 {
    margin-bottom: 2rem;
    color: #f26a2e;
  }

  p {
    max-width: 210px;
  }

  @media screen and (max-width: 414px) {
    h1 {
      margin-bottom: 2rem;
    }
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`
const FooterLinkItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  height: 165px;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`
const FooterLink = styled(AnchorLink)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`
