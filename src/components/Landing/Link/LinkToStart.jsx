import './LinkToStart.sass';
import { Link } from 'react-router-dom';

export default function LinkToStart() {
	return (
		<button className="link-to-start__button">
			<Link className="link-to-start__link" to="/templates">
				Попробовать бесплатно
			</Link>
		</button>
	);
}
