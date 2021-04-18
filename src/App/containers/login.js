import React, { Component } from 'react';

import Input from '../components/Input';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            controls : [
                {   elementType:'input',
                    elementName:'Email',
                    elementProperties:{
                        name:"Email",
                        type:"email",
                        placeholder:"Enter Mail",
                        value:''
                    },
                },
                {   elementType:'input',
                    elementName:'Password',
                    elementProperties:{
                        name:"Password",
                        type:"password",
                        placeholder:"Enter Password",
                        value:''
                    },
                },
            ]
        };
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler = (event,name) => {
        var elementName = this.state.controls.findIndex(item=>{
            return item.elementName === name
        })
        let changedOptions = [
            ...this.state.controls,
        ];
        changedOptions[elementName].elementProperties.value = event.target.value;
        this.setState({
            controls: changedOptions,
        })
    }
    
    render(
        inputs = this.state.controls.map((item,index)=>{
            return <Input key={index} value={item} onChangeHandler = {(e,item)=>this.changeHandler(e,item)}></Input>
        })
    ){
        return(
            <form>
                <fieldset>
                    {inputs}
                    <button type="submit">submit</button>
                </fieldset>
            </form>
        )
    }
}

export default Login;