import React from 'react';
import './DataList.css';
import FormButton from '../FormButton/FormButton';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class DataList extends React.Component {

  constructor() {
    super()
  }
  

  render() {
    return (
      <div index={this.props.index} key={this.props.index} className="dataList">
        <div index={this.props.index} className="image"><img src={this.props.image} alt={this.props.alt} width="100" height="100" index={this.props.index}/></div>
        <div className="info">
          <div className="card-number">
            <Link to={
              {
                pathname : "/data/" + this.props.index,
                state: this.props
              }
            }><Badge variant="info">Click to View Card: {this.props.index}</Badge></Link>
          </div>
          <div index={this.props.index} contentEditable="false" data-type="title" className="title card-title h5">{this.props.title}</div>
          <div index={this.props.index} contentEditable="false" data-type="desc" className="desc"><p className="card-text">{this.props.description}</p></div>
          <div className="remove" index={this.props.index}>
            <FormButton label="remove" type="button" variant="danger"></FormButton>
          </div>
          
        </div>
      </div>
    )
  }

}

DataList.propTypes = {};

DataList.defaultProps = {};

export default DataList;
