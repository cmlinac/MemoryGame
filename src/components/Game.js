import React from 'react';
import Picture from './Picture';
import '../css/Game.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: this.initializePictures(),
      score: 0
    };
  }

  initializePictures() {
    const pictures = [
      {
        name: '1',
        src: 'https://i2.wp.com/jonathanjeter.com/images/Square_200x200.png',
      },
      {
        name: '2',
        src: 'https://i2.wp.com/jonathanjeter.com/images/Square_200x200.png',
      },
      {
        name: '3',
        src: 'https://i2.wp.com/jonathanjeter.com/images/Square_200x200.png',
      },
      {
        name: '4',
        src: 'https://i2.wp.com/jonathanjeter.com/images/Square_200x200.png',
      },
      {
        name: '5',
        src: 'https://i2.wp.com/jonathanjeter.com/images/Square_200x200.png',
      },
      {
        name: '6',
        src: 'https://i2.wp.com/jonathanjeter.com/images/Square_200x200.png',
      },
      {
        name: '7',
        src: 'https://i2.wp.com/jonathanjeter.com/images/Square_200x200.png',
      },
      {
        name: '8',
        src: 'https://i2.wp.com/jonathanjeter.com/images/Square_200x200.png',
      },
      {
        name: '9',
        src: 'https://i2.wp.com/jonathanjeter.com/images/Square_200x200.png',
      },
      {
        name: '10',
        src: 'https://i2.wp.com/jonathanjeter.com/images/Square_200x200.png',
      },
      {
        name: '11',
        src: 'https://i2.wp.com/jonathanjeter.com/images/Square_200x200.png',
      },
      {
        name: '12',
        src: 'https://i2.wp.com/jonathanjeter.com/images/Square_200x200.png',
      },
    ];
    pictures.forEach(element => element.isClicked = false);
    console.log(pictures);
    return pictures;
  }

  handleClick(i) {
    console.log(i);
    // check if picture is clicked
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
      <div className="container">
        <div className="game-board">
          {this.renderPictures()}
        </div>
      </div>
    );
  }

  renderPictures() {
    const pictures = this.state.pictures;
    return pictures.map((pic, idx) => <Picture src={pic.src} name={pic.name} value={idx} key={pic.name} onClick={i => this.handleClick(idx)}/>);
  }

  shuffle(pictures) {
    for (let i = pictures.length - 1; i >= 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      // swaps elements i and j
      [pictures[i], pictures[j]] = [pictures[j], pictures[i]];
    }
  }

  restartGame() {
    this.setState({
      // Game manages state of pictures
      pictures: this.initializePictures(),
      score: 0
    });
  }
}

export default Game;