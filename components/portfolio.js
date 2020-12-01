import Carousel from 'nuka-carousel';
import { useState } from 'react';

const styles = {
    portfolioItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    imageContainer: {
        width: '50%',
    },
    textContainer: {
        width: '50%',
    }
}

function MembershipTag () {
    let [showBefore, setShowBefore] = useState(false);
    return (
        <div style={styles.portfolioItemContainer}>
            <div style={styles.imageContainer}>
                <div></div>
                <a onClick={() => setShowBefore(showBefore ? false : true)}>{showBefore ? 'Before' : 'After'}&nbsp;(Click to show {showBefore ? 'after' : 'before'})</a>
            </div>
            <div style={styles.textContainer}>
                Member Badges: Osher Lifelong Learning Institute at Boise State University

                Just like the course catalog, the Osher Institute’s member badges were due for a touch-up. These badges were attached to a lanyard and worn by members to identify themselves when they come to class. Members were very vocal about how much they disliked only having their names on one side of the badge since they flipped around easily on the lanyard.

                My job:
                Created a double-sided design to eliminate the flipping debacle
                Aligned the colors and design to the Boise State University brand
                Removed the dates to create a timeless template
                Removed unnecessary text for a clean design

                Before: [link to Spring 2017 Member Badges]
                After: [link to Fall 2019 Member Badges]
            </div>
        </div>
    )
}

function Catalog () {
    let [showBefore, setShowBefore] = useState(false);
    return (
        <div style={styles.portfolioItemContainer}>
            <div style={styles.imageContainer}>
                <div></div>
                <a onClick={() => setShowBefore(showBefore ? false : true)}>{showBefore ? 'Before' : 'After'}&nbsp;(Click to show {showBefore ? 'after' : 'before'})</a>
            </div>
            <div style={styles.textContainer}>
                Course Catalog: Osher Lifelong Learning Institute at Boise State University

                When I started working at the Osher Institute, I inherited a course catalog that was in dire need of a redesign. The program was rapidly outgrowing the current catalog format, and members were frequently commenting on the small font size and confusing layout used to list class offerings.

                My job:
                Removed the “At-a-Glance” calendar to accommodate the growing program
                Organized class offerings in chronological order by month
                Tightened up copy to be clear and concise 
                Aligned colors and graphics more closely to Boise State’s brand guidelines 
                Created a streamlined style guide for writing course descriptions and selecting photos

                Before: [link to Fall 2018 Osher Institute Catalog]
                After: [link to Fall 2020 Osher Institute Catalog]
            </div>
        </div>
    )
}

function Website () {
    let [showBefore, setShowBefore] = useState(false);
    return (
        <div style={styles.portfolioItemContainer}>
            <div style={styles.imageContainer}>
                <div></div>
                <a onClick={() => setShowBefore(showBefore ? false : true)}>{showBefore ? 'Before' : 'After'}&nbsp;(Click to show {showBefore ? 'after' : 'before'})</a>
            </div>
            <div style={styles.textContainer}>
                Website: Osher Lifelong Learning Institute at Boise State University

                After a few years of working with an old WordPress site, Boise State University underwent a website redesign. This redesign introduced a panel format and created a streamlined look and feel for the university. I had taken an interest in website accessibility and design, so I asked our Communication and Marketing team if I could take over on the Osher Institute site. They graciously agreed, and I had a blast designing a website that worked for our members.

                My job:
                Completed an audit of existing copy
                Designed a new layout and created new pages for content
                Wrote original copy for 10+ pages
                Sourced photos that accurately portrayed the program’s activities

                [Before picture]
                [After picture]

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
	return (
		<div id='portfolio'>
            <div id='portfolioTitle'>Portfolio</div>
            <Carousel 
                id='carousel'
                wrapAround={true}
                swiping={true}
                defaultControlsConfig={{
                    nextButtonText: '>',
                    prevButtonText: '<',
                }}
                heightMode='max'
                style={{cursor: "default"}}
            >
                <MembershipTag/>
                <Catalog/>
                <Website/>
            </Carousel>
            <style jsx>{`
                #carousel {
                    height: 100%;
                }
                #portfolioTitle {
                    font-family: Cherolina;
                    font-size: 4em;
                    align-self: center;
                }
                #portfolio {
                    height: 100vh;
                    background-color: #DAF7F8;
                    font-family: 'Open Sans', sans-serif;
                    display: flex;
                    flex-direction: column;
                    padding-top: 6em;
                }
            `}</style>
		</div>
	);
}
  
export default Portfolio