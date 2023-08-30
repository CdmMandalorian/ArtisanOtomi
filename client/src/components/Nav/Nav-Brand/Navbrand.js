import './NavBrand.css'
import { Link } from 'react-router-dom';
import logo from '../../../asset/navbarlogo/OtomiBirdLineArtColorBg.png'

const NavBrand = () => {
    return ( 
        <div href="#home" className='navbrand__container'>
           <h1 className='navbrand'>
               <Link to="/">
               <img class='navLogo'
                  src={logo}
                  alt="minilogo"
                  height="33px"
                />
                ARTISAN OTOMI
                </Link>
            </h1>
        </div>
     );
}
 
export default NavBrand;