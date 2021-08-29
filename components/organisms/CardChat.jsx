/* eslint-disable @next/next/no-img-element */
import {Fragment} from 'react';
import styled from 'styled-components';
import profile from '../../public/assets/img/profile.jpg';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  /* justify-content: space-around; */
`;

const ImgWrapper = styled.div`
  width: 64px;
  height: 64px;
  /* margin-right: 20px; */
`;

const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

const RowNameChat = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
`;

const NameChat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 150px;
  padding-right: 20px;
`;

const Name = styled.span`
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LastChat = styled.span`
  font-weight: normal;
  font-size: small;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TimeCount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
`;

const Time = styled.span`
  font-size: small;
  color: var(--custom-grey);
`;
const Count = styled.span`
  background-color: var(--primary);
  display: flex;
  width: max-content;
  height: 18px;
  color: white;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  font-size: smaller;
  padding: 4px;
`;

const CardChat = (props) => {
  return (
    <Fragment>
      <Wrapper className={props.className}>
        <ImgWrapper>
          <IMG src={profile.src} alt="" />
        </ImgWrapper>
        <RowNameChat>
          <NameChat>
            <Name>{props.name}</Name>
            <LastChat className={props.count > 0 && 'color-primary'}>
              {props.LastChat}
            </LastChat>
          </NameChat>
          <TimeCount>
            <Time>12:00</Time>
            {props.count > 0 && <Count>{props.count}</Count>}
          </TimeCount>
        </RowNameChat>
      </Wrapper>
    </Fragment>
  );
};

export default CardChat;
