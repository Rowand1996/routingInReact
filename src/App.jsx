import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Page1 from './components/Page1.jsx';
import Films from './components/Films.jsx';
import People from './components/People.jsx'
import promise from 'es6-promise';
import FilmId from './components/FilmId.jsx';
import PersonId from './components/PersonId.jsx';



promise.polyfill();

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <nav class="navbar navbar-info bg-dark">
                        <a class="navbar-brand" href="#">
                            Studio Ghibli
                        </a>
                        <button type="button" class="btn btn-sm btn-outline-info btn-link"><Link to="/">Go Home</Link></button>
                        <button type="button" class="btn btn-sm btn-outline-info btn-link"><Link to="/films">Go to Films</Link></button>
                        <button type="button" class="btn btn-sm btn-outline-info btn-link"><Link to="/people">Go to People</Link></button>
                    </nav>
                        
                        <Switch>
                            <Route exact path="/" component={Page1} />
                            <Route exact path="/films" component={Films} />
                            <Route exact path="/people" component={People} />
                            <Route path="/films/:id" component={FilmId} />
                            <Route path="/people/:id" component={PersonId} />
                        </Switch>
                </Fragment>
            </Router>

        );
    }
}

export default App;