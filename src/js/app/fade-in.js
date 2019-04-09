import React, { Component } from 'react';

import ReactDOM from 'react-dom';

export default class App extends Component {

	// https://reactjs.org/docs/higher-order-components.html

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

		return <div>



		</div>

	}

}