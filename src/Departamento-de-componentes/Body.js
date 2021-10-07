import React,{Component} from "react";
import '../App.css'

class Body extends Component{
    render(){
        return(
            <div className = "Elbody">
            <h2>{this.props.practica}</h2>
            <ol> 
                {this.props.eltemas.map((e,inde)=> 
                    <li key = {inde} >{e}</li>
                )}
            </ol>
            </div>
        );
    }
}

export default Body;