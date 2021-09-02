/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import {Fragment, useRef} from 'react';
import Head from 'next/head';
import styled, {createGlobalStyle} from 'styled-components';
import menu from '../public/assets/icons/menu.svg';
import Menu from '../components/organisms/Menu';
import {useState, useEffect} from 'react';
import SearchChat from '../components/molecules/SearchChat';
import CardChat from '../components/organisms/CardChat';
import CardChatProfile from '../components/organisms/CardChatProfile';
import SendMsg from '../components/molecules/SendMsg';
import MsgBubblel from '../components/atoms/MsgBubblel';
import {io} from 'socket.io-client';
import {default as axios} from '../configs/axios';
import {useRouter} from 'next/router';
import swal from 'sweetalert';
import {logout} from '../redux/actions/userAction';
import {useDispatch} from 'react-redux';
import NoMessage from '../components/molecules/NoMessage';
import SideProfile from '../components/organisms/SideProfile';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notif from '../public/assets/icons/notif.svg';
import SimpleReactValidator from 'simple-react-validator';

const Globalstyle = createGlobalStyle`
body{
    font-family: rubix-regular;
}
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 992px) {
    width: 100%;
  }
`;

const Chats = styled.div`
  width: 100%;
  background-color: white;
  padding: 40px;
  border-right: 1px solid #e5e5e5;
  position: relative;
  min-height: 100vh;
  transition: all 200ms ease-in-out;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 992px) {
    width: 25%;
    /* width: 100%; */
  }
`;

const Chat = styled.div`
  width: 0%;
  background-color: var(--bg-chat);
  height: 100vh;
  position: fixed;
  right: 0;
  overflow-y: auto;
  padding-bottom: 130px;
  transition: all 200ms ease-in-out;

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
  font-family: raphtalia;
  /* font-size: 400px; */
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

export const getServerSideProps = async (ctx) => {
  try {
    const cookie = ctx.req.headers.cookie || '';
    const ResdataUser = await axios.get('/user/checktoken', {headers: {cookie}});
    const ResAllDataUser = await axios.get('/user/getallusers', {headers: {cookie}});
    const dataUser = ResdataUser.data.data;
    const datausers = ResAllDataUser.data.data;
    return {
      props: {
        dataUser,
        datausers,
        cookie,
      },
    };
  } catch (err) {
    // console.log(err);
    return {
      redirect: {
        permanent: false,
        destination: '/auth/login',
      },
      props: {
        err: 'Invalid credentials',
      },
    };
  }
};

const Index = (props) => {
  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  const validator = useRef(new SimpleReactValidator({ className: 'fs-1 text-danger' }));
  const {push} = useRouter();
  const users = props.datausers;
  const token = props.cookie;
  const [user, setuser] = useState(props.dataUser);
  const [dropMenu, setdropMenu] = useState(0);
  const [message, setmessage] = useState();
  const [messages, setmessages] = useState([]);
  const [socket, setsocket] = useState();
  const [userInChat, setuserInChat] = useState({});
  const [profileMenu, setprofileMenu] = useState(0);
  const [avatar, setavatar] = useState(`${process.env.API_SERVER_URL}${user.avatar}`);
  const [lastMSG, setlastMSG] = useState('');
  const [controlWidth, setcontrolWidth] = useState(0)
  const dispatch = useDispatch();
  const [formProfile, setformProfile] = useState({
    username: user.username || '',
    phone_number: user.phone_number || '',
    avatar: '',
    bio: user.bio || '',
  });

  useEffect(() => {
    if (!socket) {
      const socket = io(process.env.API_SERVER_URL, {
        query: {
          token: token,
        },
      });
      setsocket(socket);
    }
  }, []);

  useEffect(() => {
    if (socket) {
      socket.off('msgFromBackEnd');
      socket.on('msgFromBackEnd', (msg) => {
        setlastMSG(msg);
        if (userInChat.user_id === msg.sender_id) {
          setmessages((old) => {
            return [...old, msg];
          });
        } else {
          toast.info(`NEW MESSAGE FROM ${msg.sender_name}`, {
            position: 'top-center',
            icon: <img src={notif.src} alt="" />,
            closeOnClick: true,
          });
        }
      });
    }
  }, [socket, userInChat.user_id]);

  useEffect(() => {
    scrollToBottom()
  }, [messages]);


  const handleSend = () => {
    {
      message &&
        socket.emit('sendmsg', {message, recipient_id: userInChat.user_id, sender_name: user.name}, (cbBackend) => {
          setlastMSG(cbBackend);
          console.log(cbBackend);
          setmessages((old) => {
            return [...old, cbBackend];
          });
        });
      setmessage('');
    }
  };

  const getMessages = async (user_id, token) => {
    try {
      const dataMessages = await axios.get(`messages/getmessages/${user_id}`, {headers: {token}});
      const userChat = await axios.get(`user/showbyid/${user_id}`);
      setuserInChat(userChat.data.data);
      setmessages(dataMessages.data.data);
      setcontrolWidth(1)
      setlastMSG(dataMessages.data.data[dataMessages.data.data.length - 1]);
      console.log(lastMSG);
    } catch (error) {
      swal('Error', 'Cant get data chat, please try again later', 'error');
      push('/auth/login');
    }
  };

  const handleLogout = () => {
    dispatch(logout(push));
  };

  const hanldeFormUpdateProfile = (e) => {
    setformProfile({
      ...formProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleAvatar = (e) => {
    const urlImg = URL.createObjectURL(e.target.files[0]);
    setavatar(urlImg);
    setformProfile({
      ...formProfile,
      avatar: e.target.files[0],
    });
  };

  const handleUpdateProfile = () => {
    const formData = new FormData();
    formData.append('username', formProfile.username);
    formData.append('phone_number', formProfile.phone_number);
    formData.append('bio', formProfile.bio);
    formData.append('avatar', formProfile.avatar);
    axios
      .post('/user/updateuser', formData)
      .then((res) => {
        const newToken = res.data.data.token;
        axios
          .get('/user/checktoken', {headers: {cookie: newToken}})
          .then((newData) => {
            setuser(newData.data.data);
            swal('Success', 'Profile updated successfully', 'success');
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        swal('Update profile error', err.response.data.message, 'error').then(() => {
          setavatar(`${process.env.API_SERVER_URL}${user.avatar}`);
        });
      });
  };

  const handleDeleteMessage = (message_id, user_id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this message',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`/messages/delete/${message_id}`)
          .then(async () => {
            const dataMessages = await axios.get(`messages/getmessages/${user_id}`, {headers: {token}});
            setmessages(dataMessages.data.data);
            swal('Success', 'Message successfully deleted', 'success');
          })
          .catch((err) => {
            console.log(err.response);
            swal('Failed', 'Delete message failed, please try again later', 'error');
          });
      }
    });
  };

  return (
    <Fragment>
      <Head>
        <title>FlyDove | {user.username ? user.username : user.name}</title>
      </Head>
      <Globalstyle />
      <Wrapper>
        <Chats className={controlWidth === 1 && 'control-width-chats'}>
          {profileMenu === 0 ? (
            <>
              <Banner>
                <Textbanner>FlyDove</Textbanner>
                <IMG
                  src={menu.src}
                  alt="menu-icon"
                  onClick={() => (dropMenu === 0 ? setdropMenu(1) : setdropMenu(0))}
                />
              </Banner>
              {dropMenu === 1 && <Menu logoutEvt={handleLogout} profileEvt={() => setprofileMenu(1)} />}
              <SearchChat
                className="ms-0 ms-lg-4 ms-md-2 mt-3 mt-md-4 mt-lg-5"
                // onChange={(e) => console.log(e.target.value)}
                // clickPlus={() => console.log('plus click')}
              />
              {users &&
                users.map((user, index) => (
                  <CardChat
                    key={index}
                    className="mt-3"
                    name={user.username ? user.username : user.name}
                    count="0"
                    // LastChat={`Message from ${user.username ? user.username : user.name}`}
                    LastChat={
                      lastMSG && (lastMSG.recipient_id == user.user_id) | (lastMSG.sender_id == user.user_id)
                        ? lastMSG.message
                        : ''
                    }
                    active={user.online === 1 ? true : false}
                    img={`${process.env.API_SERVER_URL}${user.avatar}`}
                    onClick={() => getMessages(user.user_id)}
                  />
                ))}
            </>
          ) : (
            <SideProfile
              name={user.name}
              phone_number={user.phone_number}
              bio={user.bio}
              username={user.username ? user.username : user.name}
              img={avatar}
              OutProfile={() => {
                setprofileMenu(0);
                setdropMenu(0);
              }}
              onChange={(e) => hanldeFormUpdateProfile(e)}
              onUpdate={handleUpdateProfile}
              onUpload={(e) => handleAvatar(e)}
            />
          )}
        </Chats>
        <Chat className={controlWidth === 1 && 'control-width-chat'}>
          {userInChat.user_id ? (
            <>
              <CardChatProfile
              backChats={() => setcontrolWidth(0)}
                name={userInChat.name}
                active={userInChat.online}
                img={`${process.env.API_SERVER_URL}${userInChat.avatar}`}
              />
              <MSG>
                {messages &&
                  messages.map((message, index) => (
                    <>
                      <MsgBubblel
                        key={index}
                        msg={message.message}
                        user={user.user_id === message.sender_id}
                        time={message.time}
                        onClick={() => handleDeleteMessage(message.message_id, userInChat.user_id)}
                      />
                    </>
                  ))}
                  <div ref={messagesEndRef} />
              </MSG>
              <SendMsg value={message} onChange={(e) => setmessage(e.target.value)} onSend={() => handleSend()} />
              <ToastContainer limit={2} />
            </>
          ) : (
            <NoMessage />
          )}
        </Chat>
      </Wrapper>
    </Fragment>
  );
};

export default Index;
