import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './single-article.scss';
import { articles } from '../Blog/data';
import moment from 'moment';
import { Link } from 'react-router-dom';

function SingleArticle() {
	const { id } = useParams();
	const [article, setArticle] = useState([]);

	const intId = parseInt(id);

	useEffect(() => {
		const newArticle = articles.filter(item => item.id === intId);
		const singleArticle = newArticle[0];
		setArticle(singleArticle);
	}, [intId]);
	const { title, date, text1, text2, text3 } = article;
	return (
		<div>
			<div className='article'>
				<h1>{title}</h1>
				<span className='date'>{moment(date).format('dddd Do, YYYY')}</span>

				<Link className='btn btn-articles' to='/blog'>
					Back to Articles
				</Link>

				<p className='text1'>{text1}</p>
				<br />
				<br />
				<p className='text2'>{text2}</p>
				<br />
				<br />
				<p className='text3'>{text3}</p>
			</div>
			<Link className='btn btn-home' to='/'>
				Back Home
			</Link>
		</div>
	);
}

export default SingleArticle;
