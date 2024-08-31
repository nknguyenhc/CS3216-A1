import facebookIcon from '../../assets/logos/facebook.svg';
import linkedinIcon from '../../assets/logos/linkedin.svg';
import githubIcon from '../../assets/logos/github.svg';
import whiteLogo from '../../assets/logos/white-logo.svg';

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>SITEMAP</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Get started</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>RESOURCES</h4>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>FOLLOW US</h4>
          <ul className="social-icons">
            <li>
              <a href="#">
                <img src={facebookIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={linkedinIcon} alt="" />
              </a>
            </li>
            <li>
              <a href="https://github.com/nknguyenhc/CS3216-A1">
                <img src={githubIcon} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-logo">
        <img src={whiteLogo} alt="InternTwine Logo" />
        <span>InternTwine</span>
      </div>
    </footer>
  );
};

export default Footer;
