import React, { useState } from 'react';
import './single-review.scss';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function SingleReview() {
	const [state, setState] = useState(0);

	const { name, job, img, text } = people[state];

	const checkNumber = number => {
		if (number > people.length - 1) {
			return 0;
		}
		if (number < 0) {
			return people.length - 1;
		}
		return number;
	};

	const nextPerson = () => {
		setState(state => {
			let newState = state + 1;
			return checkNumber(newState);
		});
	};

	const prevPerson = () => {
		setState(state => {
			let newState = state - 1;
			return checkNumber(newState);
		});
	};

	return (
		<div className='slide-container'>
			<article className='slide'>
				<img src={img} className='img' alt={name} />
				<h4>{name}</h4>
				<p className='title'>{job}</p>
				<p className='text'>{text}</p>
				<span className='quote-icon'>
					<FaQuoteRight />
				</span>
				<div className='button-container'>
					<button className='btn prev-btn' onClick={prevPerson}>
						<FaChevronLeft />
					</button>

					<button className='btn next-btn' onClick={nextPerson}>
						<FaChevronRight />
					</button>
				</div>
			</article>
		</div>
	);
}

export default SingleReview;
