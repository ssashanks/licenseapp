import React, { Component } from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "This is state text",
      num: 0,
      buttonNumber: 1
    }
    
  }

  updateState (element) {
    this.setState({
      text: element.target.value,
      num: 1
      });
  }

  updateButton() {
    this.setState({buttonNumber: this.state.buttonNumber+1});
  }

  render() {
    //props
    let text = this.props.txt;
    let cat = this.props.cat;
    
    return (
      <div className="App">    
        {/*<p>{text}: {cat}</p>*/}
        <p>{this.state.text} -> {this.state.num}</p>
        <InputComponent update={this.updateState.bind(this)}/>
        <Button updatetimes={this.updateButton.bind(this)}>I <Heart/> React {this.state.buttonNumber} times</Button>
      </div>
    );
  }
}

const Button = (props) => <button onClick={props.updatetimes}>{props.children}</button>
const Heart = () => <span> Love </span>
// App.propTypes = {
//   txt: React.propTypes.string,
//   cat: React.PropTypes.number.isRequired
// }

App.defaultProps = {
  txt: "default text",
  cat: 0
}

const InputComponent = (props) =>  <input type="text" onChange={props.update}/>

// const App = () => <h1>Hello Egg</h1>
export default App;
