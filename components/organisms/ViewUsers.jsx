/* eslint-disable @next/next/no-img-element */
import {Fragment} from 'react';
import styled from 'styled-components';
import ImgProfile from '../molecules/ImgProfile';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
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
  width: 300px;
  padding-right: 20px;
`;

const Name = styled.span`
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;


const ViewUsers = (props) => {
  return (
    <Fragment>
      <Wrapper className={props.className} onClick={props.onClick}>
        <ImgProfile active={props.active} src={props.img}/>
        <RowNameChat>
          <NameChat>
            <Name>{props.name}</Name>
          </NameChat>
        </RowNameChat>
      </Wrapper>
    </Fragment>
  );
};

export default ViewUsers;
