import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { FaRegLightbulb } from "react-icons/fa"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query TestimonialsQuery {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(jpeg)|(png)/gm" }
          name: { regex: "/(testimonial)/gm" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  return (
    <TestimonialsContainter>
      <TopLine>Testimonials</TopLine>
      <Description>What People are Saying</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <FaRegLightbulb
              css={`
                color: #f1b19b;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Anna Parker</h3>
            <p>
              Ocean Holidays in Bali exceeded all my expectations! From the
              moment I arrived, I was impressed with the warm hospitality of the
              staff and the stunning ocean views. The accommodations were
              luxurious and comfortable, and the food was exceptional. The
              activities, such as surfing and yoga, were top-notch and tailored
              to my skill level. I would highly recommend Ocean Holidays to
              anyone looking for a rejuvenating and unforgettable vacation in
              Bali.
            </p>
          </Testimonial>
          <Testimonial>
            <IoMdCheckmarkCircleOutline
              css={`
                color: #f1b19b;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Lisa Griffin</h3>
            <p>
              Traveling to the Nord Thailand was a thrilling and
              eye-opening experience for me. My trip was made even more special
              by the wonderful people I met along the way, including my guide,
              Kanya. She showed me hidden gems that I would have never
              discovered on my own, and her knowledge of the local culture and
              history was invaluable. This trip has truly broadened my horizons
              and enriched my life. Thank you, Kanya, for an unforgettable
              adventure!
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
          {data.allFile.edges.map((item, index) => (
            <TestimonialImages
              image={item.node.childImageSharp.gatsbyImageData}
              key={index}
            />
          ))}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainter>
  )
}

export default Testimonials

const TestimonialsContainter = styled.div`
  width: 100%;
  background: #eee;
  color #000;
  padding: 5rem max(calc((100vw - 1500px) / 2), 10px);
  height: 100%;
`
const TopLine = styled.p`
  color: #077bf1;
  font-size: clamp(1rem, 3.5vw, 2.2rem);
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`
const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: min(4rem, 30px);
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`
const ColumnOne = styled.div`
  display: grid;
  grid-template-row: 1fr 1fr;
`
const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }

  p {
    color: #3b3b3b;
    line-height: 1.2;
    letter-spacing: 0.4px; 
  }
`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const TestimonialImages = styled(GatsbyImage)`
  border-radius: 10px;
  height: 100%;
`
