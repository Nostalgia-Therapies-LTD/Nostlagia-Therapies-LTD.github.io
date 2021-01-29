import React from 'react';
import Main_photo from './Main_photo';
import My_moments from './My_moments';
import { BrowserRouter,Route, Switch } from "react-router-dom";
import Cat_folder from "../component/photo_coms/folders/Cat_folder";
import Dog_folder from "../component/photo_coms/folders/Dog_folder";
import Nature_folder from "../component/photo_coms/folders/Nature_folder";
import "../photo.css";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CssBaseLine from "@material-ui/core/CssBaseline";
import animal from "../images/moments/Animals.jpg";
//import Folder2 from './comps/Folder2';
//import Folder3 from './comps/Folder3';

const styles = () => ({
  welcome: {
    color: "white",
    display: "flex",
    paddingLeft: "4rem",
    minHeight: "600px",
    backgroundSize: "cover",
    backgroundImage: `url(${animal})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },

  content: {
    marginBottom: "100px",
    padding: "80px 0px 200px 0px",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    minHeight: "800px",
  },

});

function Photo(props) {
  const { classes } = props;
  return (
    <BrowserRouter>
      <div className={classes.welcome}>
        <CssBaseLine />
        <Box mt={9}>
          <Typography variant="h4">Photos</Typography>
          <Box mt={5}>
            <Typography variant="h5">Let's go back to this moment and live it in forever</Typography>
            <Typography variant="h5">Take me away to better days</Typography>
          </Box>
        </Box>
      </div>
    <div className="App">
      <Switch>
        <Route exact path="/photo" component={Main_photo}></Route>
        <Route exact path="/photo/My moments" component={My_moments}></Route>
        <Route exact path="/photo/Cats" component={Cat_folder}></Route>
        <Route exact path="/photo/Dogs" component={Dog_folder}></Route>
        <Route exact path="/photo/Nature" component={Nature_folder}></Route>
    </Switch>
  </div>
  </BrowserRouter>
  );
}

export default withStyles(styles)(Photo);



