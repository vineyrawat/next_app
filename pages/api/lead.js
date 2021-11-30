import { validateData } from "../../utils/leadValidation";
import axios from "axios";

export default function handler(req, res) {
  if (req.method === "POST") {
    const status = validateData(req.body);
    if (!status.isValid) {
      res.status(400).json(status);
    } else {
      axios
        .post("https://uat.extensionerp.com/api/resource/Lead", req.body, {
          headers: {
            Authorization: "token 489cd5d9b35c1d9:7cf0f1cf580fc13",
          },
        })
        .then((response) => {
          res.status(200).json(response.data);
        })
        .catch((error) => {
          if (error.response) {
            return res.status(error.response.status).json(error.response.data);
          }
          res.status(500).json(error);
        });
    }
  }
}

// 7cf0f1cf580fc13
