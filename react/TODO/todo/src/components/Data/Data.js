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
      <div index={this.props.location.state.index} key={this.props.location.state.index} className="container data">
        <div className="home">
        <Link to={
              {
                pathname : "/"
              }
            }><Badge variant="info">Click to go Home</Badge></Link>        
          </div>
        <div index={this.props.location.state.index} className="image"><img src={this.props.location.state.image} alt={this.props.location.state.alt} width="100" height="100" index={this.props.location.state.index}/></div>
        <div className="info">
            <Badge variant="info">Card: {this.props.location.state.index}</Badge>
          <div index={this.props.location.state.index} contentEditable="true" className="title card-title h5">{this.props.location.state.title}</div>
          <div index={this.props.location.state.index} contentEditable="true" className="desc"><p className="card-text">{this.props.location.state.description}</p></div>
          
        </div>
      </div>
    )
  }

}

Data.propTypes = {};

Data.defaultProps = {};

export default Data;
