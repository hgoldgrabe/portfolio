import Header from '../components/header';
import About from '../components/about';
import Portfolio from '../components/portfolio';
import Contact from '../components/contact';

function Home() {
	return (
		<div style={{display: 'flex', flexDirection: 'column'}}>
			<Header/>
			<About/>
			<Portfolio/>
			<Contact/>
		</div>
	);
}
  
export default Home