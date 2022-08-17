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
    templateName: "header-generic",
    programType: "Generic",
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
                content:
                  "<span style='padding-left: 24px; background: url(\"Adobe_Corporate_Vertical_Lockup_White_RGB.svg\") no-repeat; height: 16px'>Adobe </span>",
                style: {
                  margin: "5px 0  0 ",
                  borderRight: "2px solid rgba(255, 255, 255, .5)",
                  paddingLeft: "19px",
                  width: "100px",
                  textAlign: "left",
                  letterSpacing: "0.96px",
                  color: "#FFFFFF",
                  opacity: 1,
                },
              },
            },
            {
              type: "Link",
              options: {
                label: "Home",
                style: {
                  color: "#B9B9B9",
                  margin: "5px",
                  opacity: 1,
                  marginLeft: "5px 0px",
                  paddingLeft: "20px",
                  height: "34px",
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
            {
              type: "Link",
              options: {
                label: "About",
                style: {
                  color: "#B9B9B9",
                  margin: "5px 0px",
                  opacity: 1,
                  paddingLeft: "20px",
                  height: "34px",
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
            {
              type: "Link",
              options: {
                label: "Metrics",
                style: {
                  color: "#B9B9B9",
                  margin: "5px 0px",
                  opacity: 1,
                  paddingLeft: "20px",
                  height: "34px",
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

            {
              type: "Link",
              options: {
                label: "Insights",
                style: {
                  color: "#B9B9B9",
                  opacity: 1,
                  width: "35px",
                  height: "34px",
                  textDecoration: "none",
                  margin: "5px 0px",
                  marginRight: "auto",
                  paddingLeft: "20px",
                },
                redirect: {
                  type: "route",
                  path: "/support",
                },
                spectrumProps: {
                  isQuiet: true,
                  variant: "overBackground",
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
