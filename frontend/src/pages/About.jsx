import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
function About() {
  const images = [
   { url: img1 },
   { url :  img2},
   { url :  img3}

  ];

  return (
    <>
     <div>About

    </div>
   <SimpleImageSlider
    width={window.innerWidth}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
         autoPlayDelay={3}
   />
    </>
   
  )
}

export default About