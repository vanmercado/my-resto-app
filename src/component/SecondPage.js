import { Link } from 'react-router-dom';

const ShopNow = () => {
	return (
		<div className='second-page-div'>
			<div className='second-page-div-btn'>
				<Link to='/van-resto-app/shopnow'>
					<div className='border'>
						<div className='second-page-btn'>SHOP BEST SELLER</div>
					</div>
				</Link>
			</div>
			<div className='second-page-div-btn'>
				<Link to='/van-resto-app/locationandhours'>
					<div className='border'>
						<div className='second-page-btn'>LOCATION and HOURS</div>
					</div>
				</Link>
			</div>
			<div className='second-page-div-btn'>
				<Link to='/van-resto-app/gallery'>
					<div className='border'>
						<div className='second-page-btn'>VIEW THE GALLERY</div>
					</div>
				</Link>
			</div>
			<div className='second-page-div-btn'>
				<Link to='/van-resto-app/createitem'>
					<div className='border'>
						<div className='second-page-btn create'>
							<p>Create Your Item Here!</p>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default ShopNow;
