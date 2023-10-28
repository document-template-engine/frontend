import './Landing.sass';
import About from './About/About';
import CookieWarning from './CookieWarning/CookieWarning';
import HowItWorks from './HowItWorks/HowItWorks';
import Advantages from './Advantages/Advantages';
import Footer from './Footer/Footer';

export default function Landing() {
	return (
		<main className="landing">
			<About />
			<CookieWarning />
			<HowItWorks />
			<Advantages />
			<Footer />
		</main>
	);
}
