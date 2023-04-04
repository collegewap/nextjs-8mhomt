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

  const payouts = {
    content: [
      {
        name: "Payout 1",
        createdBy: "john1@example.com",
        connectorName: "Connector 1",
        createdOn: "10 Mar 2023",
        ruleset: {
          name: "Ruleset 1",
        },
        status: "active",
      },
      {
        name: "Payout 2",
        createdBy: "john2@example.com",
        connectorName: "Connector 2",
        createdOn: "20 Mar 2023",
        ruleset: {
          name: "Ruleset 2",
        },
        status: "inactive",
      },
      {
        name: "Payout 3",
        createdBy: "john3@example.com",
        connectorName: "Connector 3",
        createdOn: "30 Mar 3023",
        ruleset: {
          name: "Ruleset 3",
        },
        status: "draft",
      },
      {
        name: "Payout 4",
        createdBy: "john3@example.com",
        connectorName: "Connector 3",
        createdOn: "30 Mar 3023",
        ruleset: {
          name: "Ruleset 3",
        },
        status: "draft",
      },
      {
        name: "Payout 5",
        createdBy: "john3@example.com",
        connectorName: "Connector 3",
        createdOn: "30 Mar 3023",
        ruleset: {
          name: "Ruleset 3",
        },
        status: "active",
      },
      {
        name: "Payout 6",
        createdBy: "john3@example.com",
        connectorName: "Connector 3",
        createdOn: "30 Mar 3023",
        ruleset: {
          name: "Ruleset 3",
        },
        status: "inactive",
      },
    ],
  };

  res.status(200).json(payouts);
};
