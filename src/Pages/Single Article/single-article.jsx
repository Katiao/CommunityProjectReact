import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './single-article.scss';
import { articles } from '../Blog/data';

function SingleArticle() {
	const { id } = useParams();
	const [article, setArticle] = useState([]);

	const intId = parseInt(id);

	useEffect(() => {
		const newArticle = articles.filter(item => item.id === intId);
		const singleArticle = newArticle[0];
		setArticle(singleArticle);
	}, [intId]);

	return (
		<div className='article'>
			<h1>{article.title}</h1>
		</div>
	);
}

export default SingleArticle;
