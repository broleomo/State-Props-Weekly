import React, {Component} from 'react';

import {Card, CardTitle, CardText, Button} from 'reactstrap';

export default class PlayListItem extends Component {

  render(){
    return(
      <div className="card-body">
      <Card className="card" block inverse color="info">
       <CardTitle></CardTitle>
       <CardText>
       User: {this.props.userName}
       <br/>
       Artist/Band: {this.props.songArtist}
       <br/>
       Title: {this.props.songTitle}
       <br/>
       Notes: {this.props.songNotes}
       </CardText>
     </Card>
      </div>
    )
  }
}
