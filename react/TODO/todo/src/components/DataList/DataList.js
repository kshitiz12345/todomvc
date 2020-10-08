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
        <div className="info">
          <div className="card-number">
            <Link to={
              {
                pathname : "/data/" + this.props.index,
                state: this.props
              }
            }><Badge variant="info">Click to View Card: {this.props.index}</Badge></Link>
            <Badge variant="info tag">Tag: {this.props.tag}</Badge>
          </div>
          <div index={this.props.index} contentEditable="false" data-type="title" className="title card-title h5">{this.props.title}</div>
          <div className="remove" index={this.props.index} tag={this.props.tag}>
            <FormButton label="remove" type="button" variant="danger" ></FormButton>
          </div>
          
        </div>
      </div>
    )
  }

}

DataList.propTypes = {};

DataList.defaultProps = {};

export default DataList;
