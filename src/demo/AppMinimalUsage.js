import React, { Component } from 'react';
import Camera from '../lib';

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      dataUri: ""
    };
  }

  onCameraError = (error) => {
    console.error(error)
  }

  setDataUri = () => {
    let dataUri = this.refs.camera.getDataUri();
    this.setState({dataUri});
  }

  render() {
    return (
      <div>
        <Camera
          ref="camera"
          onCameraError={this.onCameraError}
          autoStart={true}
        />

        <button
          onClick={(e) => {
            this.setDataUri();
          }}
        >Photo</button>

        <img alt="camera" src={this.state.dataUri}/>
      </div>
    );
  }
}

export default App;