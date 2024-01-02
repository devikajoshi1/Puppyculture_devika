import { Link } from 'react-router-dom';
import dropDownIcon from '../../assets/caret-down.svg';
import Logo from '../../assets/logo.png';
// import SearchIcon from '../../assets/search-icon.svg';
import DropdownShop from '../drop-down/drop-down-shop.component.jsx';
import './navigation.styles.scss';
import DropdownUsefulInformation from '../drop-down/drop-down-useful-inforamation.component.jsx';
import DropdownAbout from '../drop-down/drop-down-about.component.jsx';
import SearchIcon from '../search/search.component.jsx';
// import ShopOurProducts from '../shop-our-products/shop-our-products.component.jsx';
import ShopOurProductHome from '../shop-our-products-home/shop-our-products-home.component.jsx';
        
const Navigation  =() =>{


  return(
    <div>
    <nav>
        <Link  className='navbar-logo' to='/'>
          <img src={Logo} width={120} height={90.24}/>
        </Link>
    <div>
      <ul id='navbar' >
      <li>  
        <Link to='/get-started' className='getstart' > Get Started</Link>
      </li>
      <li>
        <DropdownShop/>
      </li>
      <li>
        <DropdownUsefulInformation/>
      </li>
      <li>
        <DropdownAbout/>
       
      </li>
    <SearchIcon/>
  
    </ul>
    </div>
    </nav>
    {/* <div>
      <ShopOurProducts/>
    </div> */}
    <div><ShopOurProductHome/></div>
    </div>

   
  )
}

export default Navigation;