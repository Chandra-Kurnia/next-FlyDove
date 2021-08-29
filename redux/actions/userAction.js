import swal from 'sweetalert';
import {default as axios} from '../../configs/axios';

export const register = (data, push) => async (dispatch) => {
  try {
    await axios.post('/user/register', data);
    swal('success', 'Register success, now you can login with yout account', 'success').then(() => {
      push('/auth/login');
    });
  } catch (error) {
    if(error?.response?.data?.error[0]?.msg === undefined){
        swal('Register error', error?.response?.data?.message, 'error')
    }else{
        swal('Register error', error?.response?.data?.error[0]?.msg, 'error');
    }
  }
};
