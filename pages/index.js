import Header from '../components/header';
import About from '../components/about';
import Contact from '../components/contact';

function Home(props) {
	return (
		<div style={{display: 'flex', flexDirection: 'column'}}>
			<Header/>
			<About/>
			<Contact/>
		</div>
	);
}
  
export default Home