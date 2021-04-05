import React from "react";
import {useState, useEffect} from "react";
import Carousel from "react-material-ui-carousel";
import useFirestore from "../../../hooks/useFirestore";
import axios from "axios";
import firebase from "firebase/app";


// let el=document.querySelector(".Carousel-root-9");
// el.style.height="100%";


function Modal1({ selectedImg, setselectedImg, props }) {
  const { docs, imgarr } = useFirestore(props);

  const handleClose = (e) => {
    setselectedImg(null);
  };
  const handleDelete = (e) => {
    const config = {
      headers: {
        Authorization: localStorage.FBIdToken,
      },
      data: {
        name: selectedImg.name,
      },
    };
    firebase.auth().onAuthStateChanged((user) => {
          
      if (user) {
        console.log(user.uid)
         axios.delete(`/image/${user.uid}`, config).then(() => setselectedImg(null));
      } 
    });
    ;
  };
  // useEffect(() => {
  //   let el=document.querySelector(".Carousel-root-9");
  //    el.style.height="100%"
       
  //   },[]);
  
  return (
    
    <div className="backdrop">
      <button className="close" style={{ width: "50%" }} onClick={handleClose}>
        Close
      </button>
      <button className="delete" style={{ width: "50%" }} onClick={handleDelete}>
        Delete Image
      </button>
      
      <Carousel
        index={imgarr.indexOf(selectedImg.id)}
        autoPlay={false}
        fullHeightHover={true}
        animation={"fade"}
        timeout={12}
        indicatorContainerProps={{
          style: { width: "0px", height: "0px", marginTop: "60%" },
        }}
        navButtonsAlwaysVisible={true}
      >
        {selectedImg && docs.map((doc) => <img src={doc.url} alt={doc.name} />)}
      </Carousel>
  
      
    </div>
  );
}


export default Modal1;
