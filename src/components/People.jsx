import React, { Component } from 'react';
import Person from './Person.jsx';
import Logo from '../assets/logo.png';

class People extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
    }

    loadPeople = () => {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then((response) => {
                return response.json();
            })
            .then(obj => this.setState(({ people: obj})))
    }

    removePeople = () => {
        this.setState(({ people: []}))
    }

    render() {
        return (
             <React.Fragment>

                <div className="imgDiv">
                    <img src={Logo} className="" alt="" />
                </div>

                <div className="buttonDiv">
                    <button onClick={this.loadPeople} type="button" className="btn btn-info text-dark">Load People</button>
                    <button onClick={this.removePeople} type="button" className="btn btn-info text-dark">Remove People</button>
                </div>

                <Person items={this.state.people} />
            </React.Fragment>
            
        );
    }
}

export default People;