import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

@withRouter
class AuthRoute extends React.Component{
    componentDidMount(){
        const publicList = [
            '/login', '/register'
        ]
        const pathName = this.props.location.pathName

        if(~publicList.indexOf(pathName)){
            return null
        }

        axios.get(`/user/info`)
            .then(res=>{
                if(res.status == 200){
                    if(res.data.code == 0){

                    }else{
                        this.props.history.push('/login')
                    }
                    console.log(res.data)
                }
            })
    }

    render(){
        return (
            <div></div>
        )
    }
}

export default AuthRoute