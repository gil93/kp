import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import Video from './app/video';

import Intro from './app/intro';

export default class App extends Component {

	constructor( props ) {

		super( props );

		this.state = { ...props, loaded: false };

		this.mainRef = React.createRef();

	}

	componentDidMount() {

		const { loaded } = this.state;

		console.log( this );

		if ( ! loaded ) {

			const $el = this.mainRef.current;

			$el.classList.add( 'faded' );

			this.setState( () => { loaded: true });

		}

	}

	render() {

		return <div ref={this.mainRef} className="main fade-in">

			<Video />

			<Intro />

		</div>

	}

}