import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"

import Hero from "../components/hero"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Trips heading="Our Favorite Destinations" id="trips"/>
    <Testimonials />
    <Stats />
    <Email id="contact"/>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
