import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import Contact from "../components/contact";
import SEO from "../components/seo";

import "../style/normalize.css";
import "../style/all.scss";

const ContactPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="Contact" keywords={[`contact`, `mega ultra studios`]} />

      <div className="kg-image-card kg-width-wide">
        <Img
          fluid={data.background5.childImageSharp.fluid}
          className="kg-image"
        />
      </div>

      <article className="post-content page-template">
        <div className="post-content-body">
          <header>
            <h1>Contact</h1>
          </header>
          <Contact />
        </div>
      </article>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    background5: file(relativePath: { eq: "background-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ContactPage location={props.location} data={data} {...props} />
    )}
  />
);
