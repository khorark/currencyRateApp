import React from 'react';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

export default class App extends React.Component {
	static async getInitialProps() {
        const res = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
        const json = await res.json();
		return { data: json };
	}

	render() {
		console.log(this.props);

		return (
			<div>
				<Head>
					<title>NextJS Page title</title>
				</Head>
				<div>Hello Next.js</div>
			</div>
		);
	}
}
