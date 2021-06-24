import React from "react";
import "./Gallery.css";

const Gallery = (props) => {
	return (
		<div className="third-page-div">
			<img className="third-page-images" src={props.items.image} alt="photo" />
			<p>{props.items.name}</p>
		</div>
	);
};

export default Gallery;
