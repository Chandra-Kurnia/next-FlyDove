import { Fragment } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`

const Span = styled.span`
    display: block;
    color: var(--custom-grey);
`

const NoMessage = () => {
    return (
        <Fragment>
            <Wrapper>
                <Span>
                    Please select chat to start messaging
                </Span>
            </Wrapper>
        </Fragment>
    );
}

export default NoMessage;