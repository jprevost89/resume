import React from 'react';
import data from '../data/degree.json';
import './DegreeComponent.css';

const DegreeComponent = () => {
    return (
        <div>
            {data.map((data, id) => {
                return (
                    <div className="degree" id={id}>
                        <h2>{data.School}</h2>
                        <h3>{data.Degree}</h3>
                        <h3>{data.Years}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default DegreeComponent;