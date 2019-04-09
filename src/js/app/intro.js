import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import Button from './button';

export default class Intro extends Component {

	render() {

		return <div className="intro">

			<h1 className="title">

				Gil is trying his very best

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