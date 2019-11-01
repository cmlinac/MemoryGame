import React from 'react';
import Picture from '../Picture';
import './Game.css';
import originalPictures from '../../pictures.json';
import Header from "../Header";
import Footer from "../Footer";
import Logo from '../Logo';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: this.initializePictures(),
      highScore: 0,
      score: 0,
      message: "Can you click on all 9 characters without clicking one twice?"
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
    let message;

    // if it was, user loses
    if (pictures[i].isClicked) {
      message = `You already clicked ${pictures[i].name}, c'mon son!`;
      this.setState({message});
      this.restartGame();

    } else {
      // if it isn't, increase their score
      const score = this.state.score + 1;

      // if their score is equal to the number of pictures, they win
      if (score === pictures.length) {
        message = "You won! I hear that.";
        this.setState({message});
        this.restartGame();

      } else {
        // increase their score, shuffle the array and save the new state
        pictures[i].isClicked = true;
        this.shuffle(pictures);
        message = "You know that's right! Keep going.";
        this.setState({
          pictures: pictures,
          score: score,
          // if new score > highScore, update highScore
          highScore: score > this.state.highScore ? score : this.state.highScore,
          message: message
        });
      }
    }
  }

  render() {
    return (
      <div>
        <Logo/>
        <div className="container rounded text-center">
          <Header score={this.state.score} highScore={this.state.highScore}>{this.state.message}</Header>
          <div className="game-board">
            {this.state.pictures.map((pic, idx) => <Picture src={pic.src} name={pic.name} value={idx} key={pic.name} onClick={() => this.handleClick(idx)}/>)}
          </div>
          <Footer><span role="img" aria-label="pineapple">🍍</span></Footer>
        </div>
      </div>
    );
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