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
    templateName: "header",
    programType: "EC",
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
              direction: "row",
              backgroundColor: "red",
              justifyContent: "space-around",
            },
            style: {
              backgroundColor: " #323232",
              opacity: 1,
              height: "26px",
              padding: "15px 0px",
            },
          },
          elements: [
            {
              type: "RichText",
              options: {
                content: "Adobe Partner Payout",
                style: {
                  margin: "5px 0  0 ",
                  paddingLeft: "5px",
                  width: "160px",
                  textAlign: "left",
                  letterSpacing: "0.96px",
                  color: "#FFFFFF",
                  opacity: 1,
                  marginRight: "auto",
                },
              },
            },
            {
              type: "Link",

              options: {
                label: "Sign In",
                style: {
                  color: "#B9B9B9",
                  margin: "5px",
                  opacity: 1,
                  paddingRight: "25px",
                  textDecoration: "none",
                },
                redirect: {
                  type: "route",
                  path: "/",
                },
                spectrumProps: {
                  isQuiet: true,
                },
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
