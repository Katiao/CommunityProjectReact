import AboutMe from '../../components/About-Me/about-me';
import Header from '../../components/Header/header';
import Services from '../../components/Services/services';
import LatestWorks from '../../components/Latest-Works/latest-works.jsx';
import WorkExperiences from '../../components/Work-Experiences/work-experiences';
import HireMe from '../../components/Hire-Me/hire-me';
import ContactMe from '../../components/Contact-Me/contact-me';
import Closing from '../../components/Closing/closing.jsx';
import Footer from '../../components/Footer/footer';
import Reviews from '../../components/Reviews/reviews';
import Navigation from '../../components/Navigation/navigation';
import './home.scss';
import { animateScroll as scroll } from 'react-scroll';
import React, { useState, useEffect } from 'react';

const scrollToTop = () => {
	scroll.scrollToTop();
};

function Home() {
	//state back-to-top button visibility, by default not visible:
	const [visible, setVisible] = useState(false);

	const scrollFunction = () => {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	};

	//useEffect to set up the scroll event listener
	useEffect(() => {
		window.addEventListener('scroll', scrollFunction);
		//whatever we place after return will be invoked once we exit = clean up function
		return () => {
			window.removeEventListener('scroll', scrollFunction);
		};
	}, []);

	return (
		<div className='page-container'>
			<Navigation />
			<Header id='head' />
			<AboutMe id='about-me' />
			<Services id='services' />
			<LatestWorks id='latest-works' />
			<Reviews />
			<WorkExperiences />
			<HireMe />
			<ContactMe id='contact' />
			<Closing />
			<Footer />
			<button
				className={`${visible ? 'back-to-top show' : 'back-to-top'}`}
				onClick={scrollToTop}>
				Back to Top
			</button>
		</div>
	);
}

export default Home;
