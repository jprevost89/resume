import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Experience from '../Components/Experience/Experience';
import Footer from '../Components/Footer/Footer';
import '../App.css';

const ExperiencePage = () => {
    return (
        <div className="App">
            <Navbar/>
            <br/>
            <Experience/>
            <Footer/>
        </div>
    )
}

export default ExperiencePage;