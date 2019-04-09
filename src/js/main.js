import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import Video from './app/video';

import Intro from './app/intro';

export default class App extends Component {

	constructor( props ) {

		super( props );

	}

	render() {

		return <div ref={this.mainRef} className="main">

			<Video />

			<Intro />

		</div>

	}

}