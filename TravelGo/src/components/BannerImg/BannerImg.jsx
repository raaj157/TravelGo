import React from 'react'

const BannerImg = ({img}) => {
    const bgImage = {
        backgroundImage: `URL(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
    }
  return (
    <div data-aos="zoom-in" className="h-[400px] w-full" style={bgImage}>
      
    </div>
  );
};

export default BannerImg;
