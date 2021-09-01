import { Fragment } from "react";
import Image from 'next/image'
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
color: white;
padding: 15px 10px;
position: relative;
align-items: center;
justify-content: flex-start;
`

const Span = styled.span`
padding-left: 30px;
cursor: pointer;
position: absolute;
left: 35px;
`

const MenuItem = (props) => {
    return (
        <Fragment>
            <Wrapper>       
                <Image src={props.src} alt='menuicon' width='20px' height='20px'/>
                <Span className='ps-4' onClick={props.onClick}>{props.text}</Span>
            </Wrapper>
        </Fragment>
    );
}

export default MenuItem;