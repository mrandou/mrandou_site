import { makeStyles } from '@material-ui/core/styles';

export const carouselStyle = makeStyles(theme => ({
	root: {
		maxWidth: 800,
		flexGrow: 1,
		margin:'0 auto',
		marginTop:'30px',
		position: 'relative',
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		height: 50,
		paddingLeft: theme.spacing(4),
		backgroundColor: theme.palette.background.default,
	},
	pic: {
		display: 'block',
		maxWidth: 800,
		overflow: 'hidden',
		width: '100%',
	},
	icon: {
		position: 'absolute',
		zIndex: 1,
		right: theme.spacing(2),
		bottom: '60px',
		opacity: '0.9',
	},
	closeIcon : {
		position: 'absolute',
		background: 'transparent',
		color: 'black',
		right: theme.spacing(2),
		width: '36px',
		height: 'auto',
		zIndex: 1,
		bottom: '60px',
		opacity: '0.9',
		'&:acitve' : {
			background: 'transparent',
		}
	},
	iconState: {
		position: 'absolute',
		color: 'white',
		fontSize: '200px',
		zIndex: 1,
		marginLeft: 'auto',
		marginRight: 'auto',
		left: '0',
		right: '0',
		marginTop: 'auto',
		marginBottom: 'auto',
		top: '0',
		bottom: '0',
		animationName: '$FadeAnimation',
		animation: '1s ease-in .2s forwards',
	},
	'@keyframes FadeAnimation': {
    from: {opacity: 1,  visibility: 'visible',},
    to: {opacity: 0,  visibility: 'hidden',},
  },
	svg: {
		display: 'block',
		maxWidth: 800,
		height: '100%',
		overflow: 'auto',
		width: '100%',
		backgroundColor: 'rgba(255,255,255,0.8)',
		position: 'absolute',
		bottom: '0%',
		zIndex: 1,
		'& p': {
			color: 'black',
			marginLeft: '34%',
		},
	},
	infos: {
		display: 'block',
		maxWidth: 800,
		overflow: 'hidden',
		width: '100%',
		height: '100%',
	},
	side: {
		position: 'absolute',
		zIndex: 2,
		height: '100%',
		width: '32%',
		overflow: 'hidden',
		color: 'black',
		textAlign: 'center',
		backgroundColor: 'rgba(255,255,255,0.8)',
		opacity: '0.8',
		'& img': {
			paddingTop: '20px',
			maxHeight: '160px',
			display: 'block',
			margin:'0 auto',
			'&:hover': {
				cursor: 'pointer',
				transition: 'all .4s ease-in',
				transform: 'scale(1.05)',
			}
		}
	}
}));
