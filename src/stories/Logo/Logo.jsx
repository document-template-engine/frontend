import PropTypes from 'prop-types';

export default function Logo({ type, extraClass }) {
	return (
		<div className={extraClass}>
			{type === 'small' ? (
				<svg
					width="163"
					height="65"
					viewBox="0 0 163 65"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M10.9798 4.78442C10.7499 4.93174 10.5781 5.16187 10.4979 5.43L10.373 5.84676L9.56037 5.96083C7.53641 6.24508 5.83804 7.71446 5.31765 9.63151C5.21313 10.0168 5.18774 15.3008 5.20485 33.1516C5.22659 55.8831 5.22969 56.1833 5.44855 56.8388C5.91133 58.225 6.78987 59.1887 8.2813 59.9463L9.12331 60.3739L15.8306 60.4049C23.2779 60.4391 23.0029 60.4645 23.3601 59.711C23.5912 59.2237 23.5135 58.7863 23.1322 58.4277L22.8532 58.1654L16.3777 58.1101L9.9023 58.0549L9.19549 57.6715C8.40933 57.2453 7.96222 56.7206 7.76223 55.9897C7.664 55.631 7.63994 49.9686 7.66356 32.8217L7.6949 10.1284L7.97083 9.64134C8.37478 8.9283 8.90919 8.54709 9.74392 8.3767L10.4541 8.23171L10.5093 20.6648C10.5623 32.6012 10.573 33.1177 10.776 33.5948C11.3394 34.919 11.7682 35.2996 15.476 37.7659C17.2667 38.9571 21.3394 41.6682 24.5263 43.7905C27.7132 45.9128 30.6413 47.8011 31.0331 47.9866C31.6741 48.2901 31.8512 48.3236 32.7991 48.322C34.4641 48.3189 33.2429 49.0333 45.824 40.7028C52.3681 36.3697 52.9232 35.9827 53.7216 35.196C54.4087 34.5189 54.7899 33.8617 54.984 33.0195C55.0526 32.7226 55.0943 27.9969 55.0961 20.3567L55.0987 8.16766L55.5615 8.24176C56.1866 8.34181 57.0512 8.82847 57.3875 9.26953C57.9912 10.0614 57.9583 8.70622 57.9635 32.9949C57.9689 58.1671 58.029 56.2825 57.1942 57.1178C56.9573 57.3548 56.5503 57.6627 56.2897 57.8019L55.8161 58.0549L49.2869 58.0874L42.7576 58.1199L42.4742 58.4034C42.0998 58.778 42.0048 59.3102 42.2331 59.7521C42.6194 60.4995 42.2722 60.4666 49.4906 60.4388C55.5331 60.4155 56.0582 60.3984 56.6851 60.2044C58.3526 59.6888 59.6586 58.3937 60.2446 56.6746C60.4445 56.0882 60.4515 55.2747 60.4498 33.153C60.448 12.1486 60.4326 10.1852 60.2648 9.59518C59.7086 7.63947 57.9383 6.13354 56.0529 6.01251L55.2477 5.96072L55.1215 5.48819C55.0287 5.14166 54.8952 4.95382 54.62 4.78376C53.964 4.37804 53.5978 4.46363 52.2853 5.32917L51.1063 6.10671L43.6626 6.10008C38.3094 6.09534 36.1502 6.12869 35.974 6.21891C35.113 6.65985 35.1498 7.82422 36.0409 8.33463C36.2196 8.43711 37.6988 8.48603 41.8543 8.52722L47.428 8.58243L45.331 10.0148C40.7686 13.131 39.6956 13.8302 39.5366 13.7901C39.3884 13.7527 36.0279 11.4218 31.5917 8.2793C29.5147 6.80794 29.1368 6.5831 28.2949 6.3184C27.627 6.10837 27.2831 6.09776 21.1103 6.09776H14.6272L13.93 5.64688C12.1329 4.48472 11.6623 4.34712 10.9798 4.78442ZM17.3302 10.9004C18.526 11.6893 22.2236 14.1361 25.5472 16.3377L31.59 20.3404V32.9374C31.59 39.8656 31.5528 45.511 31.5072 45.4825C31.4616 45.4541 29.9096 44.4239 28.0581 43.1932C23.6017 40.2308 17.7293 36.3442 15.5078 34.8869C14.1663 34.0069 13.6414 33.5966 13.4107 33.2479L13.103 32.7828L13.0478 22.9465C13.0175 17.5364 13.006 11.9809 13.0223 10.601L13.0519 8.0919L14.104 8.77889C14.6825 9.15667 16.1343 10.1113 17.3302 10.9004ZM52.5046 32.5636C52.4128 32.8797 52.2027 33.2987 52.0379 33.4947C51.8732 33.6906 50.7188 34.5216 49.4727 35.3411C48.2268 36.1607 44.3372 38.739 40.8294 41.0707C37.3217 43.4025 34.3789 45.3382 34.29 45.3723C34.1488 45.4265 34.1285 43.8604 34.1285 32.9058V20.3771L37.2947 18.2896C39.0363 17.1415 43.1958 14.381 46.5382 12.1552L52.6154 8.10825L52.6434 20.0486C52.6679 30.4383 52.6499 32.0634 52.5046 32.5636ZM27.8926 8.79446C28.1961 8.94033 29.0763 9.49889 29.8484 10.0358C33.1578 12.3365 36.4253 14.592 36.8636 14.8784C37.1236 15.0481 37.3222 15.2273 37.3051 15.2766C37.2662 15.3889 33.0335 18.245 32.9061 18.245C32.8228 18.245 28.8702 15.6472 21.0772 10.4703C19.6356 9.51258 18.456 8.68359 18.456 8.62815C18.456 8.56885 20.2895 8.52766 22.8983 8.52832L27.3407 8.52943L27.8926 8.79446ZM11.4884 36.4311C10.7518 36.8885 10.3376 38.2032 10.6094 39.2204C10.9638 40.5462 11.3563 40.9528 13.931 42.6621C14.9932 43.3673 19.1402 46.123 23.1467 48.7859C27.1531 51.4488 30.7042 53.7404 31.0381 53.8785C31.5375 54.085 31.8505 54.1295 32.804 54.1295C34.6257 54.1295 33.469 54.7995 45.969 46.5029C49.6853 44.0363 53.0312 41.7915 53.4045 41.5142C54.6633 40.5797 55.2342 39.3109 54.9987 37.9719C54.8666 37.2209 54.6517 36.8648 54.1065 36.4935C53.6616 36.1906 53.2218 36.1759 52.8802 36.4528C52.6484 36.6406 52.6178 36.7769 52.5615 37.8748C52.5237 38.615 52.444 39.1559 52.3576 39.26C52.2795 39.3541 51.0889 40.1652 49.7115 41.0625C48.3342 41.9598 44.3515 44.6053 40.861 46.9413C37.3706 49.2774 34.3062 51.2813 34.0512 51.3945C33.5288 51.6264 32.272 51.6837 31.7877 51.4977C31.4468 51.3667 31.6539 51.5028 23.257 45.895C19.7969 43.5841 16.1649 41.1632 15.1859 40.5152C14.2068 39.8672 13.3377 39.2549 13.2544 39.1548C13.1573 39.0381 13.0824 38.5586 13.0456 37.8181C12.9938 36.7773 12.9626 36.6429 12.7299 36.4543C12.4146 36.199 11.8785 36.189 11.4884 36.4311ZM11.385 42.6178C10.8744 43.0476 10.6248 43.6733 10.6232 44.5273C10.6208 45.8279 11.4095 46.9977 12.984 48.0287C13.4137 48.3101 17.4528 50.9942 21.9598 53.9933C26.4667 56.9926 30.4897 59.6055 30.8997 59.7998C31.5987 60.1311 31.7207 60.153 32.8592 60.1515C33.9586 60.1502 34.141 60.1199 34.7907 59.8298C35.1853 59.6536 36.5759 58.7937 37.881 57.9189C39.1862 57.0441 43.1346 54.406 46.6554 52.0566C53.6419 47.3946 54.4417 46.7702 54.8047 45.6948C55.0678 44.915 55.0443 43.871 54.7495 43.2435C54.3536 42.4007 53.4572 42.0589 52.8766 42.5293C52.6445 42.7172 52.6095 42.8594 52.5507 43.8541C52.4988 44.7297 52.4396 45.0193 52.2741 45.2062C52.1584 45.3371 51.2689 45.9752 50.2976 46.6245C49.3264 47.2738 46.0484 49.47 43.0132 51.505C39.9781 53.54 36.7497 55.7034 35.8392 56.3127C34.0256 57.5262 33.7127 57.6684 32.8567 57.6684C31.9918 57.6684 31.5435 57.4606 29.6936 56.202C28.7637 55.5695 24.7498 52.8796 20.7737 50.2246C16.7976 47.5696 13.4328 45.2733 13.2962 45.1217C13.0783 44.88 13.0478 44.7271 13.0478 43.8734C13.0478 43.0565 13.0112 42.8541 12.819 42.6097C12.4994 42.2031 11.8735 42.2066 11.385 42.6178Z"
						fill="#385661"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M103.602 22.201C102.197 22.4782 100.081 23.6358 98.94 24.7511C94.9012 28.6997 94.8023 34.9854 98.7175 38.8858C100.701 40.8625 103.06 41.8892 105.598 41.8814C111.319 41.8633 115.646 37.689 115.646 32.1887C115.646 29.1092 114.762 26.855 112.774 24.8607C110.468 22.5484 106.975 21.5354 103.602 22.201ZM123.908 22.2823C122.522 22.8859 122.53 22.8368 122.442 31.5055C122.388 36.7818 122.435 39.591 122.587 40.1542C122.921 41.3914 123.659 41.9922 124.814 41.9669C125.621 41.9493 125.851 41.8405 126.437 41.2006C127.115 40.4593 127.12 40.4417 127.12 38.4053V36.356L128.338 35.0683L129.556 33.7805L129.889 34.246C130.072 34.5021 130.842 35.4715 131.6 36.4003C132.358 37.3292 133.55 38.8362 134.249 39.749C135.626 41.5471 136.123 41.8849 137.389 41.8849C138.029 41.8849 138.35 41.7497 138.814 41.2851C139.38 40.7182 139.519 40.2654 139.415 39.322C139.356 38.7861 138.97 38.2438 136.147 34.7349C134.844 33.1157 133.61 31.5699 133.404 31.2999L133.03 30.8087L135.907 27.9859C137.848 26.0819 138.831 24.9668 138.926 24.5599C139.135 23.6664 138.482 22.5839 137.511 22.216C136.119 21.6881 135.619 22.0096 131.33 26.1956C129.194 28.2795 127.373 29.9847 127.283 29.9847C127.193 29.9847 127.12 28.6431 127.12 27.0031C127.12 23.534 126.931 22.8475 125.833 22.326C124.972 21.9166 124.759 21.9119 123.908 22.2823ZM147.468 22.2141C146.663 22.4411 145.969 23.286 145.969 24.0394C145.969 24.372 146.327 25.1161 146.84 25.8486C147.319 26.5333 148.633 28.4075 149.76 30.0141C150.887 31.6204 151.901 33.079 152.014 33.255C152.126 33.4312 152.265 35.1153 152.321 36.9976C152.412 40.0543 152.469 40.4819 152.852 40.9985C153.794 42.2722 155.319 42.3385 156.431 41.1542C156.913 40.6415 156.935 40.4893 157.033 36.996L157.136 33.3701L160.055 29.1049C163.339 24.3086 163.488 23.9015 162.376 22.7878C161.874 22.2849 161.612 22.1881 160.753 22.1881C159.346 22.1881 158.891 22.6216 156.716 26.0328C155.725 27.5856 154.855 28.927 154.782 29.0136C154.709 29.1002 153.659 27.7376 152.447 25.9857C151.15 24.1085 150.02 22.6864 149.695 22.5229C148.864 22.1037 148.19 22.0104 147.468 22.2141ZM73.6432 22.7724L73.0289 23.3875L73.0062 31.4564C72.9937 35.8944 73.0007 39.7562 73.0218 40.0383C73.0427 40.3204 73.3312 40.8282 73.6625 41.1668L74.265 41.7823L77.2837 41.8473C82.251 41.9542 84.5308 41.2421 86.9474 38.8286C89.125 36.6537 89.9747 34.3993 89.7749 31.3266C89.584 28.3899 88.2852 25.9428 85.9972 24.209C83.7684 22.52 82.973 22.3155 78.3044 22.2308L74.2575 22.1573L73.6432 22.7724ZM107.962 27.1847C109.311 27.8148 110.419 29.0696 110.819 30.4201C111.454 32.5617 111.099 33.9551 109.514 35.5324C108.264 36.7766 107.348 37.1671 105.685 37.1638C103.705 37.1599 101.391 35.4824 100.894 33.6912C99.6391 29.1667 103.87 25.2721 107.962 27.1847ZM82.1721 27.3298C83.1636 27.8105 84.1815 28.7725 84.6558 29.677C85.1186 30.5594 85.2393 32.9891 84.8648 33.8841C84.4324 34.9177 83.575 35.8605 82.4835 36.5027C81.6277 37.006 81.3355 37.0624 79.5854 37.0628L77.6389 37.0633L77.5842 31.9852L77.5293 26.9071H79.4147C80.8997 26.9071 81.4851 26.997 82.1721 27.3298Z"
						fill="#385661"
					/>
				</svg>
			) : (
				<svg
					width="107"
					height="107"
					viewBox="0 0 107 107"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className={extraClass}
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M18.0746 7.87645C17.6962 8.11895 17.4133 8.49779 17.2812 8.93917L17.0757 9.62522L15.738 9.813C12.4062 10.2809 9.61046 12.6997 8.75381 15.8555C8.58175 16.4898 8.53996 25.1879 8.56812 54.5732C8.60392 91.9927 8.60901 92.4868 8.96929 93.5659C9.7311 95.8478 11.1773 97.4343 13.6324 98.6813L15.0185 99.3854L26.0597 99.4363C38.3191 99.4926 37.8664 99.5344 38.4545 98.2941C38.8349 97.4919 38.707 96.7718 38.0793 96.1816L37.62 95.7497L26.9603 95.6588L16.3008 95.5679L15.1373 94.9367C13.8432 94.2351 13.1072 93.3714 12.778 92.1682C12.6163 91.5777 12.5767 82.2566 12.6155 54.0302L12.6671 16.6735L13.1213 15.8717C13.7863 14.6979 14.666 14.0704 16.0401 13.7899L17.2093 13.5512L17.3001 34.0179C17.3873 53.6672 17.4049 54.5174 17.7391 55.3027C18.6666 57.4826 19.3724 58.1091 25.476 62.169C28.4238 64.1299 35.128 68.5928 40.3742 72.0865C45.6204 75.5802 50.4405 78.6885 51.0855 78.9939C52.1405 79.4934 52.4321 79.5487 53.9924 79.546C56.7333 79.5409 54.723 80.7169 75.4335 67.0036C86.206 59.8707 87.1199 59.2336 88.4342 57.9386C89.5652 56.824 90.1927 55.7421 90.5123 54.3558C90.6252 53.867 90.6938 46.0877 90.6967 33.5108L90.7011 13.4458L91.4629 13.5678C92.492 13.7325 93.9151 14.5336 94.4687 15.2596C95.4625 16.5632 95.4084 14.3323 95.4169 54.3152C95.4258 95.7526 95.5249 92.6503 94.1506 94.0253C93.7607 94.4154 93.0906 94.9222 92.6617 95.1514L91.8821 95.5679L81.1339 95.6213L70.3857 95.6748L69.9192 96.1416C69.3029 96.7582 69.1465 97.6342 69.5224 98.3617C70.1583 99.5921 69.5867 99.5379 81.4693 99.4921C91.4162 99.4537 92.2805 99.4255 93.3125 99.1063C96.0575 98.2576 98.2074 96.1256 99.172 93.2956C99.501 92.3303 99.5127 90.9913 99.5098 54.5756C99.5069 19.9991 99.4814 16.767 99.2053 15.7957C98.2897 12.5763 95.3755 10.0973 92.2718 9.89808L90.9464 9.81282L90.7385 9.03497C90.5859 8.46453 90.3661 8.15531 89.9131 7.87536C88.8332 7.20749 88.2304 7.34837 86.0697 8.7732L84.129 10.0531L71.8756 10.0422C63.0633 10.0344 59.509 10.0893 59.2188 10.2378C57.8015 10.9637 57.8622 12.8804 59.3291 13.7206C59.6232 13.8893 62.0582 13.9699 68.8988 14.0377L78.074 14.1286L74.6219 16.4865C67.1116 21.6163 65.3452 22.7671 65.0834 22.7011C64.8394 22.6397 59.3076 18.8026 52.005 13.6296C48.5858 11.2075 47.9637 10.8374 46.5778 10.4016C45.4785 10.0559 44.9123 10.0384 34.751 10.0384H24.0788L22.9311 9.29619C19.9727 7.38309 19.198 7.15659 18.0746 7.87645ZM28.5283 17.9442C30.4968 19.2429 36.5837 23.2707 42.0548 26.8949L52.0021 33.484V54.2205C52.0021 65.6255 51.9408 74.9187 51.8658 74.8718C51.7908 74.825 49.2359 73.1292 46.1881 71.1032C38.8522 66.2266 29.1853 59.8288 25.5283 57.4297C23.3201 55.9811 22.456 55.3058 22.0763 54.7317L21.5697 53.966L21.4789 37.774C21.4289 28.8682 21.41 19.723 21.4369 17.4514L21.4856 13.3211L23.2174 14.452C24.1698 15.0738 26.5597 16.6454 28.5283 17.9442ZM86.4308 53.6052C86.2796 54.1256 85.9339 54.8153 85.6626 55.138C85.3913 55.4605 83.4911 56.8284 81.4399 58.1774C79.3888 59.5266 72.986 63.7709 67.2117 67.6093C61.4374 71.4477 56.5931 74.6342 56.4468 74.6903C56.2143 74.7796 56.1808 72.2015 56.1808 54.1685V33.5444L61.393 30.1081C64.2598 28.2181 71.107 23.6739 76.6092 20.0098L86.6132 13.348L86.6593 33.0036C86.6997 50.1067 86.67 52.7819 86.4308 53.6052ZM45.9156 14.4776C46.4152 14.7177 47.8642 15.6372 49.1353 16.521C54.5829 20.3083 59.9617 24.0213 60.6834 24.4926C61.1112 24.772 61.4383 25.0671 61.4101 25.1481C61.346 25.333 54.3783 30.0347 54.1687 30.0347C54.0315 30.0347 47.525 25.7582 34.6965 17.2363C32.3233 15.6597 30.3815 14.2951 30.3815 14.2038C30.3815 14.1062 33.3998 14.0384 37.6943 14.0395L45.0072 14.0413L45.9156 14.4776ZM18.9118 59.9718C17.6993 60.7248 17.0174 62.8889 17.4649 64.5633C18.0483 66.7458 18.6944 67.4151 22.9327 70.229C24.6813 71.3899 31.5079 75.9261 38.1031 80.3097C44.6983 84.6932 50.544 88.4656 51.0936 88.6928C51.9158 89.0328 52.431 89.106 54.0006 89.106C56.9993 89.106 55.0953 90.2089 75.6722 76.5514C81.7898 72.4911 87.2976 68.7958 87.9122 68.3393C89.9844 66.8009 90.9242 64.7124 90.5365 62.5081C90.319 61.2719 89.9653 60.6857 89.0677 60.0745C88.3354 59.5759 87.6114 59.5517 87.049 60.0074C86.6675 60.3167 86.6172 60.541 86.5245 62.3483C86.4622 63.5668 86.331 64.4572 86.1888 64.6286C86.0603 64.7835 84.1003 66.1187 81.8328 67.5957C79.5656 69.0728 73.0095 73.4277 67.2637 77.2731C61.5178 81.1188 56.4733 84.4174 56.0537 84.6038C55.1937 84.9855 53.1249 85.0798 52.3276 84.7737C51.7664 84.5581 52.1073 84.7821 38.2848 75.5507C32.589 71.7467 26.6101 67.7615 24.9985 66.6947C23.3868 65.628 21.956 64.6202 21.819 64.4553C21.6591 64.2632 21.5358 63.4739 21.4753 62.255C21.3899 60.5417 21.3386 60.3205 20.9554 60.01C20.4366 59.5897 19.5539 59.5732 18.9118 59.9718ZM18.7416 70.1561C17.9011 70.8636 17.4902 71.8936 17.4876 73.2993C17.4836 75.4404 18.7819 77.366 21.3739 79.0632C22.0812 79.5263 28.7301 83.9448 36.1493 88.8819C43.5684 93.8191 50.1908 98.1203 50.8658 98.4403C52.0164 98.9856 52.2174 99.0216 54.0914 99.0193C55.9012 99.0171 56.2015 98.9671 57.271 98.4895C57.9205 98.1996 60.2097 96.784 62.3581 95.3439C64.5066 93.9038 71.0064 89.5612 76.8022 85.6937C88.303 78.0194 89.6195 76.9915 90.2171 75.2212C90.6502 73.9376 90.6115 72.219 90.1262 71.1861C89.4745 69.7987 87.9989 69.2359 87.0432 70.0103C86.6611 70.3197 86.6035 70.5537 86.5067 72.1912C86.4213 73.6325 86.3238 74.1092 86.0514 74.4169C85.8608 74.6324 84.3966 75.6829 82.7978 76.7516C81.1989 77.8205 75.8029 81.4358 70.8065 84.7857C65.8102 88.1357 60.4959 91.697 58.997 92.6999C56.0115 94.6975 55.4964 94.9316 54.0873 94.9316C52.6636 94.9316 51.9256 94.5895 48.8803 92.5177C47.3496 91.4765 40.7421 87.0486 34.1969 82.6779C27.6517 78.3075 22.1126 74.5275 21.8877 74.2779C21.529 73.8799 21.4789 73.6282 21.4789 72.223C21.4789 70.8781 21.4186 70.5449 21.1023 70.1426C20.5761 69.4733 19.5457 69.4791 18.7416 70.1561Z"
						fill="#385661"
					/>
				</svg>
			)}
		</div>
	);
}

Logo.propTypes = {
	type: PropTypes.oneOf(['small', 'default']),
	extraClass: PropTypes.string,
};

Logo.defaultProps = {
	type: 'default',
	extraClass: undefined,
};