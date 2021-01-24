import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';

import './styles.css';

const options = [
  { value: 'chocolate', label: 'Chocolate', color: 'brown' },
  { value: 'strawberry', label: 'Strawberry', color: 'red' },
  { value: 'vanilla', label: 'Vanilla', color: 'wheat' }
];

const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const customStyles = {
  option: (styles, state) => ({
    ...styles,
    color: state.isSelected ? '#fff' : '#111d',
    padding: 20,
    backgroundColor: state.isSelected ? '#111b' : '#eee',
  }),
  control: (styles) => ({
    ...styles,
    width: 350,
    height: 30,
    marginLeft: '30px',
  }),
  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({ ...styles, ...dot() }),
  singleValue: (styles) => ({ ...styles, ...dot('#111a') }),
}

function Modal({ open, children, onClose }) {
  const [selected, setSelected] = useState('');

  function handleChange(selectedOption) {
    setSelected(selectedOption);
  }

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className='overlay' onClick={onClose} />
      <div className='modal'>
        {children}
        <Select
          value={selected}
          onChange={handleChange}
          label="Category select"
          options={options} 
          styles={customStyles} 
        />

        <div className='bookmark'></div>
        <div id="flag"></div>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal;