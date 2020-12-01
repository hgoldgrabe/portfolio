import Fade from 'react-reveal/Fade';

const styles = {
    section: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '6em',
        paddingBottom: '6em',
        paddingLeft: '10em',
        paddingRight: '10em',
        position: 'relative',
        fontFamily: "'Open Sans', sans-serif",
        alignSelf: 'center',
    }
}

function Contact() {
	return (
		<div id='contact' style={styles.section}>
            <Fade bottom>
                <div style={{fontFamily: "Cherolina", fontSize: '4em', alignSelf: 'center'}}>Get in Touch</div>
                <div>Email</div>
            </Fade>
		</div>
	);
}
  
export default Contact