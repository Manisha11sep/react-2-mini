import React from 'react';
import PropTypes from 'prop-types';

export default function SizeChanger(props) {
  return (
    <select className="dropDownContainer" value ={props.fontSize}
    onChange = {event =>props.update(parseInt(event.target.value),10)}
    disabled = {props.allowEdit === false}>>
      <option value="12"> 12 </option>
      <option value="13"> 13 </option>
      <option value="14"> 14 </option>
    </select>
  )
}

SizeChanger.PropTypes = {
  fontSize : PropTypes.string.isRequired,
  update : PropTypes.func.isRequired,
  allowEdit : PropTypes.bool.isRequired,

}
