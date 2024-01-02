import HOMEPRODUCTBANNER from '../../assets/Home-Product-Banner.png';
import './shop-our-products-home.styles.scss';
import Shop from '../shop/shop.component';
const ShopOurProductHome =() =>{
    
    return(
      
        
        <div className='product-home'>
                <span className='home'>Shop Our Products!</span>
                <div className='gf_icon-wrap'>

                </div>
                <div>
                <a href='https://shoppuppyculture.com/collections/all'><img src={HOMEPRODUCTBANNER} width={335.99} height={216.99}/></a>   
                </div> 
                <div>
                    <button  className="shopproduct" > Shop </button>

                </div>
        </div>
    );
}

export default ShopOurProductHome