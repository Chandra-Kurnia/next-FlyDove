import {Fragment} from 'react';
import styled from 'styled-components';

const Input = styled.input`
  color: black;
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid black;
  font-weight: bolder;
  &:focus {
    outline: none;
  }
  & ::placeholder {
    font-weight: normal;
  }
`;

const InputAuth = (props) => {
  return (
    <Fragment>
      <Input className={props.className} />
    </Fragment>
  );
};

export default InputAuth;
