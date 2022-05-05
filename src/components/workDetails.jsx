import * as React from "react";
import Typography from "@mui/material/Typography";

const Details = (props) => {
  return (
    <>
      <Typography
        variant="h2"
        noWrap
        component="div"
        sx={{ mr: 2, display: { xs: "block" } }}
      >
        details about {props.data.title}
      </Typography>
    </>
  );
};
export default Details;
