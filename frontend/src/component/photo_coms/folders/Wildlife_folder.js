import React, {useState} from 'react';
import ImgGrid1 from "./imgGrid1"
import Modal1 from './modal1';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CssBaseLine from "@material-ui/core/CssBaseline";




function Wildlife_folder() {
    const [selectedImg, setselectedImg] = useState();
      
  return (
    <div>
      <div className="welcome" style={{backgroundImage:'url("https://firebasestorage.googleapis.com/v0/b/nostalgiadev-1f319.appspot.com/o/photofolders%2Fwildlife%2Figor-talanov-SeVOHQ4FQYQ-unsplash.jpg305?alt=media&token=21f9cb30-173e-4ac0-9846-ebe5896a4146")'}}>
        <CssBaseLine />
        <Box mt={9}>
          <Typography variant="h4">Photos</Typography>
          <Box mt={5}>
            <Typography variant="h5">Let's go back to this moment and live it in forever</Typography>
            <Typography variant="h5">Take me away to better days</Typography>
          </Box>
        </Box>
      </div>
      <div className="Photocontent">
    <Typography
       variant="h4"
       style={{ color: "white", paddingLeft: "4rem" }}
     >
       {" "}
       Wonderful Wildlife {" "}
     </Typography>
    <div className="PhotoApp">
      <ImgGrid1 props="wildlife" setselectedImg={setselectedImg}  />
      {selectedImg  && <Modal1 props="wildlife" selectedImg={selectedImg} setselectedImg={setselectedImg}/>}
    </div>
    </div>
    </div>
  );
}

export default Wildlife_folder;
