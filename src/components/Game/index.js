import React from 'react';
import Picture from '../Picture';
import './Game.css';
import originalPictures from '../../pictures.json';
import Header from "../Header";
import Footer from "../Footer";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: this.initializePictures(),
      score: 0
    };
  }

  // add isClicked = false to each picture so it doesn't have to be in the JSON
  initializePictures() {
    const pictures = originalPictures;
    pictures.forEach(element => element.isClicked = false);
    console.log(pictures);
    return pictures;
  }

  handleClick = (i) => {
    console.log(i);
    // check if picture was already clicked
    const pictures = this.state.pictures;
    // if it is, user loses
    if (pictures[i].isClicked) {
      alert("Lost");
      this.restartGame();
    } else {
      // if it isn't, increase their score
      const score = this.state.score + 1;
      // if their score is equal to the number of pictures, they win
      if (score === pictures.length) {
        alert("Win");
        this.restartGame();
      } else {
        // increase their score, shuffle the array and save the new state
        pictures[i].isClicked = true;
        this.shuffle(pictures);
        this.setState({
          pictures: pictures,
          score: score
        });
      }
    }
  }

  render() {
    return (
      // header (score, right/wrong)
      <div className="container">
        <Header score={this.state.score} />
        <div className="game-board">
          {this.state.pictures.map((pic, idx) => <Picture src={pic.src} name={pic.name} value={idx} key={pic.name} onClick={() => this.handleClick(idx)}/>)}
        </div>
        <Footer/>
      </div>
      // footer
    );
  }

  renderPictures = () => {
    const pictures = this.state.pictures;
    return pictures.map((pic, idx) => <Picture src={pic.src} name={pic.name} value={idx} key={pic.name} onClick={this.handleClick}/>);
  }

  shuffle(pictures) {
    for (let i = pictures.length - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      // swaps elements i and j
      [pictures[i], pictures[j]] = [pictures[j], pictures[i]];
    }
  }

  restartGame = () => {
    this.setState({
      // Game manages state of pictures
      pictures: this.initializePictures(),
      score: 0
    });
  }
}

export default Game;