import React, { Component } from 'react';

import ReactDOM from 'react-dom';

export default overrideProps => {

	return Wrapped => {

		return class HOC extends Component {

			constructor( props ) {

				super( props );

				this.state = {

					...props,
					loaded: false,
					direction: 'fade-in',
					style: '',
					...overrideProps

				};

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

				const classNames = `${this.state.direction} ${this.state.style} ${this.state.name}-fade-in`;

				return <div className={classNames} ref={this.mainRef}>

					<Wrapped {...this.props} {...this.state}  />

				</div>

			}

		}

	}

}