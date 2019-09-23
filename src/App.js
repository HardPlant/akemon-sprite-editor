import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import LogoHeader from './components/LogoHeader';
import SideBar from './components/SideBar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrapper">
      <div className="main-header">
        {/*<!--Logo Header -->*/}
        <LogoHeader></LogoHeader>
        {/*<!--End Logo Header -->*/}

        {/*<!--Navbar Header -->*/}
        <NavBar></NavBar>
        {/*<!--End Navbar -->*/}
      </div>
  
      {/*<!--Sidebar -->*/}
        <SideBar></SideBar>
      {/*<!--End Sidebar -->*/}
  
      <div className="main-panel">
          <Main></Main>
          <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
