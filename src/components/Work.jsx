import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import itemData from "../itemData"; // todo: change location

const useStyles = makeStyles({
  root: {
    transition: "transform 0.385s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
  },
});

export default function TitlebarImageList() {
  const classes = useStyles();
  const viewDetails = (imgName) => {
    window.open(imgName.replace(" ", "-"));
  };
  return (
    <ImageList
      sx={{ p: 2, flexGrow: 1, display: { xs: "block", sm: "grid" } }}
      cols={3}
    >
      {itemData.map((item) => (
        <ImageListItem sx={{ overflow: "hidden" }} key={item.img}>
          <img
            className={classes.root}
            src={`${item.img}?w=600&fit=crop&auto=format`}
            srcSet={`${item.img}?w=600&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            sx={{
              background: "rgba(0,0,0,0)",
            }}
            position="top"
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
                onClick={() => viewDetails(item.title)}
              >
                <Typography sx={{ pr: 1 }}>view more</Typography>
                <InfoIcon />
              </IconButton>
            }
          />
          <ImageListItemBar
            sx={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, " +
                "rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%)",
            }}
            title={item.title}
            subtitle={item.author}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
