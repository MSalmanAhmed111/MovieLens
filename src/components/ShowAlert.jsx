import React from "react";
import { Alert } from "@mui/material";

export default function ShowAlert(props) {
  return (
    <>
      <Alert severity={props.theme}>
        {props.text}
      </Alert>
    </>
  );
}
