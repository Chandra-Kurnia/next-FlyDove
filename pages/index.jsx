import {Fragment} from 'react';
import Head from 'next/head';
import styled, {createGlobalStyle} from 'styled-components';
import {useSelector} from 'react-redux';
import menu from '../public/assets/icons/menu.svg';
import Menu from '../components/organisms/Menu';
import {useState} from 'react';
import SearchChat from '../components/molecules/SearchChat';
import CardChat from '../components/organisms/CardChat';

const Globalstyle = createGlobalStyle`
body{
    font-family: rubix-regular;
}
`;

const Wrapper = styled.div`
  display: flex;
`;

const Chats = styled.div`
  width: 100%;
  background-color: white;
  height: 20px;
  padding: 40px;
  border-right: 1px solid #e5e5e5;
  position: relative;
  height: 100vh;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 992px) {
    width: 25%;
  }
`;

const Chat = styled.div`
  width: 0%;
  background-color: red;
  height: 10vh;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 992px) {
    width: 85%;
  }
`;

const Textbanner = styled.h1`
  color: var(--primary);
  font-weight: bolder;
`;

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IMG = styled.img`
  cursor: pointer;
`;

const Index = () => {
  const [dropMenu, setdropMenu] = useState(0);
  const {profile} = useSelector((state) => state.userReducer);
  console.log(profile);
  return (
    <Fragment>
      <Head>
        <title>Telegram | Home</title>
      </Head>
      <Globalstyle />
      <Wrapper>
        <Chats>
          <Banner>
            <Textbanner>Telegram</Textbanner>
            <IMG src={menu.src} alt="menu-icon" onClick={() => (dropMenu === 0 ? setdropMenu(1) : setdropMenu(0))} />
          </Banner>
          {dropMenu === 1 && <Menu />}
          <SearchChat
            className="ms-0 ms-lg-4 ms-md-2 mt-3 mt-md-4 mt-lg-5"
            onChange={(e) => console.log(e.target.value)}
            clickPlus={() => console.log('plus click')}
          />
          <CardChat className='mt-3' name='Candra Kurniawaaaaaaaaaaaaaaaaaaaaan' count='7' LastChat='Why did you do that? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur odio earum at?'/>
          <CardChat className='mt-3' name='Candra Kurniawaaaaaaaaaaaaaaaaaaaaan' count='70' LastChat='Why did you do that? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur odio earum at?'/>
          <CardChat className='mt-3' name='Candra Kurniawaaaaaaaaaaaaaaaaaaaaan' count='76' LastChat='Why did you do that? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur odio earum at?'/>
        </Chats>
        <Chat></Chat>
      </Wrapper>
    </Fragment>
  );
};

export default Index;
