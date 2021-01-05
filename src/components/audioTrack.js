import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    marginRight: '10px',
    maxWidth: '80px',
    maxHeight: '80px',
  },
}));

const AudioTrack = ({ track }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} container direction='column' spacing={2}>
      <Paper className={classes.paper}>
        <img
          className={classes.img}
          alt='track thumbnail'
          src={track.poster.s}
        />
        <div>
          <Typography variant='subtitle1'>
            <b>{track.title.s}</b>
          </Typography>
          <Typography variant='body2' gutterBottom>
            {track.description.s}
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            ID: {track.id.s}
          </Typography>
        </div>
      </Paper>
    </Grid>
  );
};
export default AudioTrack;
