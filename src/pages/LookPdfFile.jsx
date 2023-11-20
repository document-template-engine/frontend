import clsx from 'clsx';
import Header from '../components/Header/Header';
import LookFile from '../components/LookFile/LookFile';
import styles from '../components/Templates/TemplateList.module.sass';

function LookPdf() {
	return (
		<>
			<Header />
			<main
				className={clsx(styles.templates_wrapper, styles.templates_wrapperLook)}
			>
				<LookFile />
			</main>
		</>
	);
}

export default LookPdf;
