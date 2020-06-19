import React, { Component } from 'react';
import Film from './Film.jsx';
import Logo from '../assets/logo.png';

class Films extends Component {

    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }

    loadFilms = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then((response) => {
                return response.json();
            })
            .then(obj => this.setState({ films: obj }));
    }

    removeFilms = () => {
        this.setState({ films: []})
    }

    render() {
        return (
            <div>
                <div className="imgDiv">
                    <img src={Logo} className="" alt="" />
                </div>
                <div className="buttonDiv">
                    <button onClick={this.loadFilms} type="button" className="btn btn-info text-dark">Load Films</button>
                    <button onClick={this.removeFilms} type="button" className="btn btn-info text-dark">Remove Films</button>
                </div>
                <Film items={this.state.films} />
            </div>
            
        );
    }
}

export default Films;