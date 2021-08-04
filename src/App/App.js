import React, { useState } from 'react';
import Header from './Components/HeaderNavigation/Header';
import Landing from './Components/pages/Landing';
import Service from './Components/UI/Sections/Service';
import Login from './Components/Login/Login';
import './Sass/Base.scss'

export default function App () {
    const [showLogin, setShowLoginModule] = useState(false);

    const showLoginModuleHandler = (event) => {
        event.preventDefault();
        console.log(showLogin);
        setShowLoginModule((prevState) => !prevState);
    }
    return (
        <React.Fragment>
            {showLogin && <Login></Login>}
            <div className="background">
                <Header show={showLoginModuleHandler}/>
                <Landing/>
                <Service/>
            </div>
        </React.Fragment>
    );
}