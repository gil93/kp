import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import Button from './button';

import FadeIn from './fade-in';

@FadeIn({

	style: 'absolute',
	name: 'intro'

})

class Intro extends Component {

	render() {

		return <div className="intro">

			<h5 className="sub-header">

				Welcome to King & Partners Fun

			</h5>

			<h1 className="title">

				Gil Is Awesome

			</h1>

			<Button

				color="light-orange"
				text="He means well"
				currentText="He means well"
				mouseover={{
					type: 'changeText',
					newText: 'He really does'
				}}
				classes={['changeText']}

			/>

		</div>

	}

}

export default Intro;