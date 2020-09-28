import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import About from '../Components/About/About';
import '../App.css';


const MainPage = () => {
    return(
        <div className="App">
            <Navbar/>
            <About/>
            <Footer/>
        </div>
    )
}

export default MainPage;