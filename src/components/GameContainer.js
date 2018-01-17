import React, { Component } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Main from "./Main";
import Footer from "./Footer";
import Style from "style-it";

class GameContainer extends Component {
    state = {
        score: 0,
        topScore: 0,
        clickStatus:"",
        results: [
            {
                imgId:0,
                imgUrl: "http://clipart.info/images/ccovers/1510684304iron-man-tsum-tsum-marvel.png",
                imgAlt: "Iron-Man",
                imgClickStatus: false
            },
            {
                imgId:1,
                imgUrl: "http://clipart.info/images/ccovers/1510684305Captain-America-tsum-tsum-marvel.png",
                imgAlt: "Captain-America",
                imgClickStatus: false
            },
            {
                imgId:2,
                imgUrl: "http://clipart.info/images/ccovers/1510684304She-Hulk-tsum-tsum-marvel.png",
                imgAlt: "Gamora",
                imgClickStatus: false
            },
            {
                imgId:3,
                imgUrl: "http://clipart.info/images/ccovers/1510684304Spider-Man-tsum-tsum-marvel.png",
                imgAlt: "Spider-Man",
                imgClickStatus: false,
            },
            {
                imgId:4,
                imgUrl: "http://clipart.info/images/ccovers/1510684304Hulk-tsum-tsum-marvel.png",
                imgAlt: "Hulk",
                imgClickStatus: false
            },
            {
                imgId:5,
                imgUrl: "http://clipart.info/images/ccovers/1510684304Rocket-Raccoon-tsum-tsum-marvel.png",
                imgAlt: "Rocket",
                imgClickStatus: false
            },
            {
                imgId:6,
                imgUrl: "http://clipart.info/images/ccovers/1510684304tsum-tsum-marvel.png",
                imgAlt: "Winter-Soldier",
                imgClickStatus: false
            },
            {
                imgId:7,
                imgUrl: "http://clipart.info/images/ccovers/1510684303Falcon-tsum-tsum-marvel.png",
                imgAlt: "Falcon",
                imgClickStatus: false
            },
            {
                imgId:8,
                imgUrl: "http://clipart.info/images/ccovers/1510684304Captain-tsum-tsum-marvel.png",
                imgAlt: "Captain-Marvel",
                imgClickStatus: false
            }
        ]
    };

    componentDidMount = () => {
        this.shuffle(this.state.results);
    };

    shuffle = resultsArr => {
        let currentIndex = resultsArr.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = resultsArr[currentIndex];
            resultsArr[currentIndex] = resultsArr[randomIndex];
            resultsArr[randomIndex] = temporaryValue;
        }
        this.setState({
            results:resultsArr
        });
    };

    updateScore = () => {
        this.setState({
            score: this.state.score + 1
        });
    };

    updateTopScore = () => {
        this.setState({
            topScore: this.state.topScore + 1
        });
    };

    emptyScore = () => {
        this.setState({
            score: 0
        });
    };

    handleImageClick = imgId => {
        let result = this.state.results;
        let resultIdx = -1;
        for(let i=0;i<result.length;i++)
        {
            if(result[i].imgId === imgId) resultIdx = i;
        }
        if(!this.state.results[resultIdx].imgClickStatus)
        {
            result[resultIdx].imgClickStatus = true;
            this.updateScore();
            if(this.state.score >= this.state.topScore)
            {
                this.updateTopScore();
            }
            this.setState({
                clickStatus:"true",
                result
            });
        }
        else
        {
            this.setState({
                clickStatus:"false"
            });
            this.state.results.map(data => data.imgClickStatus = false);
            this.emptyScore();
        }
        this.shuffle(this.state.results);
    };

    render() {
        return (
            <div>
                <Style>
                    {
                        `
                            .heroImg{
                                transition: 0.1s ease-in all;
                                width: 140px;
                                height: 140px;
                            }

                            .imgHover{
                                transition: 0.1s ease-in all;
                                border: 3px solid maroon;
                                border-radius: 4px;
                                width: 180px;
                                height: 150px;
                                margin:30px;
                            }

                            .imgHover:hover{
                                box-shadow: 0 10px 2px -2px gray;
                            }

                            .imgHover:hover .heroImg{
                                height: 155px !important;
                                margin-top:-5px;
                            }
                        `
                    }
                </Style>
                <Banner />
                <Header
                    score={this.state.score}
                    topScore={this.state.topScore}
                    clickStatus={this.state.clickStatus}
                />
                <Main
                    results={this.state.results}
                    handleImageClick={this.handleImageClick}
                />
                <Footer />
            </div>
        );
    }
}

export default GameContainer;