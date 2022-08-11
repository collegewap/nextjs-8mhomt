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
    templateName: "header-auth",
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
                  borderRight: "2px solid rgba(255, 255, 255, .5)",
                  paddingLeft: "5px",
                  width: "160px",
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
                  marginLeft: "5px",
                  width: "30px",
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
                label: "Payouts",
                style: {
                  color: "#B9B9B9",
                  margin: "5px",
                  opacity: 1,
                  marginLeft: "10px",
                  width: "40px",
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
              type: "CustomDropdownMenu",
              options: {
                color: "#B9B9B9",
                label: "Rule management",
                background: "#007bff",
                linkType: "link",
                menuStyle: {
                  backgroundColor: "#323232",
                  border: "4px solid #323232",
                  borderRadius: "4px",
                  padding: "0",
                },
                redirect: {
                  type: "route",
                  path: "/rules",
                },
                menuItems: [
                  { label: "Over View", key: "over", targetPath: "/" },
                  {
                    label: "Connectors",
                    key: "con",
                    targetPath: "/connector-details",
                  },
                  {
                    label: "Select Workspace",
                    key: "select",
                    targetPath: "/select-workspace",
                  },
                ],
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
                  margin: "5px",
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
            {
              type: "Heading",
              options: {
                content: "Solution Partner Program",
                level: 2,
                style: {
                  margin: "0 auto",
                  paddingRight: "250px",

                  textAlign: "left",

                  letterSpacing: "0.96px",
                  color: "#FFFFFF",
                  opacity: 1,
                },
              },
            },
            {
              type: "CustomDropdownMenu",
              options: {
                color: "#B9B9B9",
                label: "Workspace",
                background: "#007bff",
                linkType: "button",
                menuStyle: {
                  backgroundColor: "#323232",
                  border: "4px solid #323232",
                  borderRadius: "4px",
                  padding: "0",
                },
                menuItems: [
                  { label: "Over View", key: "over", targetPath: "/" },
                  {
                    label: "Connectors",
                    key: "con",
                    targetPath: "/connector-details",
                  },
                  {
                    label: "Select Workspace",
                    key: "select",
                    targetPath: "/select-workspace",
                  },
                ],
              },
            },
            {
              type: "CustomDropdownMenu",
              options: {
                color: "#B9B9B9",
                label: "Workspace",
                background: "#007bff",
                linkType: "settings",
                menuStyle: {
                  backgroundColor: "#323232",
                  border: "4px solid #323232",
                  borderRadius: "4px",
                  padding: "0",
                },
                menuItems: [
                  { label: "Over View", key: "over", targetPath: "/" },
                  {
                    label: "Connectors",
                    key: "con",
                    targetPath: "/connector-details",
                  },
                  {
                    label: "Select Workspace",
                    key: "select",
                    targetPath: "/select-workspace",
                  },
                ],
              },
            },
            {
              type: "CustomDropdownMenu",
              options: {
                color: "#B9B9B9",
                label: "Workspace",
                background: "#007bff",
                linkType: "profile",
                isProfilemenu: true,
                profileImage: "https://i.imgur.com/Z7AzH2c.png",
                menuStyle: {
                  backgroundColor: "#323232",
                  border: "4px solid #323232",
                  borderRadius: "4px",
                  padding: "0",
                },
                menuItems: [
                  {
                    name: "",
                    id: "sec1",
                    children: [
                      {
                        label: "ROLE",
                        key: "role",
                        targetPath: "/select-workspace",
                      },
                      {
                        label: "Workspace admin",
                        key: "over",
                        targetPath: "/",
                      },
                    ],
                  },
                  {
                    name: "",
                    id: "sec2",
                    children: [
                      {
                        label: "WORKSPACES",
                        key: "workspace",
                        targetPath: "/connector-details",
                      },
                      {
                        label: "Solution Partners",
                        key: "select",
                        targetPath: "/select-workspace",
                      },
                    ],
                  },
                ],
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
