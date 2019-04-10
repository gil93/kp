import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import Button from './button';

import FadeIn from './fade-in';

@FadeIn({

	style: 'static',
	name: 'section'

})

export default class Section extends Component {

	constructor( props ) {

		super( props );

		this.state = {

			ctaUrl: 'javascript:void(0);',
			src: 'https://via.placeholder.com/400x225',
			...props

		};

	}

	image() {

		return <img

			src={this.state.src}
			alt="Example One"

		/>

	}

	video() {

		const { video } = this.state;

		const { src, poster } = video;

		console.log( this.state );

		return <video autoPlay loop muted playsInline poster={poster}>

			<source src={src} />

		</video>

	}

	render() {

		return <div className="section">

			{ this.state.video !== undefined ? this.video() : this.image() }

			<p className="caption">

				Lorem ipsum dolor sit amet, consectetur

			</p>

			<div className="cta">

				<h3 className="title">

					Lorem ipsum dolor sit

				</h3>

				<Button

					href={this.state.ctaUrl}
					color="blue"
					text="this link works"
					mouseover={{
						type: 'changeText',
						newText: 'most of the time'
					}}
					classes={['changeText']}

				/>

			</div>

		</div>

	}

}