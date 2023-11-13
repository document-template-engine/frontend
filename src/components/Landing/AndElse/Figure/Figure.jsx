import './Figure.sass';
import PropTypes from 'prop-types';

export default function Figure({
	image,
	title,
	subtitle,
}) {
    return (
        <figure className='figure'>
            <img className='figure__icon' src={image} alt={title}/>
            <figcaption className='figure__title'>{title}</figcaption>
            <p className='figure__subtitle'>{subtitle}</p>
        </figure>
    );
};

Figure.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired
};


