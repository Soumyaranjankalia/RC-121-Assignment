import React, { useState } from "react";

export default function ResturantForm({handelSubmit}) {
  const [form, setForm] = useState({
    restaurant_name: "",
    card_image: "",
    dish_name: "",
    cost_for_two: "",
    total_votes: "",
    rating: "",
    reviews: "",
    payment_methods: "",
  });

  const handelChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

 
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={handelChange}
          name="restaurant_name"
          placeholder="Resturant Name"
          value={form.restaurant_name}
        />
        <input
          type="text"
          onChange={handelChange}
          name="card_image"
          placeholder="Dish Image"
          value={form.card_image}
        />
        <input
          type="text"
          onChange={handelChange}
          name="dish_name"
          placeholder="Dish Name"
          value={form.dish_name}
        />
        <input
          type="number"
          onChange={handelChange}
          name="cost_for_two"
          placeholder="Dish Price for Two"
          value={form.cost_for_two}
        />
        <input
          type="number"
          onChange={handelChange}
          name="total_votes"
          placeholder="Total Votes"
          value={form.total_votes}
        />
        <input
          type="number"
          onChange={handelChange}
          name="reviews"
          placeholder="Reviews"
          value={form.reviews}
        />
        <input
          type="number"
          onChange={handelChange}
          name="rating"
          placeholder="Rating"
          value={form.rating}
        />
        <select
          onChange={handelChange}
          name="payment_methods"
          id=""
          placeholder="Payment Method"
          value={form.payment_methods}
        >
          <option value="">None</option>
          <option value="true">Card</option>
          <option value="true">Cash</option>
          <option value="true">Upi</option>
        </select>
        {/* <input onClick={()=>handelSubmit(form)} type="submit" name="" id="" /> */}
      </form>
      <button onClick={()=>handelSubmit(form)}>Submit</button>
    </div>
  );
}
