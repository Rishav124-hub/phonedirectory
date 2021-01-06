import React,{ Component } from "react";
import './ShowSubscribers.css';
import './Common.css';
import Header from './Header.js';
import {Link } from 'react-router-dom';


class ShowSubscribers extends Component {

  onDeletedClick = (subscriberId) => {
    this.props.deleteSubscriberHandler(subscriberId); 
  }
  render(){
    
  return (
    <div>
        <Header heading="PHONE DIRECTORY" />

      <div className="component-body-container">
        <Link to="/add"><button type="button" className="custom-btn add-btn">ADD</button></Link>
        <div className="grid-container heading-container">
          <span className="grid-item name-heading">NAME</span>
          <span className="grid-item phone-heading">PHONE</span>
        </div>
        {
          this.props.subscribersList.map(sub => {
            return <div key={sub.id} className="grid-container">
            <span className="grid-item">{sub.name}</span>
          <span className="grid-item">{sub.phone}</span>
            <button className="custom-btn delete-btn" onClick={this.onDeletedClick.bind(this, sub.id)}>Delete</button>
          </div>
          }

          )
        }

      </div>
    </div>
  );
}
}

export default ShowSubscribers;
