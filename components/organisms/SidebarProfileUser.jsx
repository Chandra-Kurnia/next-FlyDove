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
  padding-left: 130px;
  display: flex;
  padding-top: 30px;
`;

const BtnBack = styled.img`
  cursor: pointer;
`;

const Username = styled.span`
  display: block;
  text-align: center;
  width: 70%;
  font-size: larger;
  font-weight: bold;
  color: var(--primary);
`;

const SidebarProfileUser = (props) => {
  return (
    <Fragment>
      <Wrapper className={props.className}>
        <TopWrapper>
          <span onClick={props.OutProfile}>
            <BtnBack src={back.src} alt="back-icon" />
          </span>
          <Username>Candra Kurniawan</Username>
        </TopWrapper>
      </Wrapper>
    </Fragment>
  );
};

export default SidebarProfileUser;
