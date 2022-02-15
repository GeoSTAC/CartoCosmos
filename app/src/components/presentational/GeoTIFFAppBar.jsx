import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from "@material-ui/core/styles";
import "../../styles.css";
import GeoTiffViewer from "../../js/GeoTiffViewer.js";
/**
 * CSS styling for this component using js to css
 */
const useStyles = makeStyles(theme => ({


}));


/**
 * Main component of the console, which arranges all subcomponents into a grid
 * and passes in target information via props.
 *
 * @component
 */
 export default function GeoTIFFAppBar(props) {
    const classes = useStyles();
    
  
    return (
        <Box sx={{ flexGrow: 1, background: "#f8f9fa", color:"#f8f9fa" }}>
        <AppBar position="static" sx={{ flexGrow: 1, background: "black", color:"#f8f9fa" }}>
          <Toolbar sx={{ flexGrow: 1, background: "black", color:"#f8f9fa" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, alignContent:"center",
            textAlign:"center" }}>
              B01_009860_1804_<br></br>XN_00N195W__<br></br>
              F18_042892_1802_<br></br>XN_00N195W_DEM
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

