import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const FormPlateStyled = styled.section`
  border: 4px solid #4b339b;
  padding: 8px;
  margin-bottom: 36px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const Input = styled(Field)`
  color: #2a2a2a;
  font-size: 16px;
`;

export const ErrorMessageStiled = styled(ErrorMessage)`
  color: tomato;
`;

export const Button = styled.button`
  color: #4b339b;
`;