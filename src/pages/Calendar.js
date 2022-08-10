import React from 'react';
import Button from 'components/shared/Buttons/Button/Button';
import IconButton from 'components/shared/Buttons/IconButton/IconButton';
import LabelsList from 'components/smart/LabelsList';

import Header from 'components/shared/Header/Header';
const showAlert = (info) => {
  alert(`Hello ${info}`);
};

export const Calendar = () => {
  return (
    <>
      <Header>Calendar</Header>
      <Button color="accent2" onClick={() => showAlert('Doris')}>
        display
      </Button>
      <IconButton color="accent2"></IconButton>
      <LabelsList></LabelsList>
    </>
  );
};
