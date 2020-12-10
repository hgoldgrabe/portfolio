import Fade from 'react-reveal/Fade';

function About() {
	return (
		<div id='about'>
            <div style={{width: '80%'}}>ABOUT ME</div>
            <div id='aboutMeBox' style={{outline: 'black 1px solid'}}>
                <div>text</div>
                <div>image</div>
            </div>
            <style jsx>{`
                #aboutMeBox {
                    display: flex;
                    flex-direction: row;
                    width: 80%;
                }
                #about {
                    display: flex;
                    width: 100%;
                    flex-direction: column;
                    align-items: center;
                }
            `}</style>
		</div>
	);
}
  
export default About