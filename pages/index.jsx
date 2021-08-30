import {Fragment} from 'react';
import Head from 'next/head';
import styled, {createGlobalStyle} from 'styled-components';
import {useSelector} from 'react-redux';
import menu from '../public/assets/icons/menu.svg';
import Menu from '../components/organisms/Menu';
import {useState} from 'react';
import SearchChat from '../components/molecules/SearchChat';
import CardChat from '../components/organisms/CardChat';
import CardChatProfile from '../components/organisms/CardChatProfile';
import ProfileImg from '../public/assets/img/profile.jpg';
import SendMsg from '../components/molecules/SendMsg';
import MsgBubblel from '../components/atoms/MsgBubblel';

const Globalstyle = createGlobalStyle`
body{
    font-family: rubix-regular;
}
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

const Chats = styled.div`
  /* width: 100%; */
  width: 100%;
  background-color: white;
  padding: 40px;
  border-right: 1px solid #e5e5e5;
  position: relative;
  min-height: 100vh;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 992px) {
    width: 25%;
  }
`;

const Chat = styled.div`
  width: 100%;
  background-color: var(--bg-chat);
  height: 100vh;
  position: fixed;
  right: 0;
  overflow-y: auto;
  padding-bottom: 130px;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 992px) {
    width: 75%;
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

const MSG = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 57vh;
  bottom: 130px;
  padding: 0px 30px;
  margin-top: 190px;
  width: 100%;
  @media (min-width: 768px) {
    padding: 0px 40px;
    min-height: 68vh;
  }

  @media (min-width: 992px) {
    padding: 0px 66px;
    min-height: 55vh;
  }
`;

const Index = () => {
  const [dropMenu, setdropMenu] = useState(0);
  const [OpenChat, setOpenChat] = useState(true);
  const [message, setmessage] = useState();
  const {profile} = useSelector((state) => state.userReducer);
  const handleSend = () => {
    console.log(message);
    setmessage('');
  };
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
          <CardChat
            className="mt-3"
            name="Candra Kurniawaan"
            count="7"
            LastChat="Why did you do that? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur odio earum at?"
            active={true}
            img={ProfileImg.src}
          />
        </Chats>
        <Chat>
          {OpenChat ? (
            <>
              <CardChatProfile name="Candra Kurniawan" active={true} img={ProfileImg.src} />
              <MSG>
                <MsgBubblel msg="Halo" user={true} />
                <MsgBubblel msg="Halo halo" user={true} />
                <MsgBubblel msg="Halo halo halo" user={true} />
              </MSG>
              <SendMsg value={message} onChange={(e) => setmessage(e.target.value)} onSend={() => handleSend()} />
            </>
          ) : (
            'Please select a chat to start messaging'
          )}
        </Chat>
      </Wrapper>
    </Fragment>
  );
};

export default Index;
