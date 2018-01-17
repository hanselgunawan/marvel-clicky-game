import React from "react";

let headerStyle = {
    backgroundColor:"#000000",
    textAlign:"center",
    color:"#ffffff",
    fontFamily:"'Sedgwick Ave Display', cursive"
};

const Header = props =>
    <div>
        <div className="row" style={headerStyle}>
            <div className="col-lg-4">
                <h1>Marvel's Clicky Game</h1>
            </div>
            <div className="col-lg-4">
                <h1>{props.clickStatus === "" ? "Click an image to begin!" : props.clickStatus === "true" ? "You guessed correctly!" : "You guessed incorrectly!"}</h1>
            </div>
            <div className="col-lg-4">
                <h1>Score:{props.score} | Top Score:{props.topScore}</h1>
            </div>
        </div>
    </div>

export default Header;
