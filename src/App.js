import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import SecondPage from './component/SecondPage';
import ShopItems from './component/ShopItems';
import Gallery from './component/Gallery';
import Location from './component/Location';
import CreateItem from './component/CreateItem';
import AddToCart from './component/AddToCart';
import Nav from './component/Nav';
import './component/ShopItem.css';

const App = ({ Items, total, subtotal, cart, editItem }) => {
	return (
		<div className='App'>
			<section className='section1'>
				{/* FIRST PAGE  */}
				<Route exact path='/'>
					<Nav />
				</Route>
				<Route exact path='/'>
					<div className='shopNow'>
						<Link to='/van-resto-app'>
							<button className='shopNowBtn'>Shop Now</button>
						</Link>
					</div>
				</Route>

				{/* SECOND PAGE  */}
				<Route exact path='/van-resto-app'>
					<div className='second-page'>
						<SecondPage />
					</div>
				</Route>

				{/* THIRD PAGE  */}
				<Route exact path='/van-resto-app/shopnow'>
					<div className='shopItem-page'>
						<ShopItems />
					</div>
				</Route>
				<Route exact path='/van-resto-app/gallery'>
					<div className='gallery-page'>
						<p>Choose Food You Love</p>
						<p className='gallery-p1'>
							Your choice will help us define the look and feel of your taste
						</p>
						<div className='third-page-gallery'>
							{Items.map((Items) => {
								return <Gallery items={Items} key={Items.name} />;
							})}
						</div>
						<Link to='/van-resto-app/shopnow'>
							<button className='gallery-page-btn'>Shop Now</button>
						</Link>
					</div>
				</Route>
				<Route exact path='/van-resto-app/locationandhours'>
					<div className='Location-page'>
						<Location />
					</div>
				</Route>
				<Route exact path='/van-resto-app/createitem'>
					<div className='createitem-page'>
						<CreateItem editItem={editItem} />
					</div>
				</Route>

				{/* FOURTH PAGE */}
				<Route exact path='/van-resto-app/shopnow/addtocart' className='banner'>
					<div className='addtocart-page'>
						<div className='fourth-page-addtocart-outer'>
							<div className='fourth-page-addtocart'>
								{cart.map((item) => {
									return (
										<AddToCart
											item={item}
											subtotal={subtotal}
											key={item.name}
											type='addToCart'
										/>
									);
								})}
								<div className='fourth-page-addtocart-done'>
									<div className='fourth-page-addtocart-inner-btn'>
										<Link to='/van-resto-app/shopnow'>
											<button className='fourth-page-shop-btn'>Shop</button>
										</Link>
										<button className='fourth-page-addtocart-btn'>
											Order Now
										</button>
									</div>
									<div className='fourth-page-addtocart-inner-total'>
										<span className='fourth-page-addtocart-total'>Total:</span>
										<span>PHP {total}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Route>
			</section>
		</div>
	);
};
const mapStateToProps = ({ Items, total, subtotal, cart, editItem }) => {
	return {
		Items,
		subtotal,
		total,
		cart,
		editItem,
	};
};

export default connect(mapStateToProps)(App);
