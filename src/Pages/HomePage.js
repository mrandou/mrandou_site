import React from 'react';
// import Me from "../Assets/mrandou.JPG" 
import "../Style/HomePageStyle.css"
import Back from "../Assets/office.jpg"

export default class HomePage extends React.Component {

	firstPanel() {
		return (
			<div id="back">
        <div id="mr">
          <letter>M</letter>
          <letterR>R</letterR>
        </div>
			</div>
		);
	}

	render() {
		return (
			<this.firstPanel/>
    )
  }
}
