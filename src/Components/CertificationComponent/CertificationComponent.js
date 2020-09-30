import React from 'react';
import data from '../data/certification.json';
import './CertificationComponent.css';

const CertificationComponent = () => {
    return (
        <div style={{backgroundColor: "#697183"}}>
            {data.map((data, id) => {
                return (
                    <div className="certification" id={id}>
                        <h2>{data.course}</h2>
                        <h3>{data.provider}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default CertificationComponent;