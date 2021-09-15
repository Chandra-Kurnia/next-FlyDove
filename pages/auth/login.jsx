/* eslint-disable react-hooks/exhaustive-deps */
import {Fragment, useState, useRef, useEffect} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Head from 'next/head';
import AuthWrapper from '../../components/organisms/AuthWrapper';
import InputAuthMolecul from '../../components/molecules/InputAuthMolecul';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/actions/userAction';
import {useRouter} from 'next/router';
import SimpleReactValidator from 'simple-react-validator';
import {default as axios} from '../../configs/axios';

const Globalstyle = createGlobalStyle`
body{
    background-color: white;
    @media (min-width: 768px) {
        background-color: var(--bg-auth);
    }
    
    @media (min-width: 992px) {
        background-color: var(--bg-auth);
    }
}
`;

const Wrapper = styled.div`
  height: 100vh;

  @media (min-width: 768px) {
    height: 100vh;
  }

  @media (min-width: 992px) {
    height: 100vh;
  }
`;

export const getServerSideProps = async (ctx) => {
  try {
    const cookie = ctx.req.headers.cookie || '';
    const ResdataUser = await axios.get('/user/checktoken', {headers: {cookie}});
    const user = ResdataUser.data.data;
    return {
      props: {
        user,
      },
    };
  } catch (error) {
    return {
      props: {
        user: {},
      },
    };
  }
};

const Login = (props) => {
  const validator = useRef(new SimpleReactValidator({className: 'fs-6 text-danger'}));
  const {push} = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (Object.keys(props.user).length > 0) {
      push('/');
    }
  }, []);
  const [form, setform] = useState({
    email: '',
    password: '',
  });
  const handleForm = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    dispatch(login(form, push));
  };
  return (
    <Fragment>
      <Head>
        <title>FlyDove | Login</title>
      </Head>
      <Globalstyle />
      <Wrapper className="d-flex justify-content-center align-items-center mt-lg-4 mt-md-5 mt-0">
        <AuthWrapper
          onChange={(e) => handleForm(e)}
          onClick={handleLogin}
          back={false}
          title="Login"
          welcomeMSG="Hi, welcome back"
          fpSpan={true}
          questionAuth="Dont have an account ?"
          parent="Login"
        >
          <InputAuthMolecul
            className="pt-3"
            label="email"
            type="text"
            name="email"
            onChange={(e) => handleForm(e)}
            onFocus={() => validator.current.showMessageFor('email')}
          />
          {validator.current.message('email', form.email, 'required|email')}
          <InputAuthMolecul
            className="pt-3"
            label="password"
            type="password"
            name="password"
            onChange={(e) => handleForm(e)}
            onFocus={() => validator.current.showMessageFor('password')}
          />
          {validator.current.message('password', form.password, 'required')}
        </AuthWrapper>
      </Wrapper>
    </Fragment>
  );
};

export default Login;
