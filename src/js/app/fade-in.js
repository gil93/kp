import React, { Component } from 'react';

import ReactDOM from 'react-dom';

export default function FadeIn( Wrapped ) {

	return class HOC extends Component {

		constructor( props ) {

			super( props );

			this.state = { ...props, loaded: false };

			this.mainRef = React.createRef();

		}

		componentDidMount() {

			const { loaded } = this.state;

			if ( ! loaded ) {

				const $el = this.mainRef.current;

				$el.classList.add( 'faded' );

				this.setState( () => { loaded: true });

			}

		}

		render() {

			return <div className="fade-in" ref={this.mainRef}>

				<Wrapped {...this.props} {...this.state}  />

			</div>

		}

	}

}