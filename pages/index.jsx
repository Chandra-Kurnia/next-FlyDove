import { Fragment } from "react";
import Head from 'next/head'
import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";

const Globalstyle = createGlobalStyle`
body{
    font-family: rubix-regular;
}
`;

const Index = () => {
  const {profile} = useSelector(state => state.userReducer)
  console.log(profile);
  return (
    <Fragment>
      <Head>
        <title>
          Telegram | Home
        </title>
      </Head>
      <Globalstyle/>
      <h1>Calon home page</h1>
    </Fragment>
  );
}

export default Index;