import Fade from 'react-reveal/Fade';

function Header(props) {
	return (
		<div id='header'>
            <div id='name'>
                <div>HOLLY GOLDGRABE</div>
            </div>
            <div id='line'>
            </div>
            <div id='links'>
                <div>ABOUT ME</div>
                <div>PORTFOLIO</div>
            </div>
            <style jsx> {`
                #header {
                    font-family: Montserrat;
                    width: 100%;
                    background-color: #B2604B;
                    text-align: center;
                    height: 30vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                },
                #name: {
                    width: 100%;
                }
                #line {
                    width: 100%;

                }
                #links {
                    display: flex;
                    justify-content: space-evenly;
                }
            `}</style>
		</div>
	);
}
  
export default Header