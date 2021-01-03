import React,{Component} from "react";
import Header from "./Header.js";
import './AddSubscriber.css';
import {Link } from 'react-router-dom';

class AddSubscriber extends Component{
    constructor() {
        super();
        this.state = {
            id: 0,
            name: '',
            phone: ''
        }
    }

    inputChangedHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.state)
    }
    render(){
        const{name,phone}=this.state;
        return(
        <div>
            <Header heading="AddSubscriber"/>
            <div className="component-body-container">
                <Link to="/"><button className="custom-btn"> Back</button></Link>
                <form className="subscriber-form">
                    <label htmlFor="name" className="label-control">Name : </label>
                    <input  id="name" type="text" className="input-control" name="name" onChange={this.inputChangedHandler}></input><br/><br/>
                    <label htmlFor="phone" className="label-control">Phone : </label>
                    <input id="phone" type="text" className="input-control" name="phone" onChange={this.inputChangedHandler}></input><br/><br/>
                    <div className="subscriber-info-container">
                        <span className="subscriber-to-ad-heading">Subscriber to be added : </span><br/>
                        <span className="subscriber-info">Name : {name} </span><br/>
                        <span className="subscriber-info">Phone : {phone} </span><br/>
                    </div>
                    <button type="submit" className="custom-btn add-btn">Add</button>
                </form>
            </div>
        </div>
        )
    }
}  

export default AddSubscriber;