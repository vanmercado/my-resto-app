import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

const Nav = ({ cart }) => {
	return (
		<nav>
			<div className="div-Log-Cart">
				<Link>
					<img
						className="nav-img"
						src="https://image.flaticon.com/icons/png/128/1828/1828426.png"
						alt="loginIcon"
					/>
					<span>Log in</span>
				</Link>

				<Link to="/van-resto-app/shopnow/addtocart">
					<img
						className="nav-img"
						src="https://img.icons8.com/officel/2x/shopping-cart.png"
						alt="Cart"
					/>
					<span className="cart-number">{cart.length}</span>
				</Link>
			</div>
			<div className="div-nav">
				<Link>About</Link>
				<Link>Blog</Link>
				<Link>Shop</Link>
				<Link>Store Locator</Link>
				<Link>Contact us</Link>
			</div>
		</nav>
	);
};
const mapStateToProps = ({ cart }) => {
	return {
		cart,
	};
};

export default connect(mapStateToProps)(Nav);
