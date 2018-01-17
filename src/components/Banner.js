import React from "react";

let bannerText = {
    textAlign:"center",
    color:"white",
    backgroundImage: 'url(https://cdn.wccftech.com/wp-content/uploads/2016/06/marvel-logo.jpeg)',
    backgroundPositionY:-45,
    backgroundSize: 700,
    height: 300,
    paddingTop: 125,
    paddingRight: 100
};

const Banner = () =>
    <div className="row"  style={bannerText}>
        <div className="col-lg-12">
        </div>
    </div>

export default Banner;
