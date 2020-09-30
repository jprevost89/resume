import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Education from '../Components/EducationComponent/EducationComponent';
import '../App.css'

const EducationPage = () => {
    return(
        <div className="App">
            <Navbar/>
            <br/>
            <Education name="DEGREE" component="Degree"/>
            <hr/>
            <Education name="CERTIFICATION" component="Certification"/>
            <hr/>
            <Footer/>
        </div>
    )
}

export default EducationPage;