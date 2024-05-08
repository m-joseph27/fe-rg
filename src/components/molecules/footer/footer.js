import './footer.scss';
import Ig from '../../../assets/ig.svg';
import Fb from '../../../assets/fb.svg';
import Tw from '../../../assets/twt.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media">
        <a href="https://instagram.com/" target="_blank">
          <img src={Ig} alt="ig" />
        </a>
        <a href="https://id-id.facebook.com/" target="_blank">
          <img src={Fb} alt="fb" />
        </a>
        <a href="https://twitter.com/" target="_blank">
          <img src={Tw} alt="tw" />
        </a>
      </div>
      <div className="copyright">
        <span>Terms & Condition</span>
        <span>|</span>
        <span>Copyright © 2018. All rights reserved. PT Radya Gita Bahagia</span>
      </div>
    </div>
  );
}

export default Footer;