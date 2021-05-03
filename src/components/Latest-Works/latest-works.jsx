import React, { useState } from 'react';
import Heading2 from '../Heading-2/heading-2';
import './latest-works.scss';
import worksData from './data';
import Categories from '../Categories/categories';
import Works from '../Works/works';

function LatestWorks() {
	const [works, setWorks] = useState(worksData);
	const [categories, setCategories] = useState([]);
	return (
		<section className='latest-works'>
			<div className='latest-works-text-box'>
				<Heading2 text='Latest Works' />
				<p>
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
					officia deserunt mollit anim id <br />
					est laborum. Sed ut perspiciatis unde omnis iste natus
				</p>
				<Categories />
				<Works />
			</div>
		</section>
	);
}

export default LatestWorks;
