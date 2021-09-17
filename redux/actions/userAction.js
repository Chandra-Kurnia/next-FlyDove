import swal from 'sweetalert';
import axiosConfigs from '../../configs/axios';
import axios from 'axios'

const register = (data, push) => async (dispatch) => {
  try {
    await axios.post(`${process.env.API_SERVER_URL}/user/register`, data);
    swal('success', 'Register success, now you can login with yout account', 'success').then(() => {
      push('/auth/login');
    });
  } catch (error) {
    console.log(error.response);
    if (error?.response?.data?.error?.error[0]?.msg === undefined) {
      swal('Login failed', error?.response?.data?.error?.message, 'error');
    } else {
      swal('Login failed', error?.response?.data?.error?.error[0]?.msg, 'error');
    }
  }
};

const login = (form, push) => async (dispatch) => {
  try {
    // const result = await axios.post('https://skydove.vercel.app/api/login', form);
    // const result = await axios.post('http://localhost:3000/api/login', form);
    const result = await axios.post(`${process.env.APP_URL}/api/login`, form);
    const user = result.data.data;
    dispatch({type: 'USER_LOGIN', payload: user});
    push('/');
  } catch (error) {
    if (error?.response?.data?.error?.error[0]?.msg === undefined) {
      swal('Login failed', error?.response?.data?.error?.message, 'error');
    } else {
      swal('Login failed', error?.response?.data?.error?.error[0]?.msg, 'error');
    }
  }
};

const logout = (push) => async () => {
  try {
    axiosConfigs.get('user/logout').then(() => {
      swal('Success', 'Logout success', 'success').then(() => {
        push('/auth/login');
      });
    });
  } catch (err) {
    console.log(err);
  }
};

const updateProfile = (data) => async(dispatch) => {
  try{
    const formData = new FormData();
    formData.append('username', data.username);
    formData.append('phone_number', data.phone_number);
    formData.append('bio', data.bio);
    formData.append('avatar', data.avatar);
    await axiosConfigs.post('/user/updateuser', formData)
    swal('Success', 'Your data succesfully updated', 'success')
  }catch(err){
    swal('Register error', error?.response?.data?.message, 'error');
  }
}

export {login, register, logout, updateProfile};
