import React, { Component } from 'react';
import Film from './Film.jsx';
import Logo from '../assets/logo.png';

class FilmId extends Component {

    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }

    componentDidMount() {      
        let movieId = this.props.match.params.id;
        fetch("https://ghibliapi.herokuapp.com/films/" + movieId)
        .then((response) => {
            return response.json();
        })
        .then(obj => this.setState({ films: [obj] }));
    }

    render() {
        return (
            <div>
                <div className="imgDiv">
                    <img src={Logo} className="" alt="" />
                </div>
                <Film items={this.state.films} />
            </div>
            
        );
    }
}

export default FilmId;