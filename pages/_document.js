import Document, { Html, Head, Main, NextScript } from 'next/document'
import link from 'next/link';

export default class MyDocument extends Document {

	render () {
		return (
			<Html style={{scrollBehavior: 'smooth'}}>
				<Head>
					<meta charSet="UTF-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
					{/* <link href="https://fonts.googleapis.com/css?family=Open+Sans|Work+Sans:300" rel="stylesheet"/> */}
				</Head>
				<body style={{margin:0}}>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}