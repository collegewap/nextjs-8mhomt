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
    programType: "Payout",
    version: "1.0",
    formData: {
      schema: {
        type: "object",
        properties: {
          email: {
            type: "string",
            pattern:
              "^[a-z0-9][a-z0-9-_.+]+@([a-z-]|[a-z0-9-]?[a-z0-9-]+[a-z0-9-]).[a-z0-9-]{2,20}(?:.[a-z-]{2,20})?(?:.[a-z-]{2,20})?(?:.[a-z-]{2,20})?$",
          },
          password: {
            type: "string",
          },
        },
        required: ["password", "email"],
      },
      uischema: {
        type: "VerticalLayout",
        options: {
          style: {
            maxWidth: "400px",
            margin: "0 auto",
          },
        },
        elements: [
          {
            type: "Heading",
            options: {
              content: "Log In",
              level: 1,
            },
          },
          {
            type: "Control",
            label: "Email",
            scope: "#/properties/email",
            options: {
              errors: {
                pattern: "Invalid Email",
              },
            },
          },
          {
            type: "Control",
            label: "Password",
            scope: "#/properties/password",
            options: {
              format: "password",
            },
          },
          {
            type: "SubmitButton",
            options: {
              label: "Log In",
              spectrumProps: {
                variant: "cta",
              },
              submitUrl: "https://country-state.vercel.app/api/login",
            },
          },
        ],
      },
      data: {},
    },
    data: {},
  };

  res.status(200).json(response);
};
