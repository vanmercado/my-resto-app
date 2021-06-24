import React from 'react';
import './CreateItem.css';
import NewItem from './NewItem';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CreateItem = ({ yourItem, editItem, saveItem, saveEditItem }) => {
	const [errorMessage, setErrorMessage] = useState('');
	const [nameInput, setName] = useState('');
	const [priceInput, setPrice] = useState('');
	const [selectCategory, setSelectCategory] = useState('');
	const [imageInput, setImage] = useState('');

	useEffect(() => {
		setName(editItem ? editItem.nameInput : '');
		setPrice(editItem ? editItem.priceInput : '');
		setSelectCategory(editItem ? editItem.selectCategory : '');
		setImage(editItem ? editItem.imageInput : '');
	}, [editItem]);

	const saveItemBtn = () => {
		if (
			nameInput.trim() === '' ||
			priceInput.trim() === '' ||
			imageInput.trim() === ''
		) {
			setErrorMessage('* This Field Cannot Be Blank');
		} else if (
			yourItem.filter(
				(yourItem) =>
					yourItem.nameInput.toLowerCase() === nameInput.toLowerCase()
			).length > 0
		) {
			setErrorMessage('*task name already exists');
		} else {
			let cartItem = {
				nameInput,
				priceInput,
				selectCategory,
				imageInput,
			};

			saveItem(cartItem);
			setName('');
			setPrice('');
			setImage('');
			setSelectCategory('');
			setErrorMessage('');
		}
	};
	const editBtn = () => {
		let updateItem = {
			id: editItem.id,
			nameInput,
			priceInput,
			selectCategory,
			imageInput,
		};
		saveEditItem(updateItem);
	};
	return (
		<Route e path='/van-resto-app/createitem'>
			<div className='third-page-forms'>
				<div className='third-page-input-create'>
					<p className='third-page-title'>Create Your Item Here</p>
					<div className='third-page-form-box'>
						<form className='third-page-forms-outer'>
							<div className='forms-inner'>
								<div className='forms-inner-inputs'>
									<p className='errorMsg'>{errorMessage}</p>
									<label for='name'>Name: </label>
									<input
										placeholder='Enter Name here'
										type='text'
										name='name'
										value={nameInput}
										onChange={(e) => setName(e.target.value)}
									/>{' '}
									<br />
								</div>
								<div className='forms-inner-inputs'>
									<label for='price'>Price: </label>
									<input
										placeholder='Enter Price here'
										type='Number'
										name='price'
										value={priceInput}
										onChange={(e) => setPrice(e.target.value)}
									/>
								</div>
								<div className='forms-inner-inputs'>
									<label>Category: </label>
									<select
										className='select'
										value={selectCategory}
										onChange={(e) => setSelectCategory(e.target.value)}
									>
										<option className='optionSelect'>
											-- Select Category --
										</option>
										<option value='Food'>Food</option>
										<option value='Drink'>Drink</option>
										<option value='Dessert'>Dessert</option>
									</select>
								</div>{' '}
								<div className='forms-inner-inputs'>
									<label for='Image'>Image: </label>
									<input
										placeholder='Insert URL here'
										type='url'
										name='Image'
										value={imageInput}
										onChange={(e) => setImage(e.target.value)}
									/>
								</div>
								<Link to='/van-resto-app'>
									<button className='third-page-forms-save blue'>
										Go Back
									</button>
								</Link>
								<Link to='/van-resto-app/createitem'>
									{!editItem ? (
										<button
											className='third-page-forms-save blue'
											onClick={saveItemBtn}
										>
											Save
										</button>
									) : (
										<button
											className='third-page-forms-save yellow'
											onClick={editBtn}
										>
											Edit Save
										</button>
									)}
								</Link>
							</div>
						</form>
					</div>
				</div>
				<div className='third-page-newitem'>
					<p className='third-page-title'>Your Item</p>
					<div className='third-page-newitem-section'>
						{yourItem.map((item) => {
							return (
								<NewItem item={item} key={item.name} editItem={editItem} />
							);
						})}
					</div>
				</div>
			</div>
		</Route>
	);
};
const mapStateToProps = ({ yourItem, Items }) => {
	return {
		yourItem,
		Items,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		saveItem: (cartItem) =>
			dispatch({
				type: 'CREATE_ITEM',
				payload: cartItem,
			}),

		saveEditItem: (item) =>
			dispatch({
				type: 'SAVE_EDIT_ITEM',
				payload: item,
			}),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateItem);
