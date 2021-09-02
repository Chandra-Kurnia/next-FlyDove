import {Fragment} from 'react';
import styled from 'styled-components';

const ImgWrapper = styled.div`
  width: 64px;
  height: 64px;
  position: relative;
`;

const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

const Active = styled.div`
  position: absolute;
  width: 23px;
  height: 23px;
  background-color: var(--primary);
  right: -5px;
  bottom: 0;
  border-radius: 50%;
  border: 5px solid white;
`;

const ImgProfile = (props) => {
  return (
    <Fragment>
      <ImgWrapper className={props.className}>
        <IMG src={props.src} alt="" />
        {props.active === true && <Active />}
      </ImgWrapper>
    </Fragment>
  );
};

export default ImgProfile;
