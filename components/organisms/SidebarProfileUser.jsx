import {Fragment} from 'react';
import styled from 'styled-components';
import back from '../../public/assets/icons/back.svg';

const Wrapper = styled.div`
  position: absolute;
  /* background-color: red; */
  background-color: #fff;
  right: 0;
  display: none;
  width: 100%;
  height: 100vh;
  z-index: 20;
  animation-name: fadeAnimation;
  animation-duration: 0.4s;
  box-shadow: 5px 5px 10px 5px grey;
  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 992px) {
    width: 30%;
  }
`;

const TopWrapper = styled.div`
  width: 100%;
  padding-left: 65px;
  display: flex;
  padding-top: 30px;
  @media (min-width: 768px) {
  padding-left: 80px;
}

@media (min-width: 992px) {
  padding-left: 105px;
}

  span{
    font-size: 30px;
  }
`;

const BtnBack = styled.img`
  cursor: pointer;

@media (min-width: 992px) {
  display: none;
}
`;

const Username = styled.span`
  display: block;
  text-align: center;
  width: 70%;
  font-size: larger;
  font-weight: bold;
  color: var(--primary);
`;

const AvatarWrapper = styled.div`
width: 100%;
justify-content: center;
display: flex;
margin-top: 20px;
`

const Img = styled.img`
border-radius: 50%;
width: 300px;
height: 300px;
`

const Attribute = styled.div`
font-family: rubix-regular;
padding-left: 40px;
padding-right: 40px;
padding-top: 30px;
.subAtr{
  color: var(--primary);
  font-weight: bold;
  font-size: 25px;
  padding-left: 20px;
}
.bio{
  background-color: #c2f1eb;
  padding: 20px;
  border-radius: 10px;
  max-height: 150px;
  min-height: 150px;
  overflow: auto;
  text-overflow: ellipsis;
}
`

const NoAttr = styled.span`
font-size: 15px;
color: grey;
font-weight: normal;
font-style: italic;
font-family: sans-serif;
`

const SidebarProfileUser = (props) => {
  return (
    <Fragment> 
      <Wrapper className={props.className}>
        <TopWrapper>
          <span onClick={props.OutProfile}>
            <BtnBack src={back.src} alt="back-icon" />
          </span>
          <Username>{props.username}</Username>
        </TopWrapper>
          <AvatarWrapper>
            <Img src={`${process.env.API_SERVER_URL}${props.avatar}`} alt="" />
          </AvatarWrapper>
          <Attribute>
          <span>Phone Number :</span>
          <br />
          <span className='subAtr'>{props.phone_number ? props.phone_number : <NoAttr>{props.username} does not share phone number</NoAttr>}</span>
          <br />
          <span>Bio :</span>
          <br />
          <div className="bio">
            {props.bio ? props.bio : <NoAttr>{props.username} didn`t write bio</NoAttr>}
          </div>
          </Attribute>
      </Wrapper>
    </Fragment>
  );
};

export default SidebarProfileUser;
