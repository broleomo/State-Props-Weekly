import React from 'react';
import PlayListItem from './PlayListItem';
import PlayListForm from './PlayListForm';

import {Button} from 'reactstrap';

    export default class Playlist extends React.Component {
      state = {
        songs: []
      }

        componentDidMount(){
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
              return results.json();
            }).then(data => {
              this.setState({songs: data});
              console.log("state", this.state.songs);
            })
        }

        fetchData = (e) => {
                e.preventDefault();
                fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
                  return results.json();
                }).then(data => {
                  this.setState({songs: data});
                    console.log(data[6].songArtist);
                })

              }
        render(){
        return (
          <div>
         <Button className="update-button" onClick={this.fetchData} color="success">Update List</Button>
         {this.state.songs.map((song, i) =>
           <PlayListItem key={i} {...song}/>
         )}
         </div>
       );
      }
    }
