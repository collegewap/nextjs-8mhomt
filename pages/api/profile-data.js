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

  const profileData = {
    firstName: "Abhishek",
    lastName: "EH",
    emailAddress: "abhi@example.com",
    phoneNumber: "9999999999",
    jobRole: "Technical",
    title: "title",
  };

  res.status(200).json(profileData);
};
