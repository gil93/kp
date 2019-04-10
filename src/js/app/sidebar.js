import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import Section from './section';

import FadeIn from './fade-in';

import markus from './../../assets/images/markus-spiske-1402880-unsplash.jpg';

import sarah from './../../assets/images/sarah-mckellar-1382804-unsplash.jpg';

import taylor from './../../assets/images/taylor-simpson-1385356-unsplash.jpg';

import vishwas from './../../assets/images/vishwas-bangar-1396618-unsplash.jpg';

import videoUrl from './../../assets/videos/saigon_720p.mp4';

import videoThumb from './../../assets/images/saigon_thumb_720p.jpg';

@FadeIn({

	direction: 'fade-right',
	name: 'sidebar'

})

export default class Sidebar extends Component {

	render() {

		return <div className="sidebar">

			<div className="sidebar-inner">

				<Section video={{

					src: videoUrl,
					poster: videoThumb

				}} />

				<Section src={vishwas} />

				<Section src={sarah} />

				<div className="contact">

					<h3>Contact Us</h3>

					<h5>

						Gil <br />

						325 Somewhere St, #3C <br />

						New York City, NY 10035

					</h5>

					<a className="email" href="mailto:gvelezjr02@gmail.com" target="_blank">

						<h5>gvelezjr02@gmail.com</h5>

					</a>

					<a className="phone" href="tel:1-347-608-7982">

						<h5>347-608-7982</h5>

					</a>

				</div>

			</div>

		</div>

	}

}