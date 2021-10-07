import React from 'react'
import '../App.css'

class Banner extends React.Component{
    render(){
        return(
            <div className ="Elbanner">
                <h2>{this.props.textoban}</h2>
            </div>
        );
    }
}

export default Banner;