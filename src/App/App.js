import React, { useState } from 'react';
import Header from './Components/HeaderNavigation/Header';
import Landing from './Components/pages/Landing';
import Service from './Components/UI/Sections/Service';
import Login from './Components/Login/Login';
import './Sass/Base.scss'

export default function App () {
    const [showLogin, settoogleLoginModule] = useState(false);

    const [userData , setUserData] = useState({name:'User', isLogin: false});

    const userDataHandler = (data) => {
        setUserData(
            {name: data.email, isLogin: true}
        );
    }
    const showLoginModuleHandler = (event) => {
        event.preventDefault();
        settoogleLoginModule((prevState) => !prevState);
    }
    return (
        <React.Fragment>
            {showLogin && <Login show={showLoginModuleHandler} setUserData={userDataHandler}></Login>}
            <div className="background">
                <Header show={showLoginModuleHandler} user={userData}/>
                <Landing/>
                <Service/>
            </div>
        </React.Fragment>
    );
}