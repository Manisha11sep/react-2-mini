import React from 'react';
import PropTypes from 'prop-types';

export default function ColorChanger(props) {
  console.log(props)
  return (
    <select className="dropDownContainer" value ={props.fontColor}
    onChange = {event =>props.update(event.target.value)} 
    disabled = {props.allowEdit === 'false}>
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="green"> Green </option>
  </select>
  )
}
ColorChanger.protoTypes = {
  fontColor : PropTypes.string.isRequired,
  update : PropTypes.func.isRequired,
  allowEdit : PropTypes.bool.isRequired,

}