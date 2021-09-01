import { Fragment } from "react";
import styled from "styled-components";
import back from '../../public/assets/icons/back.svg'

const TopWrapper = styled.div`
width: 100%;
height: 20px;
display: flex;
`

const Username = styled.span`
display: block;
text-align: center;
width: 100%;
font-size: larger;
font-weight: bold;
color: var(--primary);
`

const BtnBack = styled.img`
    cursor: pointer;
`

const AvatarWrapper = styled.div`
    
`

const SideProfile = (props) => {
    return (
        <Fragment>
            <TopWrapper>
                <span onClick={props.OutProfile}>
                    <BtnBack src={back.src} alt="back-icon"/>
                </span>
                <Username>
                    {props.name}
                </Username>
            </TopWrapper>
            <div className="d-flex justify-content-center pt-5">
                <img src={props.img} alt="" />
            </div>
        </Fragment>
    );
}

export default SideProfile;