import React from 'react';
import { ChevronIcon } from '~/icons/ChevronIcon';
import Button from './Button.jsx';
import './BackButton.css';

const handleClick = () => {
  window.history.back();
};

export const BackButton = () => {
  return (
    <Button onClick={handleClick}>
      <ChevronIcon className="back_button__icon" />
      Back
    </Button>
  );
};
