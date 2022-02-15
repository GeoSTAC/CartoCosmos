import React from "react";
import GeoTIFFAppBar from "../presentational/GeoTIFFAppBar.jsx";
import { makeStyles } from "@material-ui/core/styles";

/**
 * Controls css styling for this component using js to css
 */
const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    height: 100,
    width: "100%"
  },
  consAppbar: {
    maxWidth: 800,
    height: 100,
    width: "auto"
  }
});

/**
 * Container component that holds the ConsoleAppBar and all of its subcomponents
 *
 * @component
 *
 */
export default function GeoTiffConsole(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GeoTIFFAppBar target={props.target} className={classes.consAppbar} />
    </div>
  );
}
