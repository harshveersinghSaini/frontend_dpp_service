import logo from '/Image/logo.png';
import '../../../styles/authLayout/_header.scss';
import bellIcon from '../../../assets/icons/bell.svg'
import settingsIcon from '../../../assets/icons/settings.svg';
import arrowIcon from '../../../assets/icons/arrow.svg';

const Header = () => {
  return (
    <header className="auth-header">
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className="profile-section">
          <img src={bellIcon} alt="Notifications" className="header-icon" />
          <img src={settingsIcon} alt="Settings" className="header-icon" />
          <span className="username">Anima Aggrawal</span>
          <span className="dropdown-arrow"><img src={arrowIcon} alt="dropdown" /></span>
        </div>
      </div>
    </header>
  );
};


export default Header;
