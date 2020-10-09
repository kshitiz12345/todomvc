import React from 'react';
import './Data.css';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Data extends React.Component {

  constructor() {
    super()
  }
  

  render() {
    return (
      <div index={this.props.location.state.index} key={this.props.location.state.index} className="container react-data">
        <div className="home">
        <Link to={
              {
                pathname : "/"
              }
            }><Badge variant="info">Click to go Home</Badge></Link>
          </div>
        
        <div className="info">
            <Badge variant="info">Card: {this.props.location.state.index}</Badge>
            <Badge variant="info tag">Tag: {this.props.location.state.tag}</Badge>        
          <div index={this.props.location.state.index} contentEditable="true" className="title card-title h5">{this.props.location.state.title}</div>
          
        </div>
      </div>
    )
  }

}

Data.propTypes = {};

Data.defaultProps = {};

export default Data;
