import axios from "axios";

const datamessages = (req, res) => {
    axios.get(`${process.env.API_SERVER_URL}/messages/getmessages/${req.query.userId}`, {headers: {cookie: req.headers.cookie}})
    .then((result) => {
        res.status(200).json({
            data: result.data.data
        })
    })
    .catch((err) => {
        res.status(400).json({
            error: err.response.data
        })
    })
}

export default datamessages;