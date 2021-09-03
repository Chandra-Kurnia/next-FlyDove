import {Fragment} from 'react';
import InputAuth from '../atoms/InputAuth';
import styled from 'styled-components';

const Label = styled.label`
    color: var(--custom-grey);
    font-family: rubix-regular;
`

const InputAuthMolecul = (props) => {
  return (
    <Fragment>
      <div className={props.className}>
        <Label className="d-block">{props.label}</Label>
        <InputAuth placeholder={props.placeholder} type={props.type} name={props.name} onChange={(e) => props.onChange(e)} defaultValue={props.defaultValue} onFocus={props.onFocus}/>
      </div>
    </Fragment>
  );
};

export default InputAuthMolecul;
