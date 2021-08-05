import React, { useRef } from "react";
import Input from "../UI/Input";
import Modal from "../UI/Modal";

const defaultState = {email:'', password:'',isManager:'on'};

const Login = (props) => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const isManagerRef = useRef('');
    
    const loginSubmissionHandler = (event) => {
        let email = emailRef.current.value;
        let passowrd = passwordRef.current.value;
        let isManager = isManagerRef.current.value;
        if(passowrd.trim().length < 6) {
            return;
        } 
        const newstate = {
            email: email,
            passowrd: passowrd,
            isManager: isManager
        }
        props.setUserData(newstate);
        props.show(event);
    }
    return (
        <Modal show={props.show}>
            <div className="header">
                <h2>Login Form</h2>
            </div>
            <div className="content">
                <form onSubmit={loginSubmissionHandler}>
                    <Input label="Email" properties={{
                        type: 'email',
                        label: 'Email',
                        ref:emailRef
                    }}/>
                    <Input label="Password" properties={{
                        type: 'password',
                        label: 'Password',
                        ref:passwordRef
                    }}/>
                    <Input label="IsManager" properties={{
                        type: 'checkbox',
                        label: 'IsManager',
                        ref:isManagerRef,
                        value: 'manager'
                    }}/>
                    <button type="submit" className="actions">Login</button>
                </form>
            </div>
        </Modal>
    );
}

export default Login;