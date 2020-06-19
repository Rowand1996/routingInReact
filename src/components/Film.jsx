import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Film = (props) => {
    let filmItems = props.items.map((film) => {
        return (

            <div key={film.id} className="card bg-info ">
                <div className="card-header">
                        <Link to={`/films/${film.id}`}>Movie Title: {film.title}</Link>
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{film.description}</p>
                        <footer className="blockquote-footer text-dark">Movie Director: {film.director}<cite title="Source Title"></cite></footer>
                    </blockquote>
                </div>
            </div>
        );
    });

    return (
        <div>
            {filmItems}
        </div>
    );
}

export default Film;