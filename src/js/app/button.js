import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import anime from 'animejs/lib/anime.es.js';

export default class Button extends Component {

	constructor( props ) {

		super( props );

		this.state = {

			href: 'javascript:void(0);',
			text: 'This is a button',
			currentText: 'This is a button',
			color: 'blue',
			hovering: false,
			classes: [],
			mouseover: {
				type: null
			},
			...props

		};

		this.state = {

			...this.state,
			classString: this.state.classes.join( ' ' )

		};

		this.handleClick = this.handleClick.bind( this );

		this.handleMouseOver = this.handleMouseOver.bind( this );

		this.handleMouseOut = this.handleMouseOut.bind( this );

	}

	handleMouseOver( e ) {

		let { hovering, mouseover } = this.state;

		let { type } = mouseover;

		if ( hovering ) return;

		this.setState( () => ({ hovering: true }));

		if ( type == 'changeText' ) {

			let { newText } = mouseover;

			this.setState( () => ({ currentText: newText }));

		}

	}

	handleMouseOut( e ) {

		let { hovering, mouseover } = this.state;

		let { type } = mouseover;

		if ( ! hovering ) return;

		this.setState( () => ({ hovering: false }));

		if ( type == 'changeText' ) {

			let { text } = this.state;

			this.setState( () => ({ currentText: text }));

		}

	}

	handleClick( e ) {

	}

	render() {

		const className = `button ${this.state.color} ${this.state.classString}`;

		return <a

			href={this.state.href}
			className={className}
			onClick={this.handleClick}
			onMouseOver={this.handleMouseOver}
			onMouseOut={this.handleMouseOut}

		>

			<span>

				{ this.state.currentText }

			</span>

		</a>

	}

}