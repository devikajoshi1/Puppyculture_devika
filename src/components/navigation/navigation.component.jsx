import { Link } from 'react-router-dom';
import dropDownIcon from '../../assets/caret-down.svg';
import Logo from '../../assets/logo.png';
import SearchIcon from '../../assets/search-icon.svg';
import DropdownShop from '../drop-down/drop-down-shop.component.jsx';
import './navigation.styles.scss';
import DropdownUsefulInformation from '../drop-down/drop-down-useful-inforamation.component.jsx';
import DropdownAbout from '../drop-down/drop-down-about.component.jsx';


        
const Navigation  =() =>{


  return(
    <div>
    <nav>
        <Link to='/' className='navbar-logo'>
          <img src={Logo} width={120} height={90.24}/>
        </Link>
    <div>
      <ul id='navbar' >
      <li>  
        <Link to='/get-started' className='getstart' > Get Started</Link>
      </li>
      <li>
        <DropdownShop/>
          
        {/* <Link to='/drop-down-shop' className='shop' ><DropdownShop/> <img src={dropDownIcon}width={40} height={20.89}/></Link> */}
       
      </li>
      <li>
        <DropdownUsefulInformation/>
        {/* <Link to='/useful-information' className='usefulinformation' >UseFul Information 
          <img src={dropDownIcon}width={40} height={20.89}/>
          <Dropdown options={UsefulInformation} />
        </Link> */}
        
      </li>
      <li>

        <DropdownAbout/>
        {/* <Link to='/about.component.jsx' className='about' >About
        <img src={dropDownIcon}width={40} height={20.89}/>
        <Dropdown options={Shop} /> 
         </Link>
        */}
      </li>
    
        <Link className='search' >
          <img src={SearchIcon} width={22.4} height={22.4}/>
         
        </Link>
  
    </ul>
    </div>
    </nav>
    {/* <div>
      <ShopOurProducts/>
    </div> */}
    {/* <div><ShopOurProductHome/></div> */}
    </div>

   
  )
}

export default Navigation;