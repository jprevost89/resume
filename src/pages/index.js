import React, { Component } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import About from '../Components/About/About';
import '../App.css';


class MainPage extends Component {
    render() {
        return(
            <div className="App">
                <Navbar/>
                <br/>
                <About/>
                <Footer/>
            </div>
        )
    }
}

export default MainPage;