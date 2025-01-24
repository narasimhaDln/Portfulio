import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import '../Styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        Built with <Heart className="heart-icon" /> by Devadurgam Lakshmi Narasimha
        <br />
        &copy; {currentYear} All rights reserved.
      </p>
      <div className="social-links">
        <a
          href="https://github.com/narasimhaDln"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/devadurgam-lakshmi-narasimha-485802241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin />
        </a>
        <a 
          href="mailto:narasimha34327@gmail.com"
          aria-label="Email"
        >
          <Mail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;