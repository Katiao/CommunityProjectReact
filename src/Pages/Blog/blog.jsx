import './blog.scss';
import { articles } from './data.js';
import Article from '../../components/Article/article';

function Blog() {
	return (
		<div>
			<nav>
				<div className='title-section'>
					<h1>Katia's Blog Page</h1>
					<button className='btn'>toggle</button>
				</div>
			</nav>
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
