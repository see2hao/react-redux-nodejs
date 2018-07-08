import React from 'react'

import  logoPng from './logo.png'
import './logo.css'

class Logo extends React.Component{
    render(){
        return (
            <div className="logo-container">
                <img src={logoPng}/>
            </div>
        )
    }
}

export default Logo