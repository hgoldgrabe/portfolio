import Fade from 'react-reveal/Fade';

function About() {
	return (
		<div id='about'>
            <div id='aboutBackgroundImage'></div>
            <Fade bottom>
                <div className='aboutTitle'>Hi, I’m Holly</div>
                <br/>
                <div className='aboutText'>I’m a communications specialist with a background in higher education and small business marketing. I love producing clear messaging paired with simple, clean design. My talents include print and digital layout, design, copywriting, and editing. If you’re in the market to streamline your marketing materials and build a community around your brand, I would love to get in touch.</div>
            </Fade>
            <style jsx>{`
                .aboutTitle {
                    font-family: Cherolina; 
                    font-size: 4em;
                    align-self: center;
                }
                .aboutText {
                    font-family: 'Open Sans', sans-serif;
                }
                #aboutBackgroundImage {
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-image: url('/images/yosemite.png');
                    opacity: 0.5;
                    background-color: white;
                    filter: grayscale(100%);
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                }
                #about {
                    display: flex;
                    flex-direction: column;
                    position: relative;
                }
                @media (orientation: landscape) {
                    #about {
                        padding-top: 10em;
                        padding-bottom: 10em;
                        padding-left: 10em;
                        padding-right: 10em;
                    }
                }
                @media (orientation: portrait) {
                    #about {
                        padding-top: 10em;
                        padding-bottom: 10em;
                        padding-left: 2em;
                        padding-right: 2em;
                    }
                }
            `}</style>
		</div>
	);
}
  
export default About