import dtchLogo from '@/assets/dtch_logo_.png';
import { SignInButton } from '@/components';
import '@/styles/authLayout/_header.scss';

const Header = () => {
  return (
    <header className="auth-header">
      <div className="header-container">
        <div className="logo-container">
          <img
            src={dtchLogo}
            alt="dtch-logo"
            style={{
              width: '22.5px',
              height: '24px',
            }}
          />
          <h1
            style={{
              fontSize: '22px',
              fontWeight: '700',
              color: 'black',
            }}
          >
            DTCH
          </h1>
        </div>

        <SignInButton
          style={{
            backgroundColor: '#299E94',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            height: '37px',
            width: '107px',
            fontSize: '16px',
          }}
          title="Sign In"
          onClick={() => {}}
        />
      </div>
    </header>
  );
};

export default Header;
