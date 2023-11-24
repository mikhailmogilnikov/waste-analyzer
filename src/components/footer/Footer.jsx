import HackatonLogo from '../../../public/assets/svg/HackatonLogo';
import { RailwaysLogo } from '../../../public/assets/svg/Railways';
import '../../styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-item">
          <div className="footer-title">
            <RailwaysLogo />
            <h1>Анализатор текста</h1>
          </div>
          <div className="hackaton-footer">
            <HackatonLogo />
          </div>
        </div>

        <div className="footer-item"></div>
      </div>
    </footer>
  );
};

export default Footer;
