import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      pictures: [],
    };
  }

  componentDisMount(){
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+process.env.REACT_APP_API_KEY+'&tags=catsper_page-10%page=l&format=json&nojsoncallback=1')
    .then((response)=>{
      return response.json();
    })
    .then(function(j){
      let picArray = j.photos.photo.map((pic) => {
        var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'.pic.id+'_'+pic.secret+'.jpg';
        return (<img alt ="dogs" src = {srcPath}></img>)
      })
      this.setState({pictures: picArray});
    }.bind(this))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is supposed to be like Flickr's Justifiedsomething</h1>
        </header>
        <p className="App-intro">
          Please pretend there're some pictures here.
          {this.state.pictures[20]}
        </p>
        <li>I know there isn't any, but just pretend there is.</li>
        <li>But seriously, how can I do this exercise again?</li>
        <li>This feels like I'm just ranting but it looks as if I ask them "How do you breath?" and they reply "Just breath" when I question them about this homework</li>
        <li>Well, coding is hard though...</li>
      </div>
    );
  }
}

// class Image extends Component {
//     constructor (props) {
//         super(props);

//         this.state = {
//             hover: false
//         };
//     }

//   }
// export default class PersonList extends React.Component {
//   state = {
//     persons: []
//   }

//   componentDidMount() {
//     axios.get(`https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=ab8b7fe92f547d33e6daa3d8b41a5800&format=rest&auth_token=72157700407928011-d8e9f95c7efecebf&api_sig=1834a468510ce6649cdb1602ec726271`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//   }

//   render() {
//     return (
//       <ul>
//         { this.state.persons.map(person => <li>{person.name}</li>)}
//       </ul>
//     )
//   }
// }

export default App;
