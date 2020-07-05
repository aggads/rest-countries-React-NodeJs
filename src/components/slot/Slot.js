import React, { Component } from 'react';
import { Button, Card, Alert } from 'react-bootstrap';
import './Slot.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment } from '../../actions';
import Lemon from '../../assets/images/lemon.svg'
import Cherry from '../../assets/images/cherry.svg'
import Apple from '../../assets/images/apple.svg'
import Banana from '../../assets/images/banana.svg'
// import Icon from './../icon/icon';


class Slot extends Component {
  constructor(props) {
    super(props);
    this.titleCase = this.titleCase.bind(this);
    this.state = {
      reel1: ['cherry', 'lemon', 'apple', 'lemon', 'banana', 'banana', 'lemon', 'lemon'],
      reel2: ['lemon', 'apple', 'lemon', 'lemon', 'cherry', 'apple', 'banana', 'lemon'],
      reel3: ['lemon', 'apple', 'lemon', 'apple', 'cherry', 'lemon', 'banana', 'lemon'],
      results: [],
      message: '',
      showSuccess: false,
      showFailed: false,
      coins: 20,
      icons: [
        {
          name: 'lemon',
          value: Lemon
        }, 
        {
          name: 'cherry',
          value:Cherry
        }, 
        {
          name: 'apple',
          value:Apple
        }, 
        {
          name: 'banana',
          value:Banana
        }
      ]
    };
  }

  findDuplicates = (arr) => {
    let sorted_arr = arr.slice().sort();
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] === sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
    }
    return results;
  }
  

  shuffle = () =>{
    if(this.state.coins > 0){
      var dummyArray = [];
      this.setState({showSuccess: false, showFailed: false, results: [], message: ''});
      
      var value1 = this.state.reel1.sort(() => Math.random() - Math.random()).find(() => true);
      var value2 = this.state.reel2.sort(() => Math.random() - Math.random()).find(() => true);
      var value3 = this.state.reel3.sort(() => Math.random() - Math.random()).find(() => true);
      
  
      console.log('------------');
      console.log('------ reel 1 = ' + value1 + '------');
      console.log('------ reel 2 = ' + value2 + '------');
      console.log('------ reel 3 = ' + value3 + '------');
      console.log('------------');

      dummyArray.push(value1, value2, value3);
  
      this.setState({coins: this.state.coins -1});

      this.props.dispatch(increment())

      if(value1 === value2 && value1 === value3){
        console.log('3 pairs');
        this.setState({showSuccess: true});
        switch (value1) {
          case 'cherry':
            this.setState({coins: this.state.coins +50});
            this.setState({message : '+50 coins'});
            break;
          case 'apple':
            this.setState({coins: this.state.coins +20});
            this.setState({message : '+20 coins'});
            break;
          case 'banana':
            this.setState({coins: this.state.coins +15});
            this.setState({message :'+15 coins'});
            break;
          case 'lemon':
            this.setState({coins: this.state.coins +3});
            this.setState({message : '+3 coins'});
            break;
          default:
            break;
        }
      }else if(value1 === value2 || value1 === value3 || value2 === value3){

        console.log('2 pairs', this.findDuplicates(dummyArray));
        var twoPairs = this.findDuplicates(dummyArray);
        var result = twoPairs[0];

        if(result !== 'lemon'){
          this.setState({showSuccess: true});
          switch (result) {
            case 'cherry':
              this.setState({coins: this.state.coins +40});
              this.setState({message : '+40 coins'});
              break;
            case 'apple':
              this.setState({coins: this.state.coins +10});
              this.setState({message : '+10 coins'});
              break;
            case 'banana':
              this.setState({coins: this.state.coins +5});
              this.setState({message :'+5 coins'});
              break;
            default:
              break;
          }
        }else{
          this.setState({showFailed: true});
          this.setState({message: 'You lose, try again !'});
        }
      }else{
        console.log('you lose');
        this.setState({showFailed: true});
        this.setState({message: 'You lose, try again !'});
      }
      console.log('result', dummyArray, this.state.coins);
    }else{
      this.setState({showFailed: true});
      this.setState({message: 'No more coins, please, reload'})
    }
    
    this.setState({results: dummyArray});
    dummyArray = [];
  }
  
  titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }

  render() {

    const reels = this.state.results.map(
      (item, i) =>
      {
        for (let index = 0; index < this.state.icons.length; index++) {
          const icon = this.state.icons[index];
          if(item === icon.name){              
            return(
              <span key={i} className="reels">
              <img src={icon.value} alt={this.titleCase(item)} width="50" height="50"/>
              </span>
            )
          }
        }
      });
    return (
      <div className="slot">
        <Card className="text-center">
          <Card.Header></Card.Header>
          <span className="coins">Coins {this.state.coins < 0 ? 0 : this.state.coins}</span>
          <Card.Body>
            <Card.Title><h1>Slot</h1></Card.Title>
            <br/>
            <Card.Text>
            {reels}
            </Card.Text>
            <br/>
            <Button  variant="dark" size="lg" onClick={this.shuffle}>Spin</Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            <h5>Rules</h5>
              <ul>
                <li>
                  3 cherries in a row: won 50 coins
                </li>
                <li>
                  2 cherries in a row: won 40 coins
                </li>
                <li>
                  2 Apples in a row: won 10 coins
                </li>
                <li>
                  3 Bananas in a row: won 15 coins
                </li>
                <li>
                  2 Bananas in a row: won 5 coins
                </li>
                <li>
                  3 lemons in a row: won 3 coins
                </li>
              </ul>
          </Card.Footer>
        </Card>
        <Alert variant="success" show={this.state.showSuccess}>
            <Alert.Heading>{this.state.message}</Alert.Heading>
        </Alert>
        <Alert variant="danger" show={this.state.showFailed}>
            <Alert.Heading>{this.state.message}</Alert.Heading>
        </Alert>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increment, dispatch) }
}
export default connect(mapDispatchToProps)(Slot);