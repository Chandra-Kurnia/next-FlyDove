import axiosConfigs from "../../configs/axios";

const getuserinchat = (req, res) => {
    axiosConfigs.get('/user/userinchat', {headers: {cookie: req.headers.cookie}})
    .then((result) => {
        res.status(200).json({
            data: result.data.data
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err.response.data
        })
    })
}

export default getuserinchat