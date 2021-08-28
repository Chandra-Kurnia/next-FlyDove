import {Fragment} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Head from 'next/head'

const Globalstyle = createGlobalStyle`
body{
    background-color: var(--bg-auth);
}
`;

const Wrapper = styled.div`
    background-color: black;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 2000px;
`

const Auth = (props) => {
  return <Fragment>
      <Head>
          <title>title</title>
      </Head>
      <Globalstyle/>
      <Wrapper>
        {props.children}
      </Wrapper>
  </Fragment>;
};

export default Auth;
