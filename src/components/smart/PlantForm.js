import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormInput from 'components/shared/Form/FormInput/FormInput';
import FormSelect from 'components/shared/Form/FormSelect/FormSelect';
const StyledPlantForm = styled.form`
  margin: 50px;
`;
const PlantForm = (props) => {
  return (
    <StyledPlantForm>
      <FormInput>Name</FormInput>
      <FormInput>Description</FormInput>
      <FormInput>Size</FormInput>
      <FormSelect options={['ceropegia', 'hoya', 'pilea']}>Type</FormSelect>
    </StyledPlantForm>
  );
};

PlantForm.propTypes = {};

export default PlantForm;
