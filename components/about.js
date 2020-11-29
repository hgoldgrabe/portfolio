import Fade from 'react-reveal/Fade';

const styles = {
    section: {
        height: '100vh',
        backgroundColor: '#DAF7F8',
        display: 'flex',
        flexDirection: 'column'
    }
}

function About() {
	return (
		<div id='about' style={styles.section}>
            <Fade bottom>
                <div style={{fontFamily: "Cherolina", fontSize: '4em', alignSelf: 'center'}}>Hi, I’m Holly</div>
                <div style={{fontFamily: "'Open Sans', sans-serif"}}>I’m a communications specialist with a background in higher education and small business marketing. I love producing clear messaging paired with simple, clean design. My talents include print and digital layout, design, copywriting, and editing. If you’re in the market to streamline your marketing materials and build a community around your brand, I would love to get in touch.</div>
            </Fade>
		</div>
	);
}
  
export default About