import React, { useState, useEffect } from 'react';
import './blog.scss';
import { articles } from './data.js';
import Article from '../../components/Article/article';

const getStorageTheme = () => {
	let theme = 'dark-theme';
	if (localStorage.getItem('theme')) {
		theme = localStorage.getItem('theme');
	}
	return theme;
};

function Blog() {
	const [theme, setTheme] = useState(getStorageTheme());

	const toggleTheme = () => {
		if (theme === 'dark-theme') {
			setTheme('light-theme');
		} else {
			setTheme('dark-theme');
		}
	};
	//everytime I change the theme value, also change the key-value pair in local storage:
	useEffect(() => {
		document.documentElement.className = theme;
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<div className='blog-section'>
			<h1>Katia's Blog</h1>
			<button className='btn' onClick={toggleTheme}>
				toggle
			</button>

			<section className='articles'>
				{articles.map(item => {
					return <Article key={item.id} {...item} />;
				})}
			</section>
		</div>
	);
}

/* function Article({ title, snippet, date, length }) {
	return (
		<article className='post'>
			<h4 className='heading2'>This is a blog</h4>
			<div className='post-info'>
				<span>date</span>
				<span>{length} min read</span>
			</div>
			<p>{snippet}</p>
		</article>
	);
} */

export default Blog;
