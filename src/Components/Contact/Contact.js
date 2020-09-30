import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="Contact">
            <h2>Contact Information:</h2>
            <div>
                <h3>Phone: 719-242-1587</h3>
            </div>
            <div>
                <h3><a href={"mailto:" + "jonprevost86@gmail.com"}>Email: jonprevost86@gmail.com</a></h3>
            </div>
            <div>
                <h3><a href='https://www.linkedin.com/in/jonathan-prevost-33b934154/' target="_blank">LinkedIn</a></h3>
            </div>
            <div>
                <h3><a href='https://github.com/jprevost89' target="_blank">GitHub</a></h3>
            </div>
        </div>
    )
}

export default Contact;