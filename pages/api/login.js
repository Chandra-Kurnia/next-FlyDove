import axios from "axios";
import cookie from 'cookie'

const login = (req, res) => {
    return new Promise((resolve, reject) => {
        if(req.method === 'POST'){
            axios.post(`${process.env.API_SERVER_URL}/user/login`, req.body)
            .then((result) => {
                res.setHeader("Access-Control-Allow-Headers", "*")
                res.setHeader('Access-Control-Allow-Credentials', true)
                res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
                res.setHeader('Set-Cookie', cookie.serialize('token',result.data.data.token, {
                  httpOnly: true,
                  secure: true,
                  sameSite: 'strict',
                  maxAge: 1000*60*12,
                  path: '/'
                } ))
                res.status(200)
                res.json({data:result.data.data})
                resolve()
            })
            .catch(err => {
                res.status(400).json({
                    error: err.response.data
                })
                resolve()
            })
        }
    })
}

export default login