import React from 'react';
import { Grid } from '@material-ui/core';

import { Listing, TopNav } from './components';
import jsonData from './data/audioFeedData.json';

let AudioData = jsonData.tracks;
class App extends React.Component {
  state = {
    audioData: AudioData,
  };

  render() {
    const { audioData } = this.state;
    return (
      <Grid container justify='center' spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={10}>
              <TopNav />
            </Grid>
            <Grid item xs={10}>
              <Listing dt={audioData} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default App;
