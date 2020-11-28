import Fade from 'react-reveal/Fade';

const styles = {
    section: {
        height: '50vh',
        backgroundColor: 'lightGreen',
        fontFamily: "'Open Sans', sans-serif",
    }
}

function Contact() {
	return (
		<div id='contact' style={styles.section}>
            <Fade bottom>
                <div>Contact</div>
                <div>LinkedIn</div>
                <div>Email</div>
            </Fade>
		</div>
	);
}
  
export default Contact