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
                    <label>
                        Name:
                        <input type="text" name="name" onChange={(e) => this.nameChangeHandler(e)} />
                    </label>
                    <button onClick={this.nameSubmitHandler}>Submit</button>
                </form>
            )
        } else {
            formInput = (
                <div>
                    <br/><br/>
                    <h1>Hello {this.state.name}</h1>
                </div>
            )
        }

        return (
            <div>{formInput}</div>
        )
    }
};

export default About;