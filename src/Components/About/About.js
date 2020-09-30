import React, { Component } from 'react';
import './About.css';

class About extends Component {
    state = {
        name: "",
        setName: false
    }

    nameChangeHandler = (event) => {
        this.setState({name: event.target.value})
    }

    nameSubmitHandler = () => {
        this.setState({setName: true})
    }

    render() {
        let nameIsSet = this.state.setName;
        let formInput;
        if(!nameIsSet) {
            formInput= (
                <form className="column">
                    <h3>Let's introduce ourselves.</h3>
                    <label>
                        Name:
                        <input type="text" name="name" maxLength="11" onChange={(e) => this.nameChangeHandler(e)} />
                    </label>
                    <button onClick={this.nameSubmitHandler}>Submit</button>
                </form>
            )
        } else {
            formInput = (
                <div className="column">
                    <br/><br/>
                    <h1>Hello {this.state.name}</h1>
                    <h3>Welcome to the resume of Jon Prevost!</h3>
                    <p><a href="/experience">Check out my experience?</a></p>
                    <p><a href="/education">Check out my book learnin'?</a></p>
                    <p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Bail and go browse YouTube?</a></p>
                </div>
            )
        }

        return (
            <div>{formInput}</div>
        )
    }
};

export default About;