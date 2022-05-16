import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);
export default async (req, res) => {
  await cors(req, res);
  if (req.body.password === "Test@123") {
    res.status(200).json({});
  } else {
    res.status(400).json({
      success: false,
      message: "Invalid email and password combination",
    });
  }
};
