import {default as axios} from '../../configs/axios';
import cookie from 'cookie';

const logout = (req, res) => {
  return new Promise((resolve, reject) => {
    axios
      .get('/user/logout')
      .then(() => {
        res.setHeader(
          'Set-Cookie',
          cookie.serialize('token', '', {
            maxAge: -1,
            path: '/',
          })
        );
        res.status(200);
        res.writeHead(302, { Location: '/' });
        res.end();
        resolve();
      })
      .catch((err) => {
        res.status(400).json({
          error: err.response.data,
        });
        reject();
      });
  });
};

export default logout;
