import { Fragment } from "react";
import styled from "styled-components";

const Button = styled.button`
width: 100%;
height: 60px;
border-radius: 70px;
border: none;
outline: none;
font-size: 16px;
font-family: rubix-regular;
`
const ButtonAuth = (props) => {
    return (
        <Fragment>
            <Button onClick={props.onClick} className={props.className}>{props.text}</Button>
        </Fragment>
    );
}

export default ButtonAuth;