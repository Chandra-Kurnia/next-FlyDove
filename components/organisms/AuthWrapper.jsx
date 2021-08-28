/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import {Fragment} from 'react';
import styled from 'styled-components';
import SpanAuth from '../atoms/SpanAuth';
import {useRouter} from 'next/router';
import ButtonAuth from '../atoms/ButtonAuth';
import Separator from '../atoms/Separator';
import Link from 'next/link';
import Back from '../../public/assets/icons/back.svg';

const Wrapper = styled.div`
  /* Mobile */
  background-color: white;
  width: 100%;
  position: relative;

  /* ipad */
  @media (min-width: 768px) {
    width: 50%;
    border-radius: 30px;
  }

  /* Desktop */
  @media (min-width: 992px) {
    width: 30%;
    border-radius: 30px;
  }
`;

const SpanFP = styled.span`
  color: var(--primary);
  text-align: right;
  display: block;
  margin-top: 30px;
  margin-bottom: 30px;
  cursor: pointer;
`;

const A = styled.a`
  color: var(--primary);
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: var(--primary);
    cursor: pointer;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 30px;
  left: 30px;
`;

const AuthWrapper = (props) => {
  const router = useRouter();
  return (
    <Fragment>
      <Wrapper className="pt-3 pb-5 d-flex">
        <div className="container ps-5 pe-5">
          <div className="text-center mb-5">
            {props.back === true && <Image onClick={() => router.back()} src={Back.src} alt="back" />}
            <SpanAuth text={props.title} />
          </div>
          <span>{props.welcomeMSG}</span>
          {props.children}
          {props.parent === 'Login' && <SpanFP onClick={() => router.push('/auth/forgotpw')}>Forgot password</SpanFP>}
          <ButtonAuth onClick={props.onClick} className="bg-custom-primary mt-2" text={props.parent} />
          {props.parent === 'send' ? (
            ''
          ) : (
            <>
              <Separator text={`${props.parent} with`} className="mt-2 mb-2" />
              <ButtonAuth className="bg-outline-custom-primary" text="Google" />
              <span className="d-block text-center pt-4">
                {props.parent === 'Login' ? (
                  <>
                    Dont have account ?
                    <Link href="/auth/signup">
                      <A>Sign up</A>
                    </Link>
                  </>
                ) : (
                  <>
                    Already have account?
                    <Link href="/auth/login">
                      <A>Login</A>
                    </Link>
                  </>
                )}
              </span>
            </>
          )}
        </div>
      </Wrapper>
    </Fragment>
  );
};

export default AuthWrapper;
