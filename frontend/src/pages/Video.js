import React, { useEffect, useState } from "react";
import pupper from "../images/Pupper.jpg";
import VideoSlider from "../component/VideoSlider";

//mui stuff
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CssBaseLine from "@material-ui/core/CssBaseline";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
// import IconButton from "@material-ui/core/IconButton";
// import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
// import Skeleton from "@material-ui/lab/Skeleton";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

//axios
import axios from "axios";

//External Styles
import "../css/videoStyle.css";

const useStyles = makeStyles({
  welcome: {
    position: "relative",
    color: "white",
    display: "flex",
    paddingLeft: "4rem",
    minHeight: "600px",
    backgroundSize: "cover",
    backgroundImage: `url(${pupper})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },

  contents: {
    position: "relative",
    color: "white",
    minHeight: "800px",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingTop: "3rem",
    paddingBottom: "3rem",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },

  rows: {
    paddingBottom: "50px",
  },

  rowsTitle: {
    // position: "relative",
    paddingBottom: "40px",
    justifyContent: "space-around",
  },

  circProgress: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

function Video() {
  //states
  const [firstLevelFolderName, setfirstLevelFolderName] = useState(null);
  const [folderName, setfolderName] = useState(null);
  const [ifChanged, setifChanged] = useState(false);
  //styles
  const classes = useStyles();

  const repeatMovieCode = firstLevelFolderName ? (
    <div>
      {firstLevelFolderName.map((element) => (
        <div>
          <VideoSlider
            genre={element.split("/")[1]}
            path={element}
            obj={folderName}
          />
        </div>
      ))}
    </div>
  ) : (
    <div className={classes.circProgress}>
      <CircularProgress disableShrink />
    </div>
  );

  //effects
  useEffect(() => {
    axios
      .post("/getFoldersName", {
        filename: "movies",
      })
      .then((item) => {
        setfolderName(item);
      });
  }, []);

  useEffect(() => {
    // console.log("What the phase?", folderName);
    // let tempArr = folderNameObject;
    let arr = [];
    if (folderName != null) {
      folderName.data.forEach((obj) => {
        let tempVar = obj.path.split("/");
        if (
          obj.type == "application/x-www-form-urlencoded;charset=UTF-8" &&
          tempVar.length == 3
        ) {
          arr.push(obj.path);
        }
      });
      setfirstLevelFolderName(arr);
    }
  }, [folderName]);

  return (
    <div>
      <div
        className="welcome"
        style={{
          backgroundImage:
            'url("https://firebasestorage.googleapis.com/v0/b/nostalgiadev-1f319.appspot.com/o/movieImages%2FBonanza.jpg?alt=media&token=6a85b5be-1cf1-4d80-bfce-39ad988b803b")',
        }}
      >
        <CssBaseLine />
        <Box mt={9}>
          <Typography variant="h3">Bonanza</Typography>
          <Box mt={5}>
            <Typography variant="h4">Watch the classic show today!</Typography>
          </Box>
        </Box>
      </div>
      <div className={classes.contents}>{repeatMovieCode}</div>
    </div>
  );
}

export default Video;
