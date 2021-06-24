import React from 'react';
import { Link, Route } from 'react-router-dom';
import './ShopItem.css';
import ItemBox from './ItemBox';
import { connect } from 'react-redux';
import { useState } from 'react';

const ShopItems = ({ Items, cart }) => {
	const [selectCategory, setSelectCategory] = useState('');
	let Foods = Items.filter((items) => items.category === 'Food');
	let Drinks = Items.filter((items) => items.category === 'Drinks');
	let Dessert = Items.filter((items) => items.category === 'Dessert');
	return (
		<div className='third-page-shopitem'>
			<div className='third-page-shopitem-link'>
				<Link to='/'>
					<img
						className='third-page-nav-img'
						src='https://image.flaticon.com/icons/png/128/273/273177.png'
						alt='Cart'
					/>
				</Link>
				<div className='third-page-shopitem-select'>
					<select
						className='shopitem-select'
						value={selectCategory}
						onChange={(e) => setSelectCategory(e.target.value)}
					>
						<option className='option-select' value='all'>
							-- Select Category --
						</option>
						<option value='all'>All</option>
						<option value='Foods'>Food</option>
						<option value='Drinks'>Drink</option>
						<option value='Dessert'>Dessert</option>
					</select>
				</div>

				<Link to='/van-resto-app/shopnow/addtocart'>
					<img
						className='third-page-nav-img'
						src='https://img.icons8.com/officel/2x/shopping-cart.png'
						alt='Cart'
					/>
					<span className='cart-number'>{cart.length}</span>
				</Link>
			</div>
			<div className='third-page-shopitem-box'>
				<div>
					<Route path='/van-resto-app/shopnow/'>
						{selectCategory === '' ? (
							<div className='third-page-shopitem-section'>
								{Items.map((Items) => {
									return <ItemBox Items={Items} />;
								})}
							</div>
						) : null}
						{selectCategory === 'all' ? (
							<div className='third-page-shopitem-section'>
								{Items.map((Items) => {
									return <ItemBox Items={Items} />;
								})}
							</div>
						) : null}
						{selectCategory === 'Foods' ? (
							<div className='third-page-shopitem-section'>
								{Foods.map((Items) => {
									return <ItemBox Items={Items} />;
								})}
							</div>
						) : null}
						{selectCategory === 'Drinks' ? (
							<div className='third-page-shopitem-section'>
								{Drinks.map((Items) => {
									return <ItemBox Items={Items} />;
								})}
							</div>
						) : null}
						{selectCategory === 'Dessert' ? (
							<div className='third-page-shopitem-section'>
								{Dessert.map((Items) => {
									return <ItemBox Items={Items} />;
								})}
							</div>
						) : null}
					</Route>
				</div>
			</div>
		</div>
	);
};
const mapStateToProps = ({ Items, categoryList, cart }) => {
	return {
		Items,
		categoryList,
		cart,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		foodSelect: (Items) => dispatch({ type: 'FOOD_SELECT', payload: Items }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopItems);
