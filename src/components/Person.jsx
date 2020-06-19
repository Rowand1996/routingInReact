import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Person = (props) => {
    let moviePeople = props.items.map((person) => {

        return (
            <div key={person.id} className="card bg-info">
                <div className="card-header">
                    Person Name: <Link to={`/people/${person.id}`}>{person.name}</Link>
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>Gender: {person.gender}</p>
                        <footer className="blockquote-footer text-dark">Person Age: {person.age}<cite title="Source Title"></cite></footer>
                    </blockquote>
                </div>
            </div>
        );
    });

    return (
        <div>
            {moviePeople}
        </div>
    );
}

export default Person;