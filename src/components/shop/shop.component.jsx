import { Routes, Route } from 'react-router-dom';

import DropdownAbout from '../drop-down/drop-down-about.component';
import DropdownShop from '../drop-down/drop-down-shop.component';
import DropdownUsefulInformation from '../drop-down/drop-down-useful-inforamation.component';
import './shop.styles.scss';

const Shop = () => {
  return (
    <Routes>
      <Route  element={<DropdownShop />} />
      <Route  element={< DropdownUsefulInformation/>} />
      <Route  element={< DropdownAbout/>} />
    </Routes>
  );
};

export default Shop;