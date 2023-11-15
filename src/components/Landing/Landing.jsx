import './Landing.sass';
import About from './About/About';
import HowItWorks from './HowItWorks/HowItWorks';
import AddItToFavorites from './AddItToFavorites/AddItToFavorites';
import AndElse from './AndElse/AndElse';
import Advantages from './Advantages/Advantages';
import Footer from './Footer/Footer';
import SaveItToDraft from './SaveItToDraft/SaveItToDraft';

export default function Landing() {
	return (
		<main className="landing">
			<About />
			<HowItWorks />
			<AddItToFavorites />
			<SaveItToDraft />
			<AndElse />
			<Advantages />
			<Footer />
		</main>
	);
}
