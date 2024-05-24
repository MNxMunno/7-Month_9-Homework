import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-cards">
          <div className="card">
            <p>Finstreet 118 2561 Fintown</p>
            <p>Hello@finsweet.com 020 7993 2905</p>
          </div>
          <div className="card link">
            <Link href="https://www.facebook.com/?locale=ru_RU" target="_blank">
              Facebook
            </Link>
            <Link href="https://twitter.com/?lang=ru" target="_blank">
              Twitter
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              Instagram
            </Link>
            <Link href="https://ru.linkedin.com/" target="_blank">
              Linkedin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
