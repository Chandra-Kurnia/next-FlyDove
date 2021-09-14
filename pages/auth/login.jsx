import {Fragment, useState, useRef} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Head from 'next/head';
import AuthWrapper from '../../components/organisms/AuthWrapper';
import InputAuthMolecul from '../../components/molecules/InputAuthMolecul';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/actions/userAction';
import {useRouter} from 'next/router';
import SimpleReactValidator from 'simple-react-validator';

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

const Login = (props) => {
  const validator = useRef(new SimpleReactValidator({className: 'fs-6 text-danger'}));
  const {push} = useRouter();
  const dispatch = useDispatch();
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
