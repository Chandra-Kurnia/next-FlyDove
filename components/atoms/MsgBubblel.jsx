import {Fragment} from 'react';
import styled from 'styled-components';
import moment from 'moment';

const BubbleSender = styled.div`
  background-color: var(--primary);
  color: white;
  text-align: left;
  max-width: 90%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 10px;
  padding: 20px;
  margin-top: 10px;

  @media (min-width: 768px) {
    max-width: 90%;
  }

  @media (min-width: 992px) {
    max-width: 70%;
  }
`;

const BubbleUser = styled.div`
  background-color: white;
  color: black;
  text-align: left;
  max-width: 90%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 30px;
  padding: 20px;
  margin-top: 10px;
`;

const SenderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const RecieverWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Time = styled.span`
  display: block;
  width: 100%;
  text-align: right;
  margin-top: 3px;
  font-size: small;
`;

const Time2 = styled.span`
  display: block;
  width: 100%;
  text-align: left;
  margin-top: 3px;
  font-size: small;
`;

const MsgBubblel = (props) => {
  return (
    <Fragment>
      {props.user === true ? (
        <>
          <RecieverWrapper>
            <BubbleUser>{props.msg}</BubbleUser>
          </RecieverWrapper>
          <Time>{moment(props.time).format('LT')}</Time>
        </>
      ) : (
        <>
          <SenderWrapper>
            <BubbleSender>{props.msg}</BubbleSender>
          </SenderWrapper>
          <Time2>{moment(props.time2).format('LT')}</Time2>
        </>
      )}
    </Fragment>
  );
};

export default MsgBubblel;
