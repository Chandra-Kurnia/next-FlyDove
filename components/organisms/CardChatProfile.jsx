import {Fragment} from 'react';
import styled from 'styled-components';
import ImgProfile from '../molecules/ImgProfile';
import ProfileMenu from '../../public/assets/icons/ProfileMenu.svg';
import back from '../../public/assets/icons/back.svg'

const UserChat = styled.div`
  background-color: white;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  position: fixed;
  width: 100%;

  @media (min-width: 768px) {
    height: 100px;
    padding-left: 25px;
    padding-right: 25px;
    width: 50%;
  }

  @media (min-width: 992px) {
    height: 130px;
    padding-left: 60px;
    padding-right: 60px;
    width: 75%;
  }
`;

const IMG = styled.img`
  cursor: pointer;
`;

const NameStatusWrapper = styled.div`
  display: flex;
  width: 70%;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 992px) {
    width: 87%;
  }
`;

const NameStatus = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Status = styled.span`
  font-weight: normal;
  font-size: small;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BackButton = styled.img`
margin-right: 10px;
@media (min-width: 768px) {
  display: none;
}

@media (min-width: 992px) {
  display: none;
}
`

const CardChatProfile = (props) => {
  return (
    <Fragment>
      <UserChat>
        <BackButton onClick={props.backChats} src={back.src} alt="" />
        <ImgProfile className='me-2' src={props.img} active={props.active} />
        <NameStatusWrapper>
          <NameStatus>
            <Name>{props.name}</Name>
            {props.active ? (
              <Status className="color-primary">Online</Status>
            ) : (
              <Status className="color-red">Offline</Status>
            )}
          </NameStatus>
        </NameStatusWrapper>
        <IMG src={ProfileMenu.src} alt="ProfileMenusIcon" />
      </UserChat>
    </Fragment>
  );
};

export default CardChatProfile;
