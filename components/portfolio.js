import { useState } from 'react';
import Carousel from 'nuka-carousel';
import Lightbox from 'react-spring-lightbox';

const styles = {
    portfolioItemContainer: {
        display: 'flex',
        width: '100%',
        paddingBottom: '8em',
    },
    imageContainer: {
        padding: '1em',
        alignSelf: 'center'
    },
    textContainer: {
        padding: '1em',
    }
}

function MembershipTag (props) {
    let [showBefore, setShowBefore] = useState(false);
    let {slideIndex, showImage, currentSlideIndex, setShowImage} = props;
    let lightboxIsOpen = (showImage && currentSlideIndex === slideIndex);

    const images = [
        {
            src: '/portfolio/membershiptag2019.png',
            alt: 'Membership tag (after)'
        }, {
            src: '/portfolio/membershiptag2017.png',
            alt: 'Membership tag (before)'
        }
    ];

    const [currentImageIndex, setCurrentIndex] = useState(0);

    const gotoPrevious = () =>
        currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

    const gotoNext = () =>
        currentImageIndex + 1 < images.length &&
        setCurrentIndex(currentImageIndex + 1);

    return (
        <div className='portfolioItemContainer' style={styles.portfolioItemContainer}>
            <div className='imageContainer' style={styles.imageContainer}>
                <Lightbox
                    renderHeader={() => (
                        <div onClick={() => setShowImage(false)} style={{position: 'fixed', top: '2em', right: '2em', zIndex: 1, height: '1em', width: '1em'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 329.26933 329" width="2em"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
                        </div>
                    )}
                    isOpen={lightboxIsOpen}
                    images={images}
                    currentIndex={showBefore ? 1 : 0}
                    onPrev={gotoPrevious}
                    onNext={gotoNext}
                    onClose={() => setShowImage(false)}
                />
                <a onClick={() => setShowImage(true)}><img src={showBefore ? images[1].src : images[0].src}/></a>
                <a onClick={() => setShowBefore(showBefore ? false : true)}>{showBefore ? 'Before' : 'After'}&nbsp;(Click to show {showBefore ? 'after' : 'before'})</a>
            </div>
            <div className='portfolioTextContainer' style={styles.textContainer}>
                Member Badges: Osher Lifelong Learning Institute at Boise State University
                <br/>
                <br/>
                Just like the course catalog, the Osher Institute’s member badges were due for a touch-up. These badges were attached to a lanyard and worn by members to identify themselves when they come to class. Members were very vocal about how much they disliked only having their names on one side of the badge since they flipped around easily on the lanyard.
                <br/>
                <br/>
                My job:
                Created a double-sided design to eliminate the flipping debacle
                Aligned the colors and design to the Boise State University brand
                Removed the dates to create a timeless template
                Removed unnecessary text for a clean design
            </div>
        </div>
    )
}

function Catalog (props) {
    let [showBefore, setShowBefore] = useState(false);
    let {showImage, setShowImage, currentSlideIndex, slideIndex} = props;
    let lightboxIsOpen = (showImage && currentSlideIndex === slideIndex);

    const images = [
        {
            src: '/portfolio/catalog2020.jpg',
            alt: 'Catalog (after)'
        }, {
            src: '/portfolio/catalog2020(2).png',
            alt: 'Catalog (after) (2)'
        }, {
            src: '/portfolio/catalog2018.jpg',
            alt: 'Catalog (before)'
        }, {
            src: '/portfolio/catalog2018(2).png',
            alt: 'Catalog (before) (2)'
        }
    ];

    const [currentImageIndex, setCurrentIndex] = useState(0);

    const gotoPrevious = () =>
        currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

    const gotoNext = () =>
        currentImageIndex + 1 < images.length &&
        setCurrentIndex(currentImageIndex + 1);

    const setImage = (index) => {
        setCurrentIndex(index);
        setShowImage(true);
    }

    return (
        <div className='portfolioItemContainer' style={styles.portfolioItemContainer}>
            <div className='imageContainer' style={styles.imageContainer}>
                <Lightbox
                    renderHeader={() => (
                        <div onClick={() => setShowImage(false)} style={{position: 'fixed', top: '2em', right: '2em', zIndex: 1, height: '1em', width: '1em'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 329.26933 329" width="2em"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
                        </div>
                    )}
                    isOpen={lightboxIsOpen}
                    images={images}
                    currentIndex={currentImageIndex}
                    onPrev={gotoPrevious}
                    onNext={gotoNext}
                    onClose={() => setShowImage(false)}
                />
                <a onClick={() => setImage(showBefore ? 2 : 0)}><img src={showBefore ? images[2].src : images[0].src}/></a>
                <a onClick={() => setImage(showBefore ? 3 : 1)}><img src={showBefore ? images[3].src : images[1].src}/></a>
                <a onClick={() => setShowBefore(showBefore ? false : true)}>{showBefore ? 'Before' : 'After'}&nbsp;(Click to show {showBefore ? 'after' : 'before'})</a>
            </div>
            <div className='portfolioTextContainer' style={styles.textContainer}>
                Course Catalog: Osher Lifelong Learning Institute at Boise State University
                <br/>
                <br/>
                When I started working at the Osher Institute, I inherited a course catalog that was in dire need of a redesign. The program was rapidly outgrowing the current catalog format, and members were frequently commenting on the small font size and confusing layout used to list class offerings.
                <br/>
                <br/>
                My job:
                Removed the “At-a-Glance” calendar to accommodate the growing program
                Organized class offerings in chronological order by month
                Tightened up copy to be clear and concise 
                Aligned colors and graphics more closely to Boise State’s brand guidelines 
                Created a streamlined style guide for writing course descriptions and selecting photos
            </div>
        </div>
    )
}

function Website (props) {
    let [showBefore, setShowBefore] = useState(false);
    let {showImage, setShowImage, currentSlideIndex, slideIndex} = props;
    let lightboxIsOpen = (showImage && currentSlideIndex === slideIndex);

    const images = [
        {
            src: '/portfolio/websiteNew.png',
            alt: 'Website (after)'
        }, {
            src: '/portfolio/websiteNew(2).png',
            alt: 'Website (after) (2)'
        }, {
            src: '/portfolio/websiteBefore.png',
            alt: 'Website (before)'
        },
        
    ];

    const [currentImageIndex, setCurrentIndex] = useState(0);

    const gotoPrevious = () =>
        currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

    const gotoNext = () =>
        currentImageIndex + 1 < images.length &&
        setCurrentIndex(currentImageIndex + 1);

    const setImage = (index) => {
        setCurrentIndex(index);
        setShowImage(true);
    }
    return (
        <div className='portfolioItemContainer' style={styles.portfolioItemContainer}>
            <div className='imageContainer' style={styles.imageContainer}>
                <Lightbox
                    renderHeader={() => (
                        <div onClick={() => setShowImage(false)} style={{position: 'fixed', top: '2em', right: '2em', zIndex: 1, height: '1em', width: '1em'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 329.26933 329" width="2em"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
                        </div>
                    )}
                    isOpen={lightboxIsOpen}
                    images={images}
                    currentIndex={currentImageIndex}
                    onPrev={gotoPrevious}
                    onNext={gotoNext}
                    onClose={() => setShowImage(false)}
                />
                <a onClick={() => setImage(showBefore ? 2 : 0)}><img src={showBefore ? images[2].src : images[0].src}/></a>
                {
                    !showBefore && (
                        <a onClick={() => setImage(1)}><img src={images[1].src}/></a>
                    )
                }
                <a onClick={() => setShowBefore(showBefore ? false : true)}>{showBefore ? 'Before' : 'After'}&nbsp;(Click to show {showBefore ? 'after' : 'before'})</a>
            </div>
            <div className='portfolioTextContainer' style={styles.textContainer}>
                Website: Osher Lifelong Learning Institute at Boise State University
                <br/>
                <br/>
                After a few years of working with an old WordPress site, Boise State University underwent a website redesign. This redesign introduced a panel format and created a streamlined look and feel for the university. I had taken an interest in website accessibility and design, so I asked our Communication and Marketing team if I could take over on the Osher Institute site. They graciously agreed, and I had a blast designing a website that worked for our members.
                <br/>
                <br/>
                My job:
                Completed an audit of existing copy
                Designed a new layout and created new pages for content
                Wrote original copy for 10+ pages
                Sourced photos that accurately portrayed the program’s activities
                <br/>
                <br/>
                Feedback:
                “I wanted to take a moment and formally convey what a truly commendable job Holly did on the site transition. This is our fourth major site redesign, and we have never worked with someone who was as capable, diligent, and flexible as she was. I worry that her quick ability and willingness to learn as much as she could--and then use it all to create a truly excellent site--underscores the depth and degree of what she accomplished. 
                My entire team has been impressed by her work and her ability to figure out very complex problems--problems that we struggle with ourselves, even in our fourth round of sites. Truth be told, our team did very little on the Osher site; it was all Holly. I was both proud and completely unsurprised that the quality control check came back with only one extremely minor link error to fix. 
                Holly should hold her head high for what she accomplished--and I wanted to convey our thanks and admiration for all of her fine, fine work. Well done!”
                -- Communication and Marketing Manager, Extended Studies
            </div>
        </div>
    )
}

function Portfolio () {
    let [showImage, setShowImage] = useState(false);
    let [currentSlide, _setCurrentSlide] = useState(0);

    const setCurrentSlide = (prevSlide, nextSlide) => {
        _setCurrentSlide(prevSlide);
    }

	return (
		<div id='portfolio'>
            <div id='portfolioTitle'>Portfolio</div>
            <Carousel 
                id='carousel'
                wrapAround={true}
                swiping={true}
                renderCenterLeftControls={({ previousSlide }) => (
                    <div onClick={previousSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="2em" width="2em" viewBox="-5 -5 60 60" stroke="rgba(0,0,0,0.3)" strokeWidth="10" strokeLinecap="round">
                            <line x1="0" y1="25" x2="25" y2="50" />
                            <line x1="0" y1="25" x2="25" y2="0" />
                        </svg>
                    </div>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <div onClick={nextSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="2em" width="2em" viewBox="-5 -5 60 60" stroke="rgba(0,0,0,0.3)"  strokeWidth="10" strokeLinecap="round">
                            <line x1="0" y1="0" x2="25" y2="25" />
                            <line x1="25" y1="25" x2="0" y2="50" />
                        </svg>
                    </div>
                )}
                heightMode='current'
                style={{cursor: "default"}}
                afterSlide={setCurrentSlide}
            >
                <MembershipTag showImage={showImage} setShowImage={setShowImage} currentSlideIndex={currentSlide} slideIndex={0}/>
                <Catalog showImage={showImage} setShowImage={setShowImage} currentSlideIndex={currentSlide} slideIndex={1}/>
                <Website showImage={showImage} setShowImage={setShowImage} currentSlideIndex={currentSlide} slideIndex={2}/>
            </Carousel>
            <style jsx>{`
                #portfolioTitle {
                    font-family: Cherolina;
                    font-size: 4em;
                    align-self: center;
                    padding-bottom: 1em;
                }
                #portfolio {
                    background-color: #DAF7F8;
                    font-family: 'Open Sans', sans-serif;
                    display: flex;
                    flex-direction: column;
                    padding-top: 4em;
                    padding-bottom: 4em;
                }
            `}</style>
		</div>
	);
}
  
export default Portfolio