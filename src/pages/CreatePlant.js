import React from 'react';
import Button from 'components/shared/Buttons/Button/Button';
import PlantForm from 'components/smart/PlantForm';
import Header from 'components/shared/Header/Header';
export const CreatePlant = () => {
  return (
    <>
      <Header>Create plant</Header>
      <PlantForm></PlantForm>
      <Button color="primary">add</Button>
    </>
  );
};
