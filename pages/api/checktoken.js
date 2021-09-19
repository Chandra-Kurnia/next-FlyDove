import axiosConfigs from "../../configs/axios";

const checktoken = (req, res) => {
    if(req.method === 'GET'){
        axiosConfigs.get('/user/checktoken', {headers: {cookie: req.headers.cookie}})
        .then((result) => {
            res.status(200).json({
                data: result.data.data
            })
        })
        .catch((err) => {
            res.status(500).json({
                error: err.response.data
            })
        })
    }
}

export default checktoken;