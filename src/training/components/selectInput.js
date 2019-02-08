
import React from 'react';
import PropTypes from 'prop-types';


const SelectInput = ({name,value, options, onChange,defaultValue,size}) => (
<div>
  <select
    name={name}
    defaultValue={value}
    onChange={onChange}
    style={{width: (size=='1')?'200px':'100px'}}>
    <option value="0">{defaultValue}</option>
    {options.map(option=>(
      <option key={option.value} value={option.value}>{option.text}</option>
    ))}
  </select>
</div>
);

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  defaultValue: PropTypes.string,
  value: PropTypes.number
};

export default SelectInput;
