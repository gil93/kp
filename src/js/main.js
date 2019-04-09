import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import saigon from './../assets/videos/saigon_720p.mp4';

export default class App extends Component {

	render() {

		return <div>

			<video

				autoPlay
				preLoad='auto'
				loop
				muted='muted'
				playsInline='playsinline'

			>

				<source src={saigon} />

			</video>

			<p>Hello World!</p>

		</div>

	}

}