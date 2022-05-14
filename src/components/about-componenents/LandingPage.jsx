import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { config } from "../../editable-stuff/config";
import "./about.css";

const LandingPage = () => {
  return (
    <div id="landingpage" style={{ height: "100vh" }}>
      <Grid container spacing={2} style={{ padding: "2%" }}>
        <Grid item xs={12} md={5}>
          <img
            style={{
              width: "80%",
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
              <Button variant="outlined">More about me</Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default LandingPage;
