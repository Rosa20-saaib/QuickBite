import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaLeaf } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h3 className="footer-logo">LebaneseFood</h3>

            <p>
              Lebanese mezze, manakish, and grill favorites made for sharing
              with the people you love.
            </p>

            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="col-md-4 ms-auto text-md-end">
            <h5>Contact Us</h5>

            <p>
              <FaEnvelope className="me-2" aria-hidden="true" />
              <Link to="/contact" className="footer-contact">
                Visit our Contact page to reach us.
              </Link>
            </p>
          </div>
        </div>

        <hr />

        <div className="text-center copyright">
          <p>© 2026 QuickBite. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
