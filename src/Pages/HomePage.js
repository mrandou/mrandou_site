import React from 'react';
import Grid from '@material-ui/core/Grid';
import Me from "../Assets/mrandou.JPG" 
import "../Style/HomePageStyle.css"
import Carousel from "../Components/Carousel"
import Text from "../Components/Text"
import Container from '@material-ui/core/Container';

export default class HomePage extends React.Component {

	firstPanel() {
		return (
			<div>
				<Grid container className="home">
					<Grid item xs={6}>
						<h2 className="name">Maxime<br/>Randou</h2>
					</Grid>
					<Grid item xs={6}>
						<div>
							<img className="pic" alt="Maxime Randou" src={Me} />
						</div>
					</Grid>
				</Grid>
        <Container fixed>
          <Text />
        </Container>
        <Container fixed>
          <Carousel />
        </Container>
			</div>
		);
	}

	render() {
		return (
			<this.firstPanel/>
    )
  }
}
