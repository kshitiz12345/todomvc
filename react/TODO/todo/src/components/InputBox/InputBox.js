import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputBox.module.scss';
import { Form } from 'react-bootstrap';

class InputBox extends React.Component {

  render() {

    return (
      <div className={styles.InputBox}>
        <Form.Label>{this.props.label}</Form.Label>
        <Form.Control type={this.props.type} placeholder={this.props.placeholder} onKeyUp={this.props.onKeyUp} max={this.props.max}/>
      </div>
    )
    
  }
 
}

InputBox.propTypes = {};

InputBox.defaultProps = {};

export default InputBox;
