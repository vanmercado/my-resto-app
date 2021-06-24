import React from "react";
import "./AddToCart.css";
import { connect } from "react-redux";

const AddToCart = (props) => {
	return (
		<section>
			<div className="fourth-page-addtocart-inner-box">
				<div className="fourth-page-addtocart-inner-order">
					<div className="fourth-page-addtocart-inner-imahe">
						<img
							className="addtocart-photo"
							src={props.item.image}
							alt={props.item.id}
						/>
					</div>
					<div className="fourth-page-addtocart-inner-name">
						<div className="addtocart-qty">
							<div className="addtocart-inner-name">
								<p className="addtocart-font-name">{props.item.name}</p>
								<p>Php {props.item.price}</p>
							</div>
							<div className="addtocart-inner-qty">
								<div className="addtocart-inner-qty-number">
									<p className="qty-p">Qty: </p>
									<div className="qty-btn">
										<button
											className="qty-plusminus-btn"
											onClick={() => props.changeQuantity(props.item, "minus")}
										>
											-
										</button>
										<p className="qty-numbers">{props.item.quantity}</p>
										<button
											className="qty-plusminus-btn"
											onClick={() => props.changeQuantity(props.item, "plus")}
										>
											+
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="addtocart-discription">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
							id!
						</div>
					</div>
				</div>
				<div className="fourth-page-addtocart-inner-subtotal">
					<div className="fourth-page-addtocart-box-remove">
						<button
							className="fourth-page-addtocart-inner-remove"
							onClick={() => props.deleteToCart(props.item)}
						>
							X
						</button>
					</div>
					<div className="fourth-page-addtocart-inner-amount">
						<p>Php {props.item.subtotal}</p>
					</div>
				</div>
			</div>
		</section>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		deleteToCart: (item) => dispatch({ type: "DELETE_TO_CART", payload: item }),
		changeQuantity: (item, operation) =>
			dispatch({ type: "CHANGE_QUANTITY", payload: { item, operation } }),
	};
};
export default connect(null, mapDispatchToProps)(AddToCart);
