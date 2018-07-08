import React from 'react'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'

import Logo from '../../components/logo/logo'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.register = this.register.bind(this)
    }

    register(){
        this.props.history.push('/register')
    }

    render(){
        return (
            <div>
                <Logo/>
                <h2>登陆页</h2>
                <WingBlank>
                    <List>
                        <WhiteSpace/>
                        <InputItem>用户</InputItem>
                        <InputItem>密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary">登陆</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )  
    }
}

export default Login