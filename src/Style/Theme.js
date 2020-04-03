import { createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const typo = [
	'"Segoe UI"',
		'Arial',
		'Roboto',
		'-apple-system',
		'BlinkMacSystemFont',
		'"Helvetica Neue"',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
]

export const light_theme = createMuiTheme({
	typography: {
		fontFamily:typo.join(','),
		color: "black",
	},
	palette: {
		background:{
			default: orange[800],
			component: '#ef6c0052',
		},
		primary: {
			main: orange[800],
		},
		secondary: {
			main: '#FFF',
		},
		action: {
			active: '#FFF',
		},
	},
	});

	export const dark_theme = createMuiTheme({
		typography: {
			fontFamily:typo.join(','),
			color: "white"
		},
		palette: {
			primary: {
				main: '#3949ab'
			},
			background:{
				default: '#3949ab',
				component: '#6161615c',
			},
			secondary: {
				main: '#FFF',
			},
			action: {
				active: '#FFF',
			},
		},
	});

	export default light_theme;
