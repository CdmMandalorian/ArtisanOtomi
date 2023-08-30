import './Footer.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from '@mui/material/Link'

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return ( 
        <footer>
            <div className="footer__container">
                <div className="footer__items__container">
                    <div className="footer__help__container">
                        <div className="footer__help__header">
                            <h1>Help</h1>
                        </div>
                        <ul className="fotter__help__links">
                            <li className="help__link">
                                <a href="/"> Shipping</a>
                            </li>
                            <li className="help__link">
                                <a href="/">Refund</a>
                            </li>
                            <li className="help__link">
                                <a href="/">FAQ</a>
                            </li>
                            <li className="help__link">
                                <a href="/">Accessiblity</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__contact__container">
                        <div className="footer__contact__header">
                            <h1>Contact Us</h1>
                        </div>
                        <ul className="footer__contacts">
                            <li className="footer__contact">
                                <LocalPhoneIcon /> <span>+1 323 909 7609</span>
                            </li>
                            <li className="footer__contact">
                                <EmailIcon /> <span>AEGTechcodes@gmail.com</span>
                            </li>
                            <li className="footer__contact">
                                <LocationOnIcon /> <span>Los Angeles California, USA</span>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__social__link__container">
                        <div className="footer__social__link__header">
                            <h1>Stay Connected</h1>
                        </div>
                    <ul className="footer__social__links"> 
                            <li className="social__link">
                                <Link href="https://www.github.com/CdmMandalorian" color="inherit">
                                    <GitHubIcon />
                                </Link>
                            </li>
                            <li className="social__link">
                                <Link  href="https://www.twitter.com/MandolorCodes" color="inherit">
                                    <TwitterIcon />
                                </Link>
                            </li>
                            <li className="social__link">
                                <Link href="https://www.instagram.com/aegcodes" color="inherit">
                                    <InstagramIcon />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="fotter__copyright__container">
                    <ul className='nav'>
                        <li className="footer__copyright">Copyright © {year} AEG Codes |</li>
                        <li className="footer__terms__condition"> | Terms & Condition |</li>
                        <li className="footer__privacy__policy">| Privacy Policy</li>
                    </ul>
                     </div>
            </div>
        </footer>
     );
}
 
export default Footer;