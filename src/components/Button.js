import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ title, onClick, icon }) => {
  return (
    <button className='action btn btn-secondary margin-5 align-self-center width-400' type='button' title={title} onClick={onClick}>
      {icon}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.element.isRequired,
};

export default Button;
