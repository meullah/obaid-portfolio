import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import Typography from "@mui/material/Typography";
import { config } from "../editable-stuff/config";
export default function CustomizedTimeline() {
  return (
    <div>
      <div>
        <Typography variant="h4" sx={{ padding: "2rem 5rem" }}>
          {config.DesignProcessTagLine}
        </Typography>
      </div>
      <div>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            ></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: "#ffc107" }}>
                <PsychologyRoundedIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "#ffc107" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                variant="h4"
                component="span"
                sx={{ color: "#ffc107" }}
              >
                {config.DesignProcess[0].name}
              </Typography>
              <Typography>{config.DesignProcess[0].desc}</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            ></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "#ffc107" }} />
              <TimelineDot color="primary">
                <EngineeringRoundedIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h4" component="span" color="primary">
                {config.DesignProcess[1].name}
              </Typography>
              <Typography>{config.DesignProcess[1].desc}</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "primary.main" }} />
              <TimelineDot color="primary" variant="outlined">
                <VisibilityRoundedIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h4" component="span" color="primary">
                {config.DesignProcess[2].name}
              </Typography>
              <Typography>{config.DesignProcess[2].desc}</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              <TimelineDot color="secondary">
                <ListAltRoundedIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h4" component="span" color="secondary">
                {config.DesignProcess[3].name}
              </Typography>
              <Typography>{config.DesignProcess[3].desc}</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}
