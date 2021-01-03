import React,{Component} from "react";
import './Header.css';

class Header extends Component{

    render(){
    return(
        <div className="heading"> 
            {this.props.heading}  
        </div>
    );
}
}

export default Header;
