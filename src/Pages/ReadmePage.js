import React from 'react';
import { Card, CardMedia, CardContent, Grid, useMediaQuery } from '@material-ui/core';
import { readmeData } from '../Data/Data';
import { readMeStyle } from '../Style/ReadMeStyle'

function ReadmePage() {
	const classes = readMeStyle();
	const isSmall = useMediaQuery('(min-width:600px)');

	const largeScreenView = (item, order) => {
		return (
				<Grid container>
					<Grid xs={8} xl={6} className={classes.root}>
						<Card className={classes.card}>
							<div className={classes.details} style={{order: order}} >
								<CardContent className={classes.content}>
									<h2>{item.title}</h2>
									<p>{item.description}</p>
								</CardContent>
							</div>
							<CardMedia
								className={classes.cover}
								image={item.imgPath}
								title="test"
							/>
						</Card>
				 </Grid>
			 </Grid>
		)
	}

	const smallScreenView = (item) => {
		return (
			<Grid xs={9} className={classes.mobile}>
				<Card className={classes.mobileCard}>
					<CardMedia
							className={classes.mobileCover}
							image={item.imgPath}
							title="test"
					/>
					<div>
						<CardContent>
							<h2>{item.title}</h2>
							<p>{item.description}</p>
						</CardContent>
					</div>
				</Card>
			</Grid>
		)
	}

	return (
		<div style={{ marginTop: '30px' }}>
			{
				readmeData.map((item, index) => (
				 isSmall ? largeScreenView(item, (index % 2)) : smallScreenView(item)
				))
			}
		</div>
	)
}

export default ReadmePage;
