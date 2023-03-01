import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Button } from "./Button"
import { MdOutlineLocationOn } from "react-icons/md"

const Trips = ({ heading, id}) => {
  const data = useStaticQuery(graphql`
    query TripsQuery {
      allTripsJson {
        edges {
          node {
            alt
            button
            name
            imagesLink {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

  function getTrips(data) {
    const tripsArray = []

    data.allTripsJson.edges.forEach((item, index) => {
      tripsArray.push(
        <ProductCard key={index}>
          <ProductImg
            image={item.node.imagesLink.childImageSharp.gatsbyImageData}
            alt={item.node.alt}
          />
          <ProductInfo>
            <TextWrap>
              <MdOutlineLocationOn />
              <ProductTitle>{item.node.name}</ProductTitle>
            </TextWrap>
            <Button
              primary="true"
              round="true"
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
              `}
            >
              {item.node.button}
            </Button>
          </ProductInfo>
        </ProductCard>
      )
    })

    return tripsArray
  }

  return (
    <ProductContainer id={id}>
      <ProductHeading>{heading}</ProductHeading>
      <ProductWrapper>{getTrips(data)}</ProductWrapper>
    </ProductContainer>
  )
}

export default Trips

// min-height: 100vh;
const ProductContainer = styled.div`
  padding: 5rem max(calc((100vw - 1500px) / 2), 10px);
  background: #fff;
  coloc #fff;
`
const ProductHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  row-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.div`
  line-eight: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s esse;
`

const ProductImg = styled(GatsbyImage)`
  height: 100%;
  max-width: 100%;
  position: absolute;
  border-radius: 10px;
  filter: brightness(75%);
  trasition: 0.4s cubic-bezier(0.075, 0.02, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;

  color: #fff;
`

const ProductTitle = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  margin-left: 0.5rem;
`
