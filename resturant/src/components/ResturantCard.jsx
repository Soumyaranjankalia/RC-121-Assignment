import React from "react";
import "./Resturant.css"

export default function ResturantCard(props) {
  const {
    id,
    restaurant_name,
    card_image,
    dish_name,
    cost_for_one,
    total_votes,
    rating,
    reviews,
    
  } = props;

  return (
    <div className="container">
      <div>
        <h1>{restaurant_name}</h1>
      </div>
      <div className="image-name">
        <img src={card_image} alt="" />
      </div>
      <div>
        <h3>{dish_name}</h3>
      </div>
      <div>{id}</div>
      <div>Cost for one ₹{cost_for_one}</div>
      <div>Votes : {total_votes}</div>
      <div>Rating : {rating}</div>
      <div>Reviews : {reviews}</div>
    </div>
  );
}
