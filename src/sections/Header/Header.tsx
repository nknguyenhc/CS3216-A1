import GetNotified from '../../components/GetNotified/GetNotified';
import logo from '../../assets/logo.svg';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" />
        <span>
          Intern<span className="header-highlight">Twine</span>
        </span>
      </div>
      <GetNotified />
    </header>
  );
};

export default Header;
