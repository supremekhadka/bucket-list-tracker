import React from 'react';
import './checkbox.css';

interface CheckboxProps {
  index: number;
  checked: boolean;
  onChange: (isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    props.onChange(isChecked);
  };

  return (
    <div className="checkbox-wrapper-19">
      <input
        id={props.index.toString()}
        type="checkbox"
        checked={props.checked}
        onChange={handleCheckboxChange}
      />
      <label className="check-box" htmlFor={props.index.toString()}></label>
    </div>
  );
};

export default Checkbox;
