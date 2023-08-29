import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  border-radius: 4px;
  border: 1px solid black;
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const StyledField = styled(Field)`
  padding: ${({ theme }) => theme.spacing(1)};
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 13px;
  color: red;
`;
