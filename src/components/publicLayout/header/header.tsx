import logo from '/Image/logo.png';
import "@/styles/mainLayout/_header.scss";

const Header = () => {
  return (
    <header className="public-header">
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
