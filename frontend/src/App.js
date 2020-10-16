import React from 'react';
import Header from './components/Header';

function App(){
    return(
        <>
            <Header title = "Homepage"/>
                <ul>
                    <li>Homepage</li>
                    <li>Homepage</li>
                </ul>
            <Header title = "Projects"/>
                <ul>
                    <li>Homepage</li>
                    <li>Projects</li>
                    <li>Login</li>
                </ul>
        </>
    );
}

export default App;