import { makeStyles } from '@material-ui/core/styles';

export const readMeStyle = makeStyles((theme) => ({
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
