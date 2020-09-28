import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Contact from '../Components/Contact/Contact';
import '../App.css';


const ContactPage = () => {
    return(
        <div className="App">
            <Navbar/>
            
            <Contact/>
            <Footer/>
        </div>
    )
}

export default ContactPage;