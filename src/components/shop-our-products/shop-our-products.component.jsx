import BOOKSCOLLECTIONS from '../../assets/BOOK-Collections.jpg';
import DVDBUNDLESCOLLECTIONS from '../../assets/DVD-Bundles-Collections.jpeg';
import DVDCOLLECTIONS from '../../assets/DVD-Collections.jpeg';
import GEARCOLLECTIONS from '../../assets/GEAR-Collections.jpg';
import GIFTCARDCOLLECTIONS from '../../assets/GIFT-Card-Collections.jpg';
import POSTERCOLLECTIONS from '../../assets/Posters-Collections.jpg';
import VODBUNDLESCOLLECTIONS from '../../assets/VOD-Bundles-Collections.jpg';
import VODCOLLECTIONS from '../../assets/VOD-Collections.jpeg';
import './shop-our-products.styles.scss';
const ShopOurProducts =() =>{
    return(
        <div className='card-container'>
            
            <div>
                <img src={DVDCOLLECTIONS} width={359.99} height={359.99} />  
            </div>

            <div>
                <img src={DVDBUNDLESCOLLECTIONS} width={359.99} height={359.99}/>
            </div>
    
            <div>
                <img src={VODCOLLECTIONS} width={359.99} height={359.99}/>  
            </div>
           
            <div>
                <img src={VODBUNDLESCOLLECTIONS} width={359.99} height={359.99}/>
            </div>

            <div>
                <img src={BOOKSCOLLECTIONS} width={359.99} height={359.99}/>    
            </div>

            <div>
                <img src={GEARCOLLECTIONS} width={359.99} height={359.99}/>
            </div>
    
            <div>
                <img src={POSTERCOLLECTIONS} width={359.99} height={359.99}/>
            </div>
    
            <div>
                <img src={GIFTCARDCOLLECTIONS} width={359.99} height={359.99}/>   
            </div>
            
        </div>
        
    );
}

export default ShopOurProducts;
