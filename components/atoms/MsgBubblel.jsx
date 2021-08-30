import {Fragment} from 'react';
import styled from 'styled-components';

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

const MsgBubblel = (props) => {
  return (
    <Fragment>
      {props.user === true ? (
        <RecieverWrapper>
          <BubbleUser>{props.msg}</BubbleUser>
        </RecieverWrapper>
      ) : (
        <SenderWrapper>
          <BubbleSender>{props.msg}</BubbleSender>
        </SenderWrapper>
      )}
    </Fragment>
  );
};

export default MsgBubblel;
