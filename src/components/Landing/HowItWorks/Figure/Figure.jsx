import './Figure.sass';
import PropTypes from 'prop-types';

export default function Figure({ image, title, subtitle, sequenceNumber }) {
	return (
		<figure className={`figure figure_${sequenceNumber}`}>
			<img className="figure__icon" src={image} alt={title} />
			<div className="figure__textbox">
				<figcaption className="figure__title">{title}</figcaption>
				<p className="figure__subtitle">{subtitle}</p>
			</div>
		</figure>
	);
}

Figure.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	sequenceNumber: PropTypes.string.isRequired,
};
