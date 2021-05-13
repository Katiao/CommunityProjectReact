import React, { useState, useRef, useEffect } from 'react';
import './navigation.scss';
import { FaBars } from 'react-icons/fa';
import links from './data';
import { Link as Link2 } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';

const scrollToTop = () => {
	scroll.scrollToTop();
};

function Navigation() {
	const [showLinks, setShowLinks] = useState(false);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);

	//everytime showLinks changes, run callback function: which checks the height of the links to adjust the height of links container:
	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height;
		if (showLinks) {
			linksContainerRef.current.style.height = `${linksHeight}px`;
		} else {
			linksContainerRef.current.style.height = '0px';
		}
	}, [showLinks]);

	return (
		<nav className='nav-center'>
			<div className='nav-header'>
				<button className='logo' onClick={scrollToTop}>
					K.
				</button>
				<button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
					<FaBars />
				</button>
			</div>

			<div className='links-container' ref={linksContainerRef}>
				<ul className='links' ref={linksRef}>
					<li>
						<Link2
							className='menu'
							to='/'
							onClick={() => setShowLinks(!showLinks)}>
							Home
						</Link2>
					</li>
					{links.map(link => {
						const { id, url, text } = link;
						return (
							<li key={id}>
								<Link
									className='menu'
									onClick={() => setShowLinks(!showLinks)}
									to={url}
									smooth={true}
									activeClass='active'
									spy={true}
									offest={-70}
									duration={500}>
									{text}
								</Link>
							</li>
						);
					})}
					<li>
						<Link2 className='menu' to='/blog'>
							Blog
						</Link2>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navigation;
