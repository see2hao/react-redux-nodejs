import React from 'react'
import { 
    List, 
    InputItem, 
    WingBlank, 
    WhiteSpace, 
    Button,
    Radio,
 } from 'antd-mobile'

import Logo from '../../components/logo/logo'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            type: 'genius'
        }
        this.login = this.login.bind(this)
    }

    login(){
        this.props.history.push('/login')
    }
    render(){
        const RadioItem = Radio.RadioItem

        return (
            <div>
                <Logo/>
                <h2>注册页</h2>
                <WingBlank>
                    <List>
                        <WhiteSpace/>
                        <InputItem>用户名</InputItem>
                        <WhiteSpace/>
                        <InputItem>密码</InputItem>
                        <WhiteSpace/>
                        <InputItem>确认密码</InputItem>
                        <WhiteSpace/>
                        <RadioItem checked={this.state.type == 'genius'}>
                            牛人
                        </RadioItem>
                        <WhiteSpace/>
                        <RadioItem checked={this.state.type == 'boss'}>
                            BOSS
                        </RadioItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.login}>登陆</Button>
                    <WhiteSpace/>
                    <Button type="primary">注册</Button>
                </WingBlank>
            </div>
        )  
    }
}

export default Register