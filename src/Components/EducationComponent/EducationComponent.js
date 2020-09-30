import React, {Component} from 'react';
import DegreeComponent from '../DegreeComponent/DegreeComponent';
import CertificationComponent from '../CertificationComponent/CertificationComponent';
import './EducationComponent.css'

class EducationComponent extends Component {
    state = {
        default: true
    }

    toggleHandler = () => {
        if(this.state.default) {
            this.setState({default: false})
        } else {
            this.setState({default: true})
        }
    }

    render() {
        let defaultState = this.state.default;
        let educationView;
        if(defaultState) {
            educationView = (
                <div/>
            )
        } else {
            if(this.props.component == "Degree") {
                educationView = <DegreeComponent/>
            } else {
                educationView = <CertificationComponent/>
            }
        }
        return(
            <div className="education">
                <button onClick={this.toggleHandler}>{this.props.name}</button>
                {educationView}
            </div>
        )
    }
}

export default EducationComponent;