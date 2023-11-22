import { Viewer, Worker } from '@react-pdf-viewer/core';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LookFile.module.scss';
import { ActionBar } from '../ActionBar/ActionBar';

// eslint-disable-next-line react/prop-types
function LookFile() {
	const navigate = useNavigate();
	const pdfFile = useSelector((state) => state.pdfFile);

	useEffect(() => {
		if (!pdfFile.pdfFile.length) navigate(-1);
	}, []);

	return (
		<div className={styles.container}>
			{pdfFile.pdfFile && (
				<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
					<div className={styles.blockView}>
						<Viewer fileUrl={pdfFile.pdfFile} />
					</div>
				</Worker>
			)}
			<ActionBar />
		</div>
	);
}

export default LookFile;
