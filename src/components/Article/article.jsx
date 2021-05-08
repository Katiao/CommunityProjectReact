import React from 'react';
import './article.scss';
import moment from 'moment';

function Article({ title, snippet, date, length }) {
	return (
		/* this div should be replaced by article. article did not work */
		<div className='post'>
			<h4 className='heading2'>{title}</h4>
			<div className='post-info'>
				<span>{moment(date).format('dddd Do, YYYY')}</span>
				<span>{length} min read</span>
			</div>
			<p>{snippet}</p>
		</div>
	);
}

export default Article;
