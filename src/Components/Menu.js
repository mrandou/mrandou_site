import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Home, Menu, MenuBook, GitHub, LinkedIn, GetApp } from '@material-ui/icons';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
	list: {
		width: 200,
		height: "100%",
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.secondary.main,
  },
}));

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
	left: false,
  });

  const toggleDrawer = (side, open) => event => {
	if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
	  return;
	}

	setState({ ...state, [side]: open });
  };

  const sideList = side => (
	<div
		className={classes.list}
		role="presentation"
		onClick={toggleDrawer(side, false)}
		onKeyDown={toggleDrawer(side, false)}
	>
		<h2 style={{color: "white", textAlign:"center" }}>$> ./Mrandou</h2>
		<List>
			<Link style={{color: "inherit", textDecoration: "none"}} to="/">
				<ListItem button>
					<ListItemIcon><Home /></ListItemIcon>
					<ListItemText primary={"Accueil"} />
				</ListItem>
			</Link>
			<Link style={{color: "inherit", textDecoration: "none"}} to ="/Readme">
			<ListItem button>
				<ListItemIcon><MenuBook/></ListItemIcon>
				<ListItemText primary={"ReadMe"} />
			</ListItem>
			</Link>
			<Divider/>
			<ListItem button>
				<ListItemIcon><GitHub/></ListItemIcon>
				<ListItemText primary={"Github"} />
			</ListItem>
			<ListItem button>
				<ListItemIcon><LinkedIn/></ListItemIcon>
				<ListItemText primary={"Linkedin"} />
			</ListItem>
			<ListItem button>
				<ListItemIcon><GetApp/></ListItemIcon>
				<ListItemText primary={"Curriculum Vitae"} />
			</ListItem>
	</List>
	</div>
  );

  return (
	<div>
	  <IconButton style={{color: "white"}} onClick={toggleDrawer('left', true)}><Menu/></IconButton>
	  <SwipeableDrawer
		open={state.left}
		onClose={toggleDrawer('left', false)}
		onOpen={toggleDrawer('left', true)}
	  >
		{sideList('left')}
	  </SwipeableDrawer>
	</div>
  );
}
