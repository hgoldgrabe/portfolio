import Fade from 'react-reveal/Fade';

const styles = {
    header: {
        fontFamily: "'Work Sans', sans-serif",
        display: 'flex',
        flexWrap: 'wrap',
        width: '100vw',
        height: '100vh',
        backgroundImage: "url('/main.jpg')",
        backgroundPosition: "75%",
        backgroundColor: 'lightblue',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    title: {
        fontSize: '4em',
        width: '60%',
    },
    navbar: {
        fontSize: '2em',
        display: 'flex',
        alignItems: 'flex-start',
        zIndex: 1,
        marginTop: '0.8em',
    },
    a: {
        textDecoration: 'inherit',
        color: 'inherit',
    }
}

function Header(props) {
	return (
		<div style={styles.header}>
            <div style={styles.title}>
                <Fade bottom>
                    <div>Holly Goldgrabe</div>
                </Fade>
            </div>
            <div id='navbar' style={styles.navbar}>
                <Fade bottom>
                    <a href='/#about' style={styles.a}>About</a>
                    <a href='/#portfolio' style={styles.a}>Portfolio</a>
                    <a href='/#contact' style={styles.a}>Contact</a>
                </Fade>
            </div>
            <style jsx>{`
                @media (orientation: landscape) {
                    #navbar {
                        flex-direction: row;
                        justify-content: space-evenly;
                        width: 40%;
                    }
                }
                @media (orientation: portrait) {
                    #navbar {
                        flex-direction: column;
                        width: 100%;
                        justify-content: space-around;
                    }
                }
            `}</style>
		</div>
	);
}
  
export default Header