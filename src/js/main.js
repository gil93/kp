import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import Video from './app/video';

import Intro from './app/intro';

import Sidebar from './app/sidebar';

import Footer from './app/footer';

import Imagesloaded from 'imagesloaded';

import anime from 'animejs';

export default class App extends Component {

	constructor( props ) {

		super( props );

		this.state = {

			loaded: false,
			...props

		};

		this.spinnerRef = React.createRef();

	}

	componentDidMount() {

		const { name } = this.state;

		new Imagesloaded( `.${name}`, () => {

			let $spinner = this.spinnerRef.current;

			anime({

				targets: $spinner.getElementsByClassName( 'dot' ),
				translateY: -25,
				rotate: '360deg',
				borderRadius: '0%',
				direction: 'alternate',
				easing: 'easeOutElastic(1, .6)',
				loop: 1,
				delay: anime.stagger( 300, { start: 300 } ),
				complete: () => {

					this.setState( () => ({ loaded: true }));

					$spinner.classList.add( 'spun' )

				}

			})

		});

	}

	render() {

		const { loaded } = this.state;

		const loadClass = loaded ? 'loaded' : 'loading';

		return <div ref={this.mainRef} className="main">

			<div className="spinner" ref={this.spinnerRef}>

				<ul className="dots">

					<li className="dot-container">

						<div className="dot"></div>

					</li>

					<li className="dot-container">

						<div className="dot"></div>

					</li>

					<li className="dot-container">

						<div className="dot"></div>

					</li>

				</ul>

			</div>

			<div className={loadClass}>

				<Video />

				<a className="logo" href="/">GIL</a>

				<Intro />

				<Sidebar />

				<Footer />

			</div>

		</div>

	}

}