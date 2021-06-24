import { connect } from 'react-redux';
const ItemBox = (props) => {
	return (
		<div className='third-page-shopitem-inner-box'>
			<div className='third-page-shopitem-inner-border'>
				<img
					className='third-page-shopitem-inner-box-image'
					src={props.Items.image}
					alt={props.Items.id}
				/>
				<p>{props.Items.name}</p> <br />
				<p>Php {props.Items.price}</p>
				<button
					className='third-page-shopitem-inner-btn'
					onClick={() => props.addToCart(props.Items)}
				>
					<b>Add to Cart</b>
				</button>
			</div>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (Items) => dispatch({ type: 'ADD_TO_CART', payload: Items }),
	};
};
export default connect(null, mapDispatchToProps)(ItemBox);
