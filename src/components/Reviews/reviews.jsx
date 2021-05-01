import SingleReview from '../Single-Review/single-review';
import './reviews.scss';

function Reviews() {
	return (
		<section className='reviews-section'>
			<div className='reviews-slider'>
				<div className='reviews'>
					<h2>Reviews</h2>
				</div>

				<SingleReview />
			</div>
		</section>
	);
}

export default Reviews;
