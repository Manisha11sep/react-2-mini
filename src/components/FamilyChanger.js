import React from 'react';
import PropTypes from 'prop-types';


export default function FamilyChanger(props) {
  return (
    <select className="dropDownContainer"
    value ={props.fontSize} 
    onChange = {event => props.update(event.target.value)}
    disabled = {props.allowEdit ==='false'}>>
      <option value="monospace"> Monospace </option>
      <option value="cursive"> Cursive </option>
      <option value="courier"> Courier </option>
    </select>
  )
}

FamilyChanger.PropTypes = {
  fontFamily : PropTypes.string.isRequired,
  update : PropTypes.func.isRequired,
  allowEdit : PropTypes.bool.isRequired,

}
