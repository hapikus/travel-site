/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import Footer from "./Footer"
import Header from "./header"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {

  return (
    <>
    <GlobalStyle></GlobalStyle>
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
