import { VideoCamera } from '@phosphor-icons/react'
import HackatonLogo from '../../../public/assets/svg/HackatonLogo';
import '../../styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-item">
          <div className="footer-title">
            <VideoCamera weight="bold" className="icon-big" />
            <h1>Анализатор отходов</h1>
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
