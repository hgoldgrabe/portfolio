import Fade from 'react-reveal/Fade';

function Contact() {
	return (
		<div id='contact'>
            <Fade bottom>
                <div className='getInTouch'>Get in Touch</div>
                <div className='contactSection'>
                    <a className='mailTo' href="mailto:hgoldgrabe@gmail.com"><img src='/images/email.svg'/></a>
                    <div>&nbsp;&nbsp;</div>
                    <div>hgoldgrabe@gmail.com</div>
                </div>
            </Fade>
            <style jsx>{`
                .contactSection {
                    font-family: 'Open Sans', sans-serif;
                    align-self: center;
                    display: flex;
                    flex-direction: row;
                }
                .mailTo {
                    width: 1.5em;
                    height: 1.5em;
                }
                .getInTouch {
                    font-family: Cherolina;
                    font-size: 4em; 
                    align-self: center;
                }
                #contact {
                    display: flex;
                    flex-direction: column;
                    padding-top: 6em;
                    padding-bottom: 6em;
                    padding-left: 10em;
                    padding-right: 10em;
                    position: relative;
                    font-family: 'Open Sans', sans-serif;
                    align-self: center;
                    background: "#EFD3CD";
                    width: 100%;
                }
            `}</style>
		</div>
	);
}
  
export default Contact