import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Header from './components/Header';
import { Landing } from './components/Landing';

function App(props) {

    useEffect(() => {
        props.fetchUser();
    });

    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/" component={Landing}/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default connect(null, actions)(App);
