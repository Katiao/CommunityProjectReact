import React, { useState, useEffect } from 'react';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import data from './data';
import Heading2 from '../Heading-2/heading-2';
import './reviews.scss';

function Reviews() {
	const [people, setPeople] = useState([]);
	const [index, setIndex] = useState(0);

	//This part is to pretend we're getting data from an API or from changing data source, to remove errors:
	useEffect(() => {
		setPeople(data);
	}, []);

	//make sure that when we run out of slides or go over our max no. of slides, slide index changed
	useEffect(() => {
		const lastIndex = people.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, people]);

	//slide auto-play
	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 5000);
		return () => clearInterval(slider);
	}, [index]);

	return (
		<section className='section'>
			<Heading2 text='Reviews' headingClass='reviews' />
			<div className='section-center'>
				{people.map((person, personIndex) => {
					const { id, img, name, job, text } = person;

					let position = 'nextSlide';
					if (personIndex === index) {
						position = 'activeSlide';
					}
					if (
						personIndex === index - 1 ||
						(index === 0 && personIndex === people.length - 1)
					) {
						position = 'lastSlide';
					}
					return (
						<article className={position} key={id}>
							<img src={img} className='person-img' alt={name} />
							<h4 className='name'>{name}</h4>
							<p className='title'>{job}</p>
							<p className='text'>{text}</p>

							<FaQuoteRight className='icon' />
						</article>
					);
				})}
				<button className='prev' onClick={() => setIndex(index - 1)}>
					<FaChevronLeft />
				</button>

				<button className='next' onClick={() => setIndex(index + 1)}>
					<FaChevronRight />
				</button>
			</div>
		</section>
	);
}

export default Reviews;
