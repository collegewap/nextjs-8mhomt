import Cors from "cors";
import initMiddleware from "../../../lib/init-middleware";

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

  const industries = [
    {
      title: "Advertising",
      const: 123,
    },
    {
      title: "Automotive",
      const: 456,
    },
    {
      title: "Information Technology",
      const: 789,
    },
    {
      title: "Healthcare",
      const: 234,
    },
    {
      title: "Finance",
      const: 567,
    },
    {
      title: "Hospitality",
      const: 890,
    },
    {
      title: "Retail",
      const: 345,
    },
    {
      title: "Energy",
      const: 678,
    },
    {
      title: "Education",
      const: 901,
    },
    {
      title: "Construction",
      const: 234,
    },
  ];
  res.status(200).json(industries);
};
