import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class Slot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reel1: ['cherry', 'lemon', 'apple', 'lemon', 'banana', 'banana', 'lemon', 'lemon'],
      reel2: ['lemon', 'apple', 'lemon', 'lemon', 'cherry', 'apple', 'banana', 'lemon'],
      reel3: ['lemon', 'apple', 'lemon', 'apple', 'cherry', 'lemon', 'banana', 'lemon'],
      coins: 20

    };
  }

  shuffle = () =>{
    // if(this.state.coins > 0){
      var value1 = this.state.reel1.sort(() => Math.random() - Math.random()).find(() => true);
      var value2 = this.state.reel2.sort(() => Math.random() - Math.random()).find(() => true);
      var value3 = this.state.reel3.sort(() => Math.random() - Math.random()).find(() => true);
      
  
      console.log('------------');
      console.log('------ reel 1 = ' + value1 + '------');
      console.log('------ reel 2 = ' + value2 + '------');
      console.log('------ reel 3 = ' + value3 + '------');
      console.log('------------');
  
      var result = [];
  
      result.push(value1, value2, value3)
  
      this.setState({coins: this.state.coins -1})
  
      const equallLemon = arr => arr.every( v => v === 'lemon' )
      equallLemon( result )

      const equallCherries = arr => arr.every( v => v === 'cherry' )
      equallCherries( result )
  
      if( equallLemon( result )){
        this.setState({coins: this.state.coins + 3})
        console.log('YOU WON, + 3 coins');
      }else if(equallCherries( result )){
        this.setState({coins: this.state.coins + 50})
        alert('YOU WON, + 50 coins');
      }
  
      // switch (key) {
      //   case equallLemon( result ):
      //     if( allEqual( result )){
      //       console.log('YOU WON');
      //     }
      //     break;
      
      //   default:
      //     break;
      // }
      
      console.log('result', result, this.state.coins);
      
    // }else{
    //   alert('No coins, please reload')
    // }
  }
  render() {
    return (
      <div className='slot'>
          <span>Slot work</span>
          <Button onClick={this.shuffle}></Button>
      </div>
    )
  }
}
