// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
// import 'swiper/css/navigation';
// eslint-disable-next-line import/no-unresolved
import { Navigation } from 'swiper/modules';
import TemplateItem from './TemplateItem';
import './TemplateRecentDocument.sass';

// eslint-disable-next-line react/prop-types
function TemplateRecentDocument({ recentData }) {
	const breackPoints = {
		480: {
			slidesPerView: 3,
		},
		1350: {
			slidesPerView: 4.5,
		},
		1650: {
			slidesPerView: 5.5,
		},
	};

	return (
		<div>
			{recentData && (
				<Swiper
					grabCursor
					breakpoints={breackPoints}
					className="swiper"
					spaceBetween={16}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
						clickable: true,
					}}
					modules={[Navigation]}
				>
					{recentData.map((item) => (
						<SwiperSlide key={item.id}>
							<TemplateItem
								title={item.name || item.description}
								isFav={item.is_favorited}
								link={`/docs/${item.id}`}
							/>
						</SwiperSlide>
					))}
					<div className="slider-controler">
						<div className="swiper-button-prev slider-arrow" />
						<div className="swiper-button-next slider-arrow" />
					</div>
				</Swiper>
			)}
		</div>
	);
}

export default TemplateRecentDocument;
