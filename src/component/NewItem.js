import { connect } from 'react-redux';
import { useState } from 'react';

const NewItem = ({ item, deleteYourItem, editItem }) => {
	const [submit, setSubmit] = useState('Submit');
	const submitHandle = () => {
		setSubmit('Pending...');
		alert('This item has been submitted. Please wait for the approval.');
	};
	return (
		<div className='third-page-newitem-inner-box'>
			<div className='third-page-newitem-outer-imahe'>
				<div className='third-page-newitem-inner-imahe'>
					<img src={item.imageInput} alt=' New Item Photos' />
				</div>
				<div className='third-page-newitem-inner-names'>
					<p className='itemNames'>
						<b>{item.nameInput}</b>
					</p>
					<p>
						<small>Php {item.priceInput}</small>
					</p>
					<p>
						<button
							className='third-page-forms-btn  red'
							onClick={() => deleteYourItem(item.id)}
						>
							Delete
						</button>
					</p>
					<p>
						<button
							className='third-page-forms-btn  yellow'
							onClick={() => editItem(item)}
						>
							Edit
						</button>
					</p>
				</div>
			</div>
			<p>
				<button
					className='third-page-forms-btn-submit green'
					onClick={submitHandle}
				>
					{submit}
				</button>
			</p>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteYourItem: (id) => dispatch({ type: 'DELETE_YOUR_ITEM', payload: id }),

		editItem: (item) => dispatch({ type: 'EDIT_ITEM', payload: item }),
	};
};
export default connect(null, mapDispatchToProps)(NewItem);
