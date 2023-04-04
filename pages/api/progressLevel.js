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

  const levels = {
    level: "Gold",
    asv: {
      total: 0,
      required: 350000,
      percentage: 0,
      weightage: 0,
    },
    dealCount: {
      total: 0,
      required: 8,
      percentage: 0,
      weightage: 0,
    },
    customerReferences: {
      total: 40,
      required: 8,
      percentage: 100,
      weightage: 0,
    },
    certifications: {
      total: 2,
      required: 30,
      percentage: 6.67,
      weightage: 0,
    },
    specializations: {
      total: 6,
      required: 1,
      percentage: 100,
      weightage: 0,
    },
    region: "Americas",
    tab: "currentPath",
    partnerName: "spp16sepPDcomp",
    nextLevel: "Platinum",
    lastUpdatedDate: "04-Apr-23",
  };

  res.status(200).json(levels);
};
