import React from "react";
import ReactDOM  from "react-dom";
import '../../Sass/Modal.scss';
const Backdrop = (props) => {
    return (
        <div className="backdrop" onClick={props.show}></div>
    )
}
const ModalOverLay = (props) => {
    return(
        <div className="modal">{props.children}</div>
    )
}
const Modal = (props) => {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop show={props.show}/>, document.getElementById('overlay'))};
            {ReactDOM.createPortal(<ModalOverLay show={props.show} children={props.children}/>, document.getElementById('modal'))};
        </React.Fragment>
    )
}

export default Modal;