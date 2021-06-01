import React from 'react';
import './article.scss';
import moment from 'moment';
import { Link } from 'react-router-dom';

function Article({ id, title, snippet, date, length }) {
	return (
		<div className='post'>
			<h4 className='heading'>{title}</h4>
			<div className='post-info'>
				<span>{moment(date).format('dddd Do, YYYY')}</span>
				<span>{length} min read</span>
			</div>
			<p>{snippet}</p>
			<Link to={`/article/${id}`} className='btn btn-more'>
				Read More
			</Link>
		</div>
	);
}

export default Article;
