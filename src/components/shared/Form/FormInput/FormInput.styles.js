import styled from 'styled-components';

export const StyledFormInput = styled.div`
  color: ${({ theme }) => theme.colors.black};

  input {
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayMedium};
    margin-top: 5px;
    padding-bottom: 5px;
    border-radius: 0;
    font-size: ${({ theme }) => theme.fontSize.m};
    &:focus-visible {
      outline: none;
    }
  }

  label {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.grayMedium};
    margin-top: 2px;
    text-transform: capitalize;
  }
`;
