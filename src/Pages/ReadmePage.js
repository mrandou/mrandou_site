import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Grid, useMediaQuery } from '@material-ui/core';
import { readmeData } from '../Data/Data';

const useStyles = makeStyles((theme) => ({
	root :{
		flexGrow: 1,
		overflow: 'hidden',
		margin: "0 auto",
		marginBottom: '35px',
	},
	card: {
		backgroundColor: theme.palette.background.component,
		display: 'flex',
		color: theme.typography.color,
	},
	details: {
		display: 'flex',
		width: '100%',
		flexDirection: 'column',
	},
	content: {
		flex: '1 0 auto',
	},
	cover: {
		width: "100%",
	},
	mobile :
	{
		margin: "0 auto",
	},
	mobileCard: {
		backgroundColor: theme.palette.background.component,
		color: theme.typography.color,
		maxWidth: 345,
		marginBottom: '35px',
		margin: "0 auto",
	},
	mobileCover: {
		height: 140,
	}
}));


function ReadmePage() {
	const classes = useStyles();
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
