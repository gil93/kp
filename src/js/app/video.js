import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import saigon from './../../assets/videos/saigon_720p.mp4';

import thumb from './../../assets/images/saigon_thumb_720p.jpg';

export default class App extends Component {

	render() {

		return <div className="video">

			<video autoPlay preload='auto' loop muted playsInline poster={thumb}>

				<source src={saigon} />

			</video>

			<div className="gradient"></div>

		</div>

	}

}