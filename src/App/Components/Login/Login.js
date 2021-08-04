import React from "react";
import Modal from "../UI/Modal";
const Login = (props) => {
    const loginSubmissionHandler = (event) => {
        
        props.show(event);
    }
    return (
        <Modal show={props.show}>
            <form onSubmit={loginSubmissionHandler}>
                <input type="text"/>
                <input type="text"/>
                <input type="checkbox"/>
                <button type="submit">Login</button>
            </form>
        </Modal>
    );
}

export default Login;