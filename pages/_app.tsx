import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import { makeStore } from '../lib/redux/store';
import { IReduxState } from '../lib/types/reducers';
import { Store } from 'redux';

interface IAppProps {
	store: Store<IReduxState>;
}

@(withRedux as any)(makeStore)
export default class MyApp extends App<IAppProps> {
	render() {
		const { Component, pageProps, store } = this.props;
		console.log('This props App => ', this.props);

		return (
			<Container>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</Container>
		);
	}
}
