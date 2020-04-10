import React from 'react';
import laptop from '../Assets/laptop.png'
import "../Style/HomePageStyle.css"
import Grid from '@material-ui/core/Grid';

export default class HomePage extends React.Component {

	render() {
		return (
      <div id="panel">
        <Grid container>
          <Grid xs={7}>
            <div id="script">
              <h1>Maxime Randou</h1>
              <h3>42 Student</h3>
              <h3>Frontend developper</h3>
            </div>
          </Grid>
          <Grid xs={5}>
            <img src={laptop} alt="Laptop" id="picture"/>
          </Grid>
        </Grid>
      </div>
    )
  }
}
