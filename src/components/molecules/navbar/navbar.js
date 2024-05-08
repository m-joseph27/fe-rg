import './navbar.scss';
import Logo from '../../../assets/company-logo.svg';

const NavigationBar = () => {
  return (
    <nav className="nav">
      <div className="navbar-logo">
        <img src={Logo} className="App-logo" alt="logo" />
      </div>
    </nav>
  );
}

export default NavigationBar;