
import './App.css';
import React, { Component } from 'react'
import Picture from './cuty.png'
import Timer from './component/Profile'


class App extends React.Component {
  state = {
    Person: {
      fullName : "Ben jeddou Fatma",
      bio : "Expert cyber security",
      imgSrc : Picture,
      profession : "Go my coder student"
    },
    show : false,
  };

  render() {
    var Handlechange = e =>
    {
      this.setState({show:!this.state.show})
    }
    const x=this.state.show;
    return (
      <center>
    <div>
      
      
      <button onClick={Handlechange}>{x? 'hide' : 'show'}</button>
      
      <p className='faty'>
      <h1>{this.state.Person.fullName}</h1>
        <h2>{this.state.Person.bio}</h2>
        <h2>{this.state.Person.profession}</h2>
        </p>
        <img src={Picture} alt="profile" />

      </div>
      </center>
    ); 
    }
  }

export default App;