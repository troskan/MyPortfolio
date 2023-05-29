import React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

function IsLoading(props) {
  // Corrected prop name
  return (
    <div className="center">
      <Stack sx={{ width: "30%", color: "grey.500" }} spacing={1}>
        <h2>Loading {props.string}..</h2>
        <LinearProgress color="success" />
      </Stack>
    </div>
  );
}

export default IsLoading;
