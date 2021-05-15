import React, { useState, useEffect } from 'react';
import Heading2 from '../Heading-2/heading-2';
import './latest-works.scss';
import worksData from './data';
import Categories from '../Categories/categories';
import Works from '../Works/works';

//getting unique values from categories in data file. Add All for All button:
const allCategories = ['All', ...new Set(worksData.map(item => item.category))];

function LatestWorks() {
	const [works, setWorks] = useState(worksData);
	const [categories, setCategories] = useState([]);

	//This part is to pretend we're getting data from an API or from changing data source, to remove errors:
	useEffect(() => {
		setCategories(allCategories);
	}, []);

	const filterWorks = category => {
		if (category === 'All') {
			setWorks(worksData);
			return;
		}
		const newWorks = worksData.filter(item => item.category === category);
		setWorks(newWorks);
	};

	return (
		<section className='latest-works'>
			<div className='latest-works-text-box'>
				<Heading2 text='Portfolio' />
				<p>
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
					officia deserunt mollit anim id <br />
					est laborum. Sed ut perspiciatis unde omnis iste natus
				</p>
				<Categories categories={categories} filterWorks={filterWorks} />
				<Works works={works} />
			</div>
		</section>
	);
}

export default LatestWorks;
