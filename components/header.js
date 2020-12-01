import Fade from 'react-reveal/Fade';

function Header(props) {
	return (
		<div id='header'>
            <div id='title'>
                <Fade bottom>
                    <div>Holly Goldgrabe</div>
                </Fade>
            </div>
            <div id='navbar'>
                <Fade bottom>
                    <a href='/#about'>About</a>
                    <a href='/#portfolio'>Portfolio</a>
                    <a href='/#contact'>Contact</a>
                </Fade>
            </div>
            <style jsx>{`
                #title {
                    font-size: 4em;
                    width: 60%;
                }
                #header {
                    font-family: 'Work Sans', sans-serif;
                    display: flex;
                    flex-wrap: wrap;
                    width: 100vw;
                    height: 100vh;
                    background-image: url('/images/main.jpg');
                    background-position: 75%;
                    background-color: lightblue;
                    background-size: cover;
                    background-repeat: no-repeat;
                }
                #navbar {
                    font-size: 2em;
                    display: flex;
                    align-items: flex-start;
                    z-index: 1;
                    margin-top: 0.8em;
                }
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