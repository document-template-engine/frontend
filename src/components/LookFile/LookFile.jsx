import { Viewer, Worker } from '@react-pdf-viewer/core';
import { useSelector } from 'react-redux';
import { ActionBar } from '../ActionBar/ActionBar';
import styles from './LookFile.module.scss';

// eslint-disable-next-line react/prop-types
function LookFile() {
	const pdfFile = useSelector((state) => state.pdfFile.pdfFile);

	return (
		<div className={styles.container}>
			{pdfFile.data && (
				<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
					<div className={styles.blockView}>
						<Viewer fileUrl={pdfFile.data} />
					</div>
				</Worker>
			)}
			<ActionBar />
		</div>
	);
}

export default LookFile;
