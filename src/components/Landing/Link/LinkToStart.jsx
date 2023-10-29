import './LinkToStart.sass';
import { Link } from 'react-router-dom';

export default function LinkToStart() {
	return (
		<Link className="link-to-start" to="/templates">
			Попробовать бесплатно
		</Link>
	);
}
