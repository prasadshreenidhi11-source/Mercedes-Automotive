import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-logo">MERCEDES-BENZ</div>

        <div className="footer-links">
          <a href="#collection">Collection</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Mercedes-Benz</span>
        <span>THE BEST OR NOTHING.</span>
      </div>
    </footer>
  );
}

export default Footer;