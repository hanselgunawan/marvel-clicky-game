import React from "react";

let mainBackground = {
    backgroundColor:"#000000"
};

let boardStyle = {
    marginLeft:50
};

const Main = props =>
    <div className="row" style={mainBackground}>
        <div className="col-lg-3"></div>
        <div className="col-lg-6" style={boardStyle}>
            <div className="row">
                {props.results.map(data =>
                    <div className="col-lg-4 imgHover" onClick={props.handleImageClick.bind(null, data.imgId)}>
                        <img className="img-responsive heroImg" alt={data.imgAlt} src={data.imgUrl}/>
                    </div>
                )}
            </div>
        </div>
        <div className="col-lg-3"></div>
    </div>

export default Main;
