import React from 'react';
import './Jobs.css'
import data from '../data/data.json';

const Jobs = () => {
    return (
        <div>
            {data.map((data, id) => {
                return (
                    <div className="Jobs" id={id}>
                        <h3>{data.title}</h3>
                        <h4>{data.company}</h4>
                        <ul>
                            {data.responsibilities.map((resp) => {
                                return(
                                    <li>{resp}</li>     
                                )
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    )
};

export default Jobs;