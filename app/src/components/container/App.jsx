import React from "react";
import ConsoleAppBar from "../presentational/ConsoleAppBar.jsx";
import MapContainer from "./MapContainer.jsx";
import QueryConsole from "../presentational/QueryConsole.jsx";
import CreditsDisplay from "../presentational/CreditsDisplay.jsx";
import SearchAndFilterInput from "../presentational/SearchAndFilterInput.jsx";
import { makeStyles } from "@material-ui/core/styles";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import "../../styles.css";
import GeoTiffViewer from "../../js/GeoTiffViewer.js";
import GeoTIFFAppBar from "../presentational/GeoTIFFAppBar.jsx";

const useStyles = makeStyles(theme => ({
  shown: {
    display: "block",
    background: "#f8f9fa"
  },
  hidden: {
    display: "none"
  }
}))

/**
 * App is the parent component for all of the other components in the project. It
 * imports and creates all of the map and console components and contains the
 * target selector.
 *
 * @component
 */
export default function App() {
  const classes = useStyles();
  const [targetPlanet, setTargetPlanet] = React.useState("Mars");
  const [showSortBar, setShowSortBar] = React.useState(true);
  const [sortBarStyle, setSortBarStyle] = React.useState(classes.hidden);
  const geoTiffViewer = new GeoTiffViewer();

  const ShowHideSort = () => {
    setShowSortBar(!showSortBar);
    setSortBarStyle(showSortBar ? classes.shown : classes.hidden);
  }

  /**
   * Handles target body selection
   * @param {*} value selection event
   */
  const handleTargetBodyChange = value => {
    setTargetPlanet(value);
  };

  return (
    <div id="app-container">
      <div id="main-column">
        <div id="top-bar">
          <ConsoleAppBar target={targetPlanet} bodyChange={handleTargetBodyChange}  />
        </div>
        <MapContainer target={targetPlanet} />
        <div id="bottom-bar">
          <QueryConsole />
          <CreditsDisplay />
        </div>
      </div>
      <div id="right-bar">  
        <div id="sort-filter-collapsed" onClick={ShowHideSort} >
          <ArrowLeftIcon/>
          Sort and Filter
          <ArrowLeftIcon/>
        </div>
          <div className={sortBarStyle}>
            <SearchAndFilterInput target={targetPlanet}/>
            {/* instead of styled surrounding div: { showSortBar ? <SearchAndFilterInput /> : null } 
                ^ simpler but might break things if another part of the program is looking for it and it's not there? */}
          </div> 
          <br></br>
      <br></br>
      <div id = "geoTiffContainer" >
        <GeoTIFFAppBar />
        <div id="geoTiffImageDiv">
          <img id="geoTiffImage" src="" width="auto" height="700px"></img>
        </div>
        <Box sx={{ flexGrow: 1, background: "#f8f9fa", color:"#f8f9fa" }}>
          <AppBar position="static" sx={{ flexGrow: 1, background: "black", color:"#f8f9fa" }}>
            <Toolbar sx={{ flexGrow: 1, background: "black", color:"#f8f9fa" }}>
              <a 
              href="https://www.stacindex.org/catalogs/usgs-astrogeology-ard#/item/3q52Dkr5nBe3g684y9fzjwTFMjyyQ66QitBuDrNggEBLhzMJFUvkYYXvSppyx71tvJpVWQkxLgEHK/EfcLDDAkyqgqdedCsXSnoX9MeZsck2rgn9VSh6qcU6NKm3JW8iTFYVyMD4rN7aVHyoShQDyiNMKS7tH9RZyb2DCamgnJ9/4Ua8RY2czjpMAi8zD1iqiZQznkdFkpsgn1zW31rg1cTxirHqoh6TnBwts2y791MDR8YLLUGngx5tbyUChysEiZ72or8CU1WxfF9YH7V88c5R4NMXqDdUKqzSi7yQU4XeXdYz15ZrRG9hGWYTkAfG2Nezj9AAcUv6qX6zyBm3xD2yvtrKTXobVCpsUNQjBXzZxFFUKhG4hYt6wU8ur53XnKVQC578zs8wUm4Mu4V9bB?si=0&t=2#9/0.455928/164.745483" 
              id="stacAsset"> 
              <h2>Download Asset </h2> </a>
              <Button id = "closeButton" onClick={geoTiffViewer.closeViewer}>CLOSE</Button>
            </Toolbar>
          </AppBar>
        </Box>

      </div>
      </div>
    </div>
  );
}
