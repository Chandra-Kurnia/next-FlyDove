import {Fragment} from 'react';
import styled from 'styled-components';

const Input = styled.input`
  color: var(--custom-black);
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid black;
  font-weight: bolder;
  padding-top: 10px;
  padding-bottom: 10px;
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
      <Input className={props.className} onChange={(e) => props.onChange(e)} placeholder={props.placeholder} type={props.type} name={props.name} defaultValue={props.defaultValue}/>
    </Fragment>
  );
};

export default InputAuth;
