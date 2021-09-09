import React from 'react';
import {
  Typography,
  makeStyles,
} from '@material-ui/core';
import globalStyles from '../../styling/globalStyling.module.css';

const useStyles = makeStyles((theme) => ({}));

function Home() {
  const classes = useStyles();
  console.log("cg testimonials");

  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h6" component="h1" className={classes.name}>
        R.H.
      </Typography>
      <Typography variant="h6" component="h1" className={classes.name}>
        3D Graphics
      </Typography>
      <Typography variant="h6" component="h1" className={classes.name}>
        Testimonials
      </Typography>
    </div>
  );
}
export default Home;