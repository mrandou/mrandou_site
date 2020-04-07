import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import TestPage from './Pages/TestPage';
import ReadmePage from './Pages/ReadmePage';
import Header from './Modules/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { light_theme, dark_theme } from './Style/Theme';
import { withStyles } from '@material-ui/core/styles';
import Cookies from 'universal-cookie';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			darktheme: false,
		}
	}

	componentDidMount() {
		this.getTheme();
	}

	getTheme = () => {
		const cookies = new Cookies();
		const cookie = cookies.get('Theme');
		this.setState({
			darktheme: cookie === "Dark" ? true : false,
		});
	}

	lightTheme = () => {
		const cookies = new Cookies();
		this.setState({darktheme: 0})
		cookies.set('Theme', 'Light', { path: '/' });
		this.props.enabledDarkTheme(false);
	}
	
	choiseBack = () => {
		const GlobalCss = withStyles({
			'@global': {
				'body': {
					background: this.state.darktheme ? '#2D2D2D' : '#e0e0e0',
					backgroundSize: "cover",
					color: this.state.darktheme ? '#FFF' : '#000',
				}
			},
			})(() => null);
			return (<GlobalCss/>)
		}

	enabledDarkTheme = (value) => {
		this.setState({ darktheme: value });
	}

	render() {
		return (
			<div>
			<Router>
				{/* <ThemeProvider theme={this.state.darktheme ? dark_theme : light_theme}> */}
					{/* <Header enabledDarkTheme={this.enabledDarkTheme} darktheme={this.state.darktheme} /> */}
					{/* <this.choiseBack/> */}
					<Switch>
						<Route path='/' exact component={HomePage} />
						<Route path='/Readme' component={ReadmePage} />
						<Route path='/Test' component={TestPage} />
						<Route component={HomePage} />
					</Switch>
			 {/* </ThemeProvider> */}
			</Router>
			</div>
		);
	}
}

export default App;
