import { Fragment } from "react";
import styled from "styled-components";

const Span = styled.span`
    color: var(--primary);
    font-family: rubix-semibold;
    font-size: 30px;
`

const SpanAuth = (props) => {
    return (
        <Fragment>
            <Span className={props.className}>{props.text}</Span>
        </Fragment>
    );
}

export default SpanAuth;