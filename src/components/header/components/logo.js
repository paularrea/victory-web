import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../../styles/header.module.scss"
import logo from "../../../images/logo.png"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }
  return <img src={logo} className={styles.logo} alt="brand logo" />
}

export default Logo
