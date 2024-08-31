import './Header.scss';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="/cs3216-a1/logo.svg" alt="Logo" />
        <span>
          Intern<span className="header-highlight">Twine</span>
        </span>
      </div>
      <div className="header-notification">
        <input type="email" placeholder="hello@example.com" />
        <button>Get notified</button>
      </div>
    </header>
  );
};

export default Header;
