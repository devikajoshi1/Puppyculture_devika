import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Shop from './components/shop/shop.component';
import Footer from "./layout/footer/footer";
import Navigation from "./components/navigation/navigation.component";
import BlueNavBar from './components/navbar/bluenavbar.component';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BlueNavBar /> 
      <Navigation/>
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
