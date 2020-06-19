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

    componentDidMount() {      
        let personId = this.props.match.params.id;
        fetch("https://ghibliapi.herokuapp.com/people/" + personId)
        .then((response) => {
            return response.json();
        })
        .then(obj => this.setState({ people: [obj] }));
    }

    render() {
        return (
             <React.Fragment>

                <div className="imgDiv">
                    <img src={Logo} className="" alt="" />
                </div>
                <Person items={this.state.people} />
            </React.Fragment>
            
        );
    }
}

export default People;