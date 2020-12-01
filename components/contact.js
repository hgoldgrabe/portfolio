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
        background: "#EFD3CD",
        width: '100%',
    }
}

function Contact() {
	return (
		<div id='contact' style={styles.section}>
            <Fade bottom>
                <div style={{fontFamily: "Cherolina", fontSize: '4em', alignSelf: 'center'}}>Get in Touch</div>
                <div style={{fontFamily: "'Open Sans', sans-serif", alignSelf: 'center'}}>
                    <div></div>
                    <div>email@email.com</div>
                </div>
            </Fade>
		</div>
	);
}
  
export default Contact