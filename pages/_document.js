import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

	render () {
		return (
			<Html style={{scrollBehavior: 'smooth'}}>
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<link href="https://fonts.googleapis.com/css?family=Open+Sans|Work+Sans:300" rel="stylesheet"/>
				<link href="/Cherolina.ttf" rel="stylesheet" type='text/css' media='all'/>
				<style jsx>{`
					@font-face {
						font-family: 'Cherolina';
						src: url('/Cherolina.ttf');
					}
				`}</style>
			</Head>
			<body style={{margin:0}}>
				<Main />
				<NextScript />
			</body>
			</Html>
		)
	}
}