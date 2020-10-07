import React from 'react';
import PropTypes from 'prop-types';
import styles from './DropDown.module.scss';

class DropDown extends React.Component {
  constructor() {
    super()
  }

  getOptions(options) {
    let optionTags = [];
    options.forEach((option) => {
      optionTags.push(<option value={option.value} key={option.value}>{option.label}</option>)
    });
    return optionTags;
  }


  render() {
    return (
      <div>
        <select name={this.props.name} id={this.props.id}>
            {this.getOptions(this.props.options)}
        </select>
      </div>
    )
  }
}


DropDown.propTypes = {};

DropDown.defaultProps = {};

export default DropDown;
