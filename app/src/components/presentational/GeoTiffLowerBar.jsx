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
 export default function GeoTIFFLowerBar(props) {
    const classes = useStyles();
  
    return (
        <Box sx={{ flexGrow: 1, background: "#f8f9fa", color:"#f8f9fa" }}>
          <AppBar position="static" sx={{ flexGrow: 1, background: "black", color:"#f8f9fa" }}>
            <Toolbar sx={{ flexGrow: 1, background: "black", color:"#f8f9fa" }}>
              <a 
              href="https://www.stacindex.org/catalogs/usgs-astrogeology-ard#/item/3q52Dkr5nBe3g684y9fzjwTFMjyyQ66QitBuDrNggEBLhzMJFUvkYYXvSppyx71tvJpVWQkxLgEHK/EfcLDDAkyqgqdedCsXSnoX9MeZsck2rgn9VSh6qcU6NKm3JW8iTFYVyMD4rN7aVHyoShQDyiNMKS7tH9RZyb2DCamgnJ9/4Ua8RY2czjpMAi8zD1iqiZQznkdFkpsgn1zW31rg1cTxirHqoh6TnBwts2y791MDR8YLLUGngx5tbyUChysEiZ72or8CU1WxfF9YH7V88c5R4NMXqDdUKqzSi7yQU4XeXdYz15ZrRG9hGWYTkAfG2Nezj9AAcUv6qX6zyBm3xD2yvtrKTXobVCpsUNQjBXzZxFFUKhG4hYt6wU8ur53XnKVQC578zs8wUm4Mu4V9bB?si=0&t=2#9/0.455928/164.745483" 
              id="stacAsset"> 
              <h2>Assest Collection </h2> </a>
            </Toolbar>
          </AppBar>
        </Box>
    );
  }

