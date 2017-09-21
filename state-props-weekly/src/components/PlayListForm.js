import React from 'react';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';


export default class PlayListForm extends React.Component {

  state = {
      userName: '',
      songNotes: '',
      songArtist: '',
      songTitle: ''
    }

  addToList = (e) => {
    e.preventDefault();
    let listItem = JSON.stringify(this.state);
    this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});


    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  }
  ).then(response => {
    console.log(response, "yay");

  }).catch(err => {
    console.log(err, "boo!");
  });
  this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
}

handleUserName = (e) => this.setState({userName: e.target.value});
handlesongNotes = (e) => this.setState({songNotes: e.target.value});
handleSongArtist = (e) => this.setState({songArtist: e.target.value});
handleSongTitle = (e) => this.setState({songTitle: e.target.value});

render(){
  return(
    <Form>
        <FormGroup className="form">
        <br/>
          <Label for="username">Username:</Label>
          <Input type="text" id="username" placeholder="Type in your username" onChange={this.handleUserName} value={this.state.userName} />
          <br/>
          <Label for="artist">Artist/Band:</Label>
          <Input type="text" name="artist" id="artist" placeholder="Search for an artist" onChange={this.handleSongArtist} value={this.state.songArtist}/>
          <br/>
          <Label for="song">Song Title:</Label>
          <Input type="text" name="song" id="song" placeholder="Search for a song" onChange={this.handleSongTitle} value={this.state.songTitle}/>
          <br/>
          <Label for="notes">Notes:</Label>
          <Input type="textarea" name="notes" id="notes" placeholder="Notes..." onChange={this.handlesongNotes} value={this.state.songNotes} />
          <br/>
          <Button onClick={this.addToList} color="primary">Submit</Button>
        </FormGroup>
    </Form>
  )
}
}
