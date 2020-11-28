import Fade from 'react-reveal/Fade';

const styles = {
    header: {
        fontFamily: "'Work Sans', sans-serif",
        display: 'flex',
        width: '100vw',
        height: '100vh'
    },
    title: {
        fontSize: '75px',
        width: '60%',
    },
    navbar: {
        fontSize: '25px',
        width: '40%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        padding: '1em'
    },
    a: {
        textDecoration: 'inherit',
        color: 'inherit',
    }
}

function Header() {
	return (
		<div style={styles.header}>
            <div style={styles.title}>
                <Fade bottom>
                    <div style={{fontSize: '75px'}}>Holly</div>
                </Fade>
            </div>
            <div style={styles.navbar}>
                <a href='/#about' style={styles.a}>About</a>
                <a href='/#portfolio' style={styles.a}>Portfolio</a>
                <a href='/#contact' style={styles.a}>Contact</a>
            </div>
		</div>
	);
}
  
export default Header