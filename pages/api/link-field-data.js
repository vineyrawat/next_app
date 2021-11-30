import axios from "axios";

export default function handler(req, res) {
  const { fieldName } = req.query;
  axios
    .get(`https://uat.extensionerp.com/api/resource/${fieldName}`, {
      headers: {
        Authorization: "token 489cd5d9b35c1d9:7cf0f1cf580fc13",
      },
    })
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}
