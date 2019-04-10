import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import githubWhite from './../../assets/icons/icon-github-white.svg';

import linkedinWhite from './../../assets/icons/icon-linkedin-white.svg';

import githubBlack from './../../assets/icons/icon-github-black.svg';

import linkedinBlack from './../../assets/icons/icon-linkedin-black.svg';

export default class Footer extends Component {

	render() {

		return <div className="footer">

			<a className="social github" href="https://github.com/gil93/kp" target="_blank">

				<img className="white" src={githubWhite} />

				<img className="black" src={githubBlack} />

				<span>Github</span>

			</a>

			<a className="social linkedin" href="https://www.linkedin.com/in/gilbertovelez/" target="_blank">

				<img className="white" src={linkedinWhite} />

				<img className="black" src={linkedinBlack} />

				<span>Linkedin</span>

			</a>

		</div>

	}

}