import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

// 必要なpropsのみを明示的に受け取る
const Button = ({ children, type = 'button', onClick, disabled = false, className = '' }) => (
    <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${styles.button} ${className}`.trim()}
    >
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
};

export default Button;