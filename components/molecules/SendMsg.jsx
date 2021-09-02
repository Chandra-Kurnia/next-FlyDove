/* eslint-disable @next/next/no-img-element */
import {Fragment} from 'react';
import styled from 'styled-components';
import emoticon from '../../public/assets/icons/emoticon.svg';
import plus from '../../public/assets/icons/plus.svg';
import cam from '../../public/assets/icons/cam.svg';
import send from '../../public/assets/icons/send.png'

const Wrapper = styled.div`
  background-color: white;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  position: fixed;
  width: 100%;
  bottom: 0;

  @media (min-width: 768px) {
    height: 100px;
    padding-left: 25px;
    padding-right: 25px;
    width: 50%;
    bottom: 0;
  }

  @media (min-width: 992px) {
    height: 130px;
    padding-left: 60px;
    padding-right: 60px;
    width: 75%;
    bottom: 0;
  }
`;

const InputIconWrapper = styled.div`
  width: 100%;
  background-color: red;
  display: flex;
  background-color: var(--bg-chat);
  border-radius: 15px;
`;

const TextMsg = styled.input`
  padding-left: 30px;
  border: none;
  color: grey;
  width: 100%;
  height: 50px;
  border-radius: 15px;
  background-color: var(--bg-chat);
  &:focus {
    border: none;
    outline: none;
  }
  &::placeholder {
    font-family: rubix-regular;
    font-size: 15px;
    font-weight: normal;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 55%;
  align-items: center;

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 992px) {
    width: 20%;
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const SendMsg = (props) => {
  return (
    <Fragment>
      <Wrapper>
        <InputIconWrapper>
          <TextMsg value={props.value} placeholder="Type your message..." onChange={(e) => props.onChange(e)} onKeyPress={(e) => e.key === 'Enter' && props.onSend()}/>
          <IconWrapper>
            <Icon src={send.src} alt="" onClick={props.onSend}/>
            <Icon src={plus.src} alt="" />
            <Icon src={emoticon.src} alt="" />
            <Icon src={cam.src} alt="" />
          </IconWrapper>
        </InputIconWrapper>
      </Wrapper>
    </Fragment>
  );
};

export default SendMsg;
