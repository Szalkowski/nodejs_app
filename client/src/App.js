import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Landing } from './components/Landing';
import { Header } from './components/Header';

function App() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/" component={Landing}/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
