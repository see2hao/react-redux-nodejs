import React from 'react'
import { 
    List, 
    InputItem, 
    WingBlank, 
    WhiteSpace, 
    Button,
    Radio,
 } from 'antd-mobile'
 import {connect} from 'react-redux'

 import register from '../../reducers/user'
import Logo from '../../components/logo/logo'

@connect(
    state=>state.userName,
    {register}
)
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            type: 'genius',
              userName: '',
              password: '',
              repeatPassword: '',
              type: 'genius',  
        }
        this.login = this.login.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
        this.handlerRegister = this.handlerRegister.bind(this)
    }

    handlerRegister(){
        // console.log(this.props.register)
        // console.log(this.state)
        this.props.register(this.state)
    }

    handlerChange(key, value){
        this.setState({
         [key]: value,   
        })
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
                        {this.props.message?<p className="error-message">{this.props.message}</p>:null}
                        <InputItem
                            onChange={value=>this.handlerChange('userName', value)}
                        >用户名</InputItem>
                        <InputItem
                            onChange={value=>this.handlerChange('password', value)}
                            type="password"
                        >密码</InputItem>
                        <InputItem
                            onChange={value=>this.handlerChange('repeatPassword', value)}
                            type="password"
                        >确认密码</InputItem>
                        <RadioItem 
                            checked={this.state.type == 'genius'}
                            onChange={()=>this.handlerChange('type', 'genius')}
                        >
                            牛人
                        </RadioItem>
                        <RadioItem 
                            checked={this.state.type == 'boss'}
                            onChange={()=>this.handlerChange('type', 'boss')}
                        >
                            BOSS
                        </RadioItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary"
                        onClick={this.handlerRegister}
                    >注册</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.login}>登陆</Button>
                </WingBlank>
            </div>
        )  
    }
}

export default Register