import Items from '../Items.js';
import { cloneDeep } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
	Items: Items,
	cart: [],
	yourItem: [],
	editItem: null,
	subtotal: 0,
	total: 0,
};

const solveTotal = (itemTotal) => {
	let total = 0;
	itemTotal.forEach((cartItem) => {
		cartItem.subtotal = cartItem.price * cartItem.quantity;
		total += cartItem.subtotal;
	});

	return total;
};

const reducer = (state = initialState, action) => {
	let item;
	let cartCopy;
	let cartDelete;
	let total;
	let updatedCart;

	switch (action.type) {
		case 'ADD_TO_CART':
			item = action.payload;
			cartCopy = [...state.cart];
			let exists = false;
			cartCopy = cartCopy.map((newitem) => {
				let cartItem = { ...newitem };
				if (cartItem.id === item.id) {
					cartItem.quantity++;
					exists = true;
				}

				return cartItem;
			});

			if (exists === false) {
				item.quantity = 1;
				cartCopy.push(item);

				let updatedCart = cartCopy.map((cartItem) => {
					return cartItem.id === item.id ? item : cartItem;
				});
				total = solveTotal(updatedCart);
			}
			return {
				...state,
				cart: cartCopy,
				total: total,
			};
		case 'DELETE_TO_CART':
			let cartNameCopy = action.payload.name;
			cartDelete = [...state.cart];
			cartDelete = cartDelete.filter(
				(cartDelete) => cartDelete.name !== cartNameCopy
			);
			total = solveTotal(cartDelete);
			return {
				...state,
				cart: cartDelete,
				total: total,
			};
		case 'CHANGE_QUANTITY':
			let operation = action.payload.operation;

			item = action.payload.item;

			if (operation === 'minus') {
				item.quantity--;
			} else {
				item.quantity++;
			}

			if (item.quantity === 0) {
				let cartNameCopy = action.payload.item.name;
				cartDelete = [...state.cart];
				cartDelete = cartDelete.filter(
					(cartDelete) => cartDelete.name !== cartNameCopy
				);
				cartCopy = [...state.cart];
				updatedCart = cartCopy.map((cartItem) => {
					return cartItem.id === item.id ? item : cartItem;
				});
				total = solveTotal(updatedCart);
				alert('Do you want to delete this item?');
				return {
					...state,
					cart: cartDelete,
					total: total,
				};
			}

			cartCopy = [...state.cart];

			updatedCart = cartCopy.map((cartItem) => {
				return cartItem.id === item.id ? item : cartItem;
			});
			total = solveTotal(updatedCart);

			return {
				...state,
				cart: cloneDeep(updatedCart),
				total: total,
			};

		case 'CREATE_ITEM':
			let newItem = action.payload;
			newItem.id = uuidv4();
			let yourItemCopy = [...state.yourItem, action.payload];
			return {
				...state,
				yourItem: yourItemCopy,
			};
		case 'DELETE_YOUR_ITEM':
			let itemDelete = state.yourItem.filter(
				(yourItemDelete) => yourItemDelete.id !== action.payload
			);

			return {
				...state,
				yourItem: itemDelete,
			};

		case 'EDIT_ITEM':
			console.log(action.payload);
			return {
				...state,
				editItem: action.payload,
			};
		case 'SAVE_EDIT_ITEM':
			let updatedItems = state.yourItem.map((item) => {
				if (item.id === action.payload.id) {
					return action.payload;
				}
				return item;
			});

			return {
				...state,
				yourItem: updatedItems,
				editItem: null,
			};

		default:
			return state;
	}
};

export default reducer;
