import GetNotified from '../../components/GetNotified/GetNotified';
import heroImage from '../../assets/images/hero-image.svg';
import nusLogo from '../../assets/logos/nus.svg';
import smuLogo from '../../assets/logos/smu.svg';
import ntuLogo from '../../assets/logos/ntu.svg';
import longLogo from '../../assets/logos/long-logo.svg';

const Introductions = (): JSX.Element => {
  return (
    <div className="introductions-container">
      <div className="introductions-upper">
        <div className="introductions-header">
          <span className="introductions-coming-soon">
            Coming soon in May 2030
          </span>
          <h1 className="introductions-title">
            Your internship{' '}
            <span className="introductions-highlight">
              companion
              <img src={longLogo} alt="" />
            </span>
            .
          </h1>
          <p className="introductions-description">
            InternTwine helps you to find the perfect internship to kickstart
            your career. For interns, by interns.
          </p>
          <GetNotified />
        </div>
        <div className="introductions-image">
          <img src={heroImage} alt="Internship Listings" />
        </div>
      </div>
      <div className="introductions-trusted">
        <p>Trusted by students across the world.</p>
        <div className="introductions-logos">
          <img src={nusLogo} alt="NUS" />
          <img src={smuLogo} alt="SMU" />
          <img src={ntuLogo} alt="NTU" />
        </div>
      </div>
    </div>
  );
};

export default Introductions;
