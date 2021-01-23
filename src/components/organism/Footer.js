import React from 'react';
import { Link } from 'gatsby';
import {
  FaCopyright,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { graphql, useStaticQuery } from 'gatsby';
import '../../assets/styles/index.scss';

function Footer() {
  const data = useStaticQuery(query);
  return (
    <div>
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <h1 style={{ marginBottom: '3rem', color: 'white' }}>
            {data.strapiGlobal.siteName}
          </h1>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <Link className="navbar-item" to="/">
                  <h1>Home</h1>
                </Link>
                <Link className="navbar-item" to="/products">
                  <h1>Products</h1>
                </Link>
                <Link className="navbar-item" to="/articles">
                  <h1>Must Read</h1>
                </Link>

                <Link className="navbar-item" to="/popularpages">
                  <h1>Popular Pages</h1>
                </Link>
              </div>
              <div className="column is-4">
                <section>
                  <Link className="navbar-item" to="/trending">
                    <h1>Trending</h1>
                  </Link>
                  <Link className="navbar-item" to="/sociallyacclaimed">
                    <h1>SociallyAcclaimed</h1>
                  </Link>
                </section>
              </div>
              <div className="column is-4 social">
                <div className="socialIcons">
                  <a title="facebook" href="https://facebook.com">
                    <FaFacebook className="facebook-icon" size="2em" />
                  </a>
                  <a title="twitter" href="https://twitter.com">
                    <FaTwitter className="twitter-icon" size="2em" />
                  </a>
                  <a title="instagram" href="https://instagram.com">
                    <FaInstagram className="instagram-icon" size="2em" />
                  </a>

                  <a title="linkedin" href="https://linkedin.com">
                    <FaLinkedin className="linkedin-icon" size="2em" />
                  </a>
                </div>
              </div>
            </div>
            <div className="container is-fluid has-text-light">
              Goods Umpire&nbsp;
              <FaCopyright /> &nbsp;2021
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

const query = graphql`
  query {
    strapiGlobal {
      siteName
    }
  }
`;
