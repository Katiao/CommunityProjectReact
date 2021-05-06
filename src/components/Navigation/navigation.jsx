import React, { useState, useRef, useEffect } from 'react';
import './navigation.scss';
import { FaBars } from 'react-icons/fa';
import links from './data';
import { Link } from 'react-router-dom';

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
				<div className='logo'>
					<a href='index.html'>K.</a>
				</div>
				<button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
					<FaBars />
				</button>
			</div>

			<div className='links-container' ref={linksContainerRef}>
				<ul className='links' ref={linksRef}>
					{links.map(link => {
						const { id, url, text } = link;
						return (
							<li key={id}>
								<Link className='menu' to={url}>
									{text}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
}

export default Navigation;

/* {`${
	showLinks ? 'links-container show-container' : 'links-container'
}`} */
