import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { config } from "../editable-stuff/config";
import { HashLink } from "react-router-hash-link";
import LandingPage from "./about-componenents/LandingPage";

import { styled } from "@mui/material/styles";

const Root = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    height: "100vh",
  },
}));

const About = () => {
  return (
    <div>
      <Root container spacing={2} style={{ padding: "2%" }}>
        <Grid item xs={12} md={5} sx={{ margin: "auto" }}>
          <img
            style={{
              width: "75%",
              maxHeight: "100%",
              borderRadius: "15%",
            }}
            src="images/obaid.png"
            alt="Obaid"
          />
          <Typography variant="h4" fontStyle={"italic"}>
            {config.TagLine}
          </Typography>
        </Grid>
        <Grid item xs={12} md={7} style={{ textAlign: "left", margin: "auto" }}>
          <div>
            <Typography fontSize="1.5rem" variant="h4">
              {config.Intro}
            </Typography>
            <br />
            <Typography fontSize="1.5rem" variant="body1">
              {config.IntroDesc}
            </Typography>
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <HashLink
                smooth
                to="#landingPage"
                style={{ textDecoration: "none" }}
              >
                <Button variant="outlined" style={{ textDecoration: "none" }}>
                  More about me
                </Button>
              </HashLink>
            </div>
          </div>
        </Grid>
      </Root>

      <LandingPage />
    </div>
  );
};
export default About;
