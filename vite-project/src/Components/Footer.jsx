import "../Styles/Footer.css"
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Devadurgam Lakshmi Narasimha. All rights reserved.</p>
      <div className="social-links">
        <a
          href="https://github.com/narasimhaDln"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/d-lakshmi-narasimha-485802241"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
        <a href="mailto:narasimha34327@gmail.com">
          <Mail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
