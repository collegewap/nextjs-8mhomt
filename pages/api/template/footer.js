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

  const response = {
    templateName: "footer",
    programType: "Payout",
    version: "1.0",
    formData: {
      type: "Page",
      options: {
        container: {},
        schema: {},
        uischema: {
          type: "Flex",
          options: {
            spectrumProps: {
              justifyContent: "center",
            },
            style: {
              backgroundColor: "#6E6E6E",
            },
          },
          elements: [
            {
              type: "RichText",
              options: {
                content: " &nbsp;",
              },
            },
          ],
        },
      },
    },
    data: {},
  };
  res.status(200).json(response);
};
