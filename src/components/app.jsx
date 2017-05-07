import React from 'react';
import { render } from 'react-dom';
import VideoPageHeader from "./video-page-header";
import VideoContentInner from "./video-content-inner";

class App extends React.Component {

	constructor() {
		super();
    this.state = {
      response: null,
    }
	}

	componentWillMount() {

    var url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw'

    fetch(url)
    .then(function (response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then((response) => {
      this.setState({
        response
      })
    });
  }

	render() {

	  if(this.state.response) {
      return (
        <section>
          <VideoPageHeader />
          <VideoContentInner
            items={this.state.response.items}
          />
        </section>
      )
    } else {
	    return(
	      <div><h1>Loading...</h1></div>
      )
    }


	}

}

export default App;
