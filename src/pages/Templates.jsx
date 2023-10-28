import React from 'react';
import './Templates.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';

const Templates = () => (
	<>
		<Header />
		<Navbar isTemplatePage />
		<div className="templates">
			<h1 className="templates__title">Шаблоны</h1>
			<ul className="templates__list">
				<li className="templates__item">
					<div className="templates__wrapper">
						<svg
							className="templates__fav-btn"
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="none"
						>
							<path
								d="M14.5487 2.43995C14.7298 2.06039 15.2701 2.06039 15.4512 2.43995L18.5391 8.91128C18.7578 9.36954 19.1935 9.68607 19.6969 9.75243L26.8057 10.6895C27.2227 10.7445 27.3896 11.2583 27.0846 11.5478L21.8842 16.4844C21.516 16.834 21.3496 17.3462 21.442 17.8454L22.7476 24.8959C22.8241 25.3094 22.387 25.627 22.0174 25.4264L15.7154 22.006C15.2692 21.7638 14.7307 21.7638 14.2844 22.006L7.98243 25.4264C7.6128 25.627 7.1757 25.3094 7.25228 24.8959L8.55781 17.8454C8.65027 17.3462 8.48386 16.834 8.1156 16.4844L2.91523 11.5478C2.61021 11.2583 2.77717 10.7445 3.19412 10.6895L10.303 9.75243C10.8064 9.68607 11.242 9.36954 11.4607 8.91128L14.5487 2.43995Z"
								className="templates__fav-btn_stroke"
							/>
							<mask
								id="mask0_1274_582"
								maskUnits="userSpaceOnUse"
								x="1"
								y="0"
								width="28"
								height="27"
							>
								<path
									d="M14.9999 1.49426L18.7729 9.40111L18.8897 9.64603L19.1588 9.68149L27.8446 10.8264L21.4906 16.8581L21.2938 17.0449L21.3432 17.3118L22.9383 25.9262L15.2384 21.7471L14.9999 21.6177L14.7614 21.7471L7.06149 25.9262L8.65663 17.3118L8.70605 17.0449L8.50923 16.8581L2.15528 10.8264L10.841 9.68149L11.1101 9.64603L11.227 9.40111L14.9999 1.49426Z"
									stroke="black"
								/>
							</mask>
							<g mask="url(#mask0_1274_582)">
								<circle cx="14.9998" cy="14.9998" r="10.2667" fill="black" />
							</g>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="249"
							height="148"
							viewBox="0 0 249 148"
							fill="none"
						>
							<path d="M0 147L124.5 73.5L249 0M249 147L0 0" stroke="#959595" />
						</svg>
					</div>
					<Link className="templates__template-name" to="/rent">
						Договор найма жилого помещения
					</Link>
				</li>
				<li className="templates__item">
					<div className="templates__wrapper">
						<svg
							className="templates__fav-btn"
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="none"
						>
							<path
								d="M14.5487 2.43995C14.7298 2.06039 15.2701 2.06039 15.4512 2.43995L18.5391 8.91128C18.7578 9.36954 19.1935 9.68607 19.6969 9.75243L26.8057 10.6895C27.2227 10.7445 27.3896 11.2583 27.0846 11.5478L21.8842 16.4844C21.516 16.834 21.3496 17.3462 21.442 17.8454L22.7476 24.8959C22.8241 25.3094 22.387 25.627 22.0174 25.4264L15.7154 22.006C15.2692 21.7638 14.7307 21.7638 14.2844 22.006L7.98243 25.4264C7.6128 25.627 7.1757 25.3094 7.25228 24.8959L8.55781 17.8454C8.65027 17.3462 8.48386 16.834 8.1156 16.4844L2.91523 11.5478C2.61021 11.2583 2.77717 10.7445 3.19412 10.6895L10.303 9.75243C10.8064 9.68607 11.242 9.36954 11.4607 8.91128L14.5487 2.43995Z"
								className="templates__fav-btn_stroke"
							/>
							<mask
								id="mask0_1274_582"
								maskUnits="userSpaceOnUse"
								x="1"
								y="0"
								width="28"
								height="27"
							>
								<path
									d="M14.9999 1.49426L18.7729 9.40111L18.8897 9.64603L19.1588 9.68149L27.8446 10.8264L21.4906 16.8581L21.2938 17.0449L21.3432 17.3118L22.9383 25.9262L15.2384 21.7471L14.9999 21.6177L14.7614 21.7471L7.06149 25.9262L8.65663 17.3118L8.70605 17.0449L8.50923 16.8581L2.15528 10.8264L10.841 9.68149L11.1101 9.64603L11.227 9.40111L14.9999 1.49426Z"
									stroke="black"
								/>
							</mask>
							<g mask="url(#mask0_1274_582)">
								<circle cx="14.9998" cy="14.9998" r="10.2667" fill="black" />
							</g>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="249"
							height="148"
							viewBox="0 0 249 148"
							fill="none"
						>
							<path d="M0 147L124.5 73.5L249 0M249 147L0 0" stroke="#959595" />
						</svg>
					</div>
					<Link className="templates__template-name" to="/kindergarten">
						Заявление в детсад
					</Link>
				</li>

				<li className="templates__item">
					<div className="templates__wrapper">
						<svg
							className="templates__fav-btn"
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="none"
						>
							<path
								d="M14.5487 2.43995C14.7298 2.06039 15.2701 2.06039 15.4512 2.43995L18.5391 8.91128C18.7578 9.36954 19.1935 9.68607 19.6969 9.75243L26.8057 10.6895C27.2227 10.7445 27.3896 11.2583 27.0846 11.5478L21.8842 16.4844C21.516 16.834 21.3496 17.3462 21.442 17.8454L22.7476 24.8959C22.8241 25.3094 22.387 25.627 22.0174 25.4264L15.7154 22.006C15.2692 21.7638 14.7307 21.7638 14.2844 22.006L7.98243 25.4264C7.6128 25.627 7.1757 25.3094 7.25228 24.8959L8.55781 17.8454C8.65027 17.3462 8.48386 16.834 8.1156 16.4844L2.91523 11.5478C2.61021 11.2583 2.77717 10.7445 3.19412 10.6895L10.303 9.75243C10.8064 9.68607 11.242 9.36954 11.4607 8.91128L14.5487 2.43995Z"
								className="templates__fav-btn_stroke"
							/>
							<mask
								id="mask0_1274_582"
								maskUnits="userSpaceOnUse"
								x="1"
								y="0"
								width="28"
								height="27"
							>
								<path
									d="M14.9999 1.49426L18.7729 9.40111L18.8897 9.64603L19.1588 9.68149L27.8446 10.8264L21.4906 16.8581L21.2938 17.0449L21.3432 17.3118L22.9383 25.9262L15.2384 21.7471L14.9999 21.6177L14.7614 21.7471L7.06149 25.9262L8.65663 17.3118L8.70605 17.0449L8.50923 16.8581L2.15528 10.8264L10.841 9.68149L11.1101 9.64603L11.227 9.40111L14.9999 1.49426Z"
									stroke="black"
								/>
							</mask>
							<g mask="url(#mask0_1274_582)">
								<circle cx="14.9998" cy="14.9998" r="10.2667" fill="black" />
							</g>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="249"
							height="148"
							viewBox="0 0 249 148"
							fill="none"
						>
							<path d="M0 147L124.5 73.5L249 0M249 147L0 0" stroke="#959595" />
						</svg>
					</div>
					<Link className="templates__template-name" to="/request">
						Претензия
					</Link>
				</li>
			</ul>
		</div>
	</>
);

export default Templates;
