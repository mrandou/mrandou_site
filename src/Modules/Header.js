import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { WbSunny, Brightness3 } from '@material-ui/icons/';
import SelectMenu from '../Components/Menu'
import Cookies from 'universal-cookie';
import "../Style/HeaderStyle.css"

export default class HomePage extends React.Component {
	lightTheme = () => {
		const cookies = new Cookies();
		cookies.set('Theme', 'Light', { path: '/' });
		this.props.enabledDarkTheme(false);
	}

	darkTheme = () => {
		const cookies = new Cookies();
		cookies.set('Theme', 'Dark', { path: '/' });
		this.props.enabledDarkTheme(true);
	}

	render() {
		return (
			<div>
				<AppBar position="static" style={{ flexGrow: 1 }}>
					<Toolbar>
						<SelectMenu />
						<Typography variant="h6" style={{ flexGrow: 1, marginLeft: "25px", backgroundColor: "rgba(14, 14, 14, 0.1)" }}>
							<span style={{cursor:"not-allowed"}}>$> ./Mrandou --help</span>
							<span style={{cursor:"not-allowed"}} id="cursor">&ensp;</span>
						</Typography>
						<div onClick={!this.props.darktheme ? this.darkTheme : this.lightTheme}>
							<IconButton color="inherit">
							{
								this.props.darktheme
								? <WbSunny />
								: <Brightness3 />
							}
						</IconButton>
						</div>
					</Toolbar>
				</AppBar>
			</div>
		)
	}
}
