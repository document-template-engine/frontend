import About from './About/About';
import HowItWorks from './HowItWorks/HowItWorks';
import Advantages from './Advantages/Advantages';
import Footer from './Footer/Footer';
import './Landing.sass';

export default function Landing() {
	return (
		<main className="landing">
			<About />
			<HowItWorks />
			<Advantages />
			<Footer />
		</main>
	);
}