import React from 'react';

export function Header() {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Emaily</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a>Login with Google</a></li>
                </ul>
            </div>
        </nav>
    );
}