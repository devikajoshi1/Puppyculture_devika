import { Route, Routes } from "react-router-dom";


import Logo from './assets/logo.png';
import About from './components/about/about.componet';
import DropdownShop from "./components/drop-down/drop-down-shop.component";
import GetStarted from './components/get-started/get-started.component';
import Shop from './components/shop/shop.component';
import UsefulInformation from './components/useful-information/useful-information.component';
import SearchIcon from "./components/search/search.component";
// import BlueNavBar from "./components/navbar/bluenavbar.component";
//import Firstcomponent from "./components/firstcomponent/firstcomponent.component";
//import ShopOurProducts from "./components/shop-our-products/shop-our-products.component";
import Component from "./components/component3/component1";
//import Login from "./components/login/Login.component";
// import Createaccount from "./components/Createaccount/Createaccount";
import Landingpage from "./components/landingpage/landingpage.component";
//import Component4 from "./components/component4/component4";

const App = () => {
  return (
    <>
      
      
      <Routes>
        <Route path="/" element={<Landingpage />} />
        {/* <Route path="/Bluenavbar" element={<BlueNavBar />} /> */}
        {/* <Route path="/Whypuppyculture?" element={<Firstcomponent />} />
        <Route path="/ShopOurProducts!" element={<ShopOurProducts />} />
        <Route path="/WhatShouldIBuy?" element={<Component />} /> */}

        {/* <Route path="/Login" element={<Login />} /> */}
        {/* <Route path="/Createaccount" element={< Createaccount/>} /> */}
        {/* <Route path="/Madcapuniversity" element={< Madcapuniversity/>} /> */}
        <Route path="logo" element={<Logo/>}/>
        <Route path="/get-started" element={<GetStarted/>}/>
        <Route path="/shop" element={<Shop/>} />
        <Route path="/useful-information" element={<UsefulInformation/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/drop-down-shop" element={<DropdownShop/>}/>
        <Route path="search" element={<SearchIcon/>}/>
        <Route path="/c3" element={<Component/>}/>
        {/* <Route path="/c4" element={<Component4/>}/> */}
        
      </Routes>
    </>
  );
};

export default App;
