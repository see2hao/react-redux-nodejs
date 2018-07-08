import {
    REGISTER_SUCCESS,
    ERROR_MESSAGE,
} from '../actions/actions'
import errorMsg from './error'
import Axios from 'axios';

function registerSuccess(data){
    return {type: REGISTER_SUCCESS, payload: data}
}

function register({userName, password, repeatePassword, type}){
    if(!userName || !password || !type){
        return errorMsg('请输入用户名和密码')
    }

    if(password !== repeatePassword){
        return errorMsg('确认密码与密码不一样')
    }

    return dispath=>{
        Axios.post('/user/register', { userName, password, type })
            .then(res=>{
                if(res.status == 200 && res.data.code == 0){
                    dispath(registerSuccess({userName, password, type}))
                }else{
                    dispath(errorMsg(res.data.message))
                }
            })
    }
}

const initState = {
    isAuth: false,
    userName: '',
    password: '',
    type: '',
    message: '',
}

export default function user(state=initState, action){
    switch(action.type){
        case REGISTER_SUCCESS:
            return {...state, message: '', isAuth: true, ...action.payload,}
        case ERROR_MESSAGE:
            return {...state, message: action.message, isAuth: false,}
        default:
            return state
    }   
}