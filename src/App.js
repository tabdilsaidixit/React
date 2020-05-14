import React from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
class App extends React.Component {
  state = {
    userName: "Sai"
  }

  userNameChangeHandler = (event) => {
    this.setState({ userName: event.target.value });
  }

  deleteCharacterHandler = (index) => {
    const text = this.state.userName.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userName : updatedText});
  }


  render() {
    const symbols = this.state.userName.split('').map((ch, index) => {
      return <CharComponent 
      key ={index} 
      id={index} 
      clickHandler = {()=>this.deleteCharacterHandler(index)} 
      symbol={ch} />;
    })


    return (
      <div className="App">
        <h1> Assignment -2 List and conditional rendering</h1>
        <input type="text" placeholder="Input the User Name" onChange={this.userNameChangeHandler} value={this.state.userName} />
        <ValidationComponent userName={this.state.userName} />
        {symbols}
      </div>
    );

  }
}

export default App;
