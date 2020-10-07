import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormButton.module.scss';
import { Button } from 'react-bootstrap';


class FormButton extends React.Component {

  render() {
    return (
      <div className={styles.Button}>
        <Button onClick={this.props.onClick} type={this.props.type} variant={this.props.variant}>{this.props.label}</Button>
      </div>
    )
  }
  
}

FormButton.propTypes = {};

FormButton.defaultProps = {};

export default FormButton;
