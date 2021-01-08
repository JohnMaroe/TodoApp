import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';

import './styles.css';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  control: (provided, state) => ({
    ...provided,
    width: 350,
    height: 30,
    marginLeft: '30px',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

function Modal({ open, children, onClose }) {

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className='overlay' onClick={onClose} />
      <div className='modal'>
        {children}
        <Select options={options} styles={customStyles} />

        <div className='bookmark'></div>
        <div id="flag"></div>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal;