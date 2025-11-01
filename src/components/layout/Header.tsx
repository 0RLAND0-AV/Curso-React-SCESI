import { Navbar } from './Navbar';
// import './Header.css';

export const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header__container">
          {/* <div className="header__logo">
            <a href="/">
              <span className="header__logo-text">Home</span>
            </a>
          </div> */}
          <Navbar />
        </div>
      </header>
    </div>
  );
};