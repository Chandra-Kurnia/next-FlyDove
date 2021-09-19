import cookie from 'cookie';
import axiosConfigs from '../../configs/axios';
import {cookieParser} from 'cookie-parser';
import formidable from 'formidable';
const FormData = require('form-data');
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

const updateprofile = async (req, res) => {
  if (req.method === 'POST') {
    const form = formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
      const formdata = new FormData();
      formdata.append('username', fields.username);
      formdata.append('phone_number', fields.phone_number);
      formdata.append('bio', fields.bio);
      {
        files.avatar
          ? formdata.append('avatar', fs.createReadStream(files.avatar.path))
          : formdata.append('avatar', '');
      }

      // formdata.submit(`${process.env.API_SERVER_URL}/user/updateuser`,(err, result) => {
      formdata.submit(
        {
          host: 'flyddove.herokuapp.com',
          // port: 4215,
          method: 'post',
          path: '/user/updateuser',
          headers: {
            cookie: req.headers.cookie,
          },
        },
        (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).json({
              error: err,
            });
          } else {
            const newToken = result.rawHeaders[11].split(';')[0].slice(6);
            res.setHeader('Access-Control-Allow-Headers', '*');
            res.setHeader('Access-Control-Allow-Credentials', true);
            res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.setHeader(
              'Set-Cookie',
              cookie.serialize('token', newToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
                maxAge: 1000 * 60 * 12,
                path: '/',
              })
            );
            res.status(result.statusCode).json({
              data: newToken,
              msg: result.statusMessage
            });
          }
        }
      );

      // axiosConfigs
      //   // .post('/user/updateuser', formdata, {headers: {cookie: req.headers.cookie}})
      //   ({
      //     method: 'post',
      //     url: `${process.env.API_SERVER_URL}/user/updateuser`,
      //     body: formdata,
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //       cookie: req.headers.cookie
      //     }
      //   })
      //   .then((result) => {
      //     const newToken = result.data.data;
      //     res.setHeader('Access-Control-Allow-Headers', '*');
      //     res.setHeader('Access-Control-Allow-Credentials', true);
      //     res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      //     res.setHeader(
      //       'Set-Cookie',
      //       cookie.serialize('token', newToken, {
      //         httpOnly: true,
      //         secure: true,
      //         sameSite: 'strict',
      //         maxAge: 1000 * 60 * 12,
      //         path: '/',
      //       })
      //     );
      //     axiosConfigs
      //       .get('/user/checktoken', {headers: {cookie: `token=${newToken}`}})
      //       .then((profileUpdated) => {
      //         res.status(200).json({
      //           data: profileUpdated.data,
      //         });
      //       })
      //       .catch((err) => {
      //         res.status(400).json({
      //           error: err.response.data,
      //         });
      //       });
      //   })
      //   .catch((err) => {
      //     res.status(400).json({
      //       error: err.response.data,
      //     });
      //   });
    });
  }
};

export default updateprofile;
