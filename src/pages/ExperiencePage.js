import React, { Component } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Experience from '../Components/Experience/Experience';
import Footer from '../Components/Footer/Footer';
import '../App.css';

class ExperiencePage extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <br/>
                <Experience/>
                <Footer/>
            </div>
        )
    }
}

export default ExperiencePage;