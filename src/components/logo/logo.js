import React from 'react'

import  logoPng from '../logo/logo'

class Logo extends React.Component{
    render(){
        return (
            <div className="container">
                <img src={logoPng}/>
            </div>
        )
    }
}

export default Logo