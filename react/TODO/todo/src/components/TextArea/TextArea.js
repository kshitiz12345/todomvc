import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TextArea.module.scss';
import { Form } from 'react-bootstrap';

class TextArea extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className={styles.TextArea}>
        <Form.Label>{this.props.label}</Form.Label>
        <Form.Control type={this.props.type} placeholder={this.props.placeholder} onKeyUp={this.props.onKeyUp} as="textarea"/>
      </div>
    )
  }


}
  
TextArea.propTypes = {};

TextArea.defaultProps = {};

export default TextArea;
