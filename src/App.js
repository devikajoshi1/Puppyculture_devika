import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";

import Logo from './assets/logo.png';
import About from './components/about/about.componet';
import DropdownShop from "./components/drop-down/drop-down-shop.component";
import GetStarted from './components/get-started/get-started.component';
import Shop from './components/shop/shop.component';
import UsefulInformation from './components/useful-information/useful-information.component';
import SearchIcon from "./components/search/search.component";
const App = () => {
  return (
    <>
      <Navigation/>
      
      <Routes>
        <Route path="logo" element={<Logo/>}/>
        <Route path="/get-started" element={<GetStarted/>}/>
        <Route path="/shop" element={<Shop/>} />
        <Route path="/useful-information" element={<UsefulInformation/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="dropdownshop" element={<DropdownShop/>}/>
        <Route path="search" element={<SearchIcon/>}/>
      </Routes>
    </>
  );
};

export default App;
