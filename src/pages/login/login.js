import React from 'react'

import Logo from '../../components/logo/logo'

class Login extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <Logo/>
                <h2>登陆页</h2>
            </div>
        )  
    }
}

export default Login