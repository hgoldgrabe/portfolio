import Fade from 'react-reveal/Fade';

const styles = {
    section: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '10em',
        paddingBottom: '10em',
        paddingLeft: '10em',
        paddingRight: '10em',
        position: 'relative',
    },
    background: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: "url('/yosemite.png')",
        opacity: '0.5',
        backgroundColor: 'white',
        filter: "grayscale(100%)",
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
    }
}

function About() {
	return (
		<div id='about' style={styles.section}>
            <div style={styles.background}></div>
            <Fade bottom>
                <div style={{fontFamily: "Cherolina", fontSize: '4em', alignSelf: 'center'}}>Hi, I’m Holly</div>
                <br/>
                <div style={{fontFamily: "'Open Sans', sans-serif"}}>I’m a communications specialist with a background in higher education and small business marketing. I love producing clear messaging paired with simple, clean design. My talents include print and digital layout, design, copywriting, and editing. If you’re in the market to streamline your marketing materials and build a community around your brand, I would love to get in touch.</div>
            </Fade>
            {/* <style jsx>{`
            `}</style> */}
		</div>
	);
}
  
export default About