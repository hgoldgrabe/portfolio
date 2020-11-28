// pages/_app.js
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
	// let vw, vh;
	// if (process.browser) {
	// 	vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	// 	vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
	// }
	// pageProps.isPortrait = vw < vh;

	return (
		<>
		<Head>
			<title>Holly Goldgrabe</title>
			<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
		</Head>
		<Component {...pageProps} />
		</>
	)
}

export default MyApp