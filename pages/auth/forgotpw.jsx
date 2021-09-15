/* eslint-disable react-hooks/exhaustive-deps */
import {Fragment, useState, useRef, useEffect} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Head from 'next/head';
import AuthWrapper from '../../components/organisms/AuthWrapper';
import InputAuthMolecul from '../../components/molecules/InputAuthMolecul';
import SimpleReactValidator from 'simple-react-validator';
import {default as axios} from '../../configs/axios'
import { useRouter } from 'next/router';

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

const Forgotpw = (props) => {
  const {push} = useRouter()
  const validator = useRef(new SimpleReactValidator({className: 'fs-6 text-danger'}));
  useEffect(() => {
    if (Object.keys(props.user).length > 0) {
      push('/');
    }
  }, []);
  const [form, setform] = useState({
    email: '',
  });
  const handleForm = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const forgotpw = () => {
    console.log(form);
  };
  return (
    <Fragment>
      <Head>
        <title>FlyDove | Forgot Password</title>
      </Head>
      <Globalstyle />
      <Wrapper className="d-flex justify-content-center align-items-center mt-lg-4 mt-md-5 mt-0">
        <AuthWrapper
          onChange={(e) => handleForm(e)}
          onClick={forgotpw}
          back={true}
          title="Forgot password"
          welcomeMSG="You’ll get messages soon on your e-mail "
          fpSpan={true}
          questionAuth="Dont have an account ?"
          parent="send"
        >
          <InputAuthMolecul
            className="pt-3"
            label="Email"
            type="text"
            name="email"
            onChange={(e) => handleForm(e)}
            onFocus={() => validator.current.showMessageFor('email')}
          />
          {validator.current.message('email', form.email, 'required|email')}
        </AuthWrapper>
      </Wrapper>
    </Fragment>
  );
};

export default Forgotpw;
