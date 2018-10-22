// import React from "react";
import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };
  //gameOwer function
  gameOver = () => {
    if(this.state.score > this.state.highscore){
      this.setState({ highscore: this.state.score},function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }
  // handleIncrement increases count by 1
  handleIncrement = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(cards[i].count === 0) {
          cards[i].count = cards[i].count +1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          this.state.cards.sort(()=> Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }

render(){
  return (
    //wrapper on display
  <Wrapper>
    
    <Header score={this.state.score} 
            highscore={this.state.highscore}>Click Card Game:</Header>
    
    {this.state.cards.map(card => ( 
      <Card
      handleIncrement={this.handleIncrement}
      id={card.id}
      key={card.id}
      image={card.image}
     />
    ))}
    </Wrapper>
    );
  }
}
export default App;
