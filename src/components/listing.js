import React from 'react';
import { Grid } from '@material-ui/core';

import AudioTrack from './audioTrack';
function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
const Listing = ({ dt }) => {
  const list = shuffleArray(dt).map((audioTrack, id) => {
    return <AudioTrack key={id} track={audioTrack} />;
  });

  return (
    <Grid container spacing={4}>
      {list}
    </Grid>
  );
};

export default Listing;
