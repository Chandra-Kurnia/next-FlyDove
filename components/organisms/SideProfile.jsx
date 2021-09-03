import {Fragment} from 'react';
import styled from 'styled-components';
import back from '../../public/assets/icons/back.svg';
import ButtonAuth from '../atoms/ButtonAuth';
import InputAuthMolecul from '../molecules/InputAuthMolecul';

const Wrapper = styled.div`
animation-name: fadeAnimation;
animation-duration: 0.5s;
`

const TopWrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
`;

const Username = styled.span`
  display: block;
  text-align: center;
  width: 100%;
  font-size: larger;
  font-weight: bold;
  color: var(--primary);
`;

const BtnBack = styled.img`
  cursor: pointer;
`;

const AvatarWrapper = styled.div`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const Avatar = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
`;

const ImgAvatarWrapper = styled.div`
  width: 200px;
  height: 200px;
`

const Name = styled.span`
  font-size: 20px;
  font-weight: bold;
  display: block;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const SideProfile = (props) => {
  return (
    <Fragment>
      <Wrapper className="">
      <TopWrapper>
        <span onClick={props.OutProfile}>
          <BtnBack src={back.src} alt="back-icon" />
        </span>
        <Username>{props.username}</Username>
      </TopWrapper>
      <div className="d-flex justify-content-center mt-5 mb-5">
        <AvatarWrapper>
          <label htmlFor="avatar">
            <ImgAvatarWrapper>
            <Avatar src={props.img} alt="" />
            </ImgAvatarWrapper>
          </label>
          <Name>{props.name}</Name>
        </AvatarWrapper>
        <input className='d-none' type="file" name="avatar" id="avatar" onChange={(e) => props.onUpload(e)} />
      </div>
      <InputAuthMolecul
        name="username"
        label="username"
        defaultValue={props.username}
        onChange={(e) => props.onChange(e)}
      />
      <InputAuthMolecul
        className="mt-4"
        name="phone_number"
        label="phone_number"
        defaultValue={props.phone_number}
        onChange={(e) => props.onChange(e)}
      />
      <InputAuthMolecul
        className="mt-4"
        name="bio"
        label="bio"
        defaultValue={props.bio}
        onChange={(e) => props.onChange(e)}
      />
      <ButtonAuth text="Update Profile" className="mt-3 bg-custom-primary" onClick={props.onUpdate} />
      </Wrapper>
    </Fragment>
  );
};

export default SideProfile;
