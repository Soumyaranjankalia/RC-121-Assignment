import React, { useState } from "react";

export default function ResturantForm() {
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

  const addForm = () => {
    setForm((e) => {
      return [
        ...e,
        {
          restaurant_name: e.target.name,
          card_image: e.target.name,
          dish_name: e.target.name,
          cost_for_two: e.target.name,
          total_votes: e.target.name,
          rating: e.target.name,
          reviews: e.target.name,
          payment_methods: e.target.name,
        },
      ];
    });
    console.log(form);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={handelChange}
          name="restaurant_name"
          placeholder="Resturant Name"
        />
        <input
          type="text"
          onChange={handelChange}
          name="card_image"
          placeholder="Dish Image"
        />
        <input
          type="text"
          onChange={handelChange}
          name="dish_name"
          placeholder="Dish Name"
        />
        <input
          type="number"
          onChange={handelChange}
          name="cost_for_two"
          placeholder="Dish Price for Two"
        />
        <input
          type="number"
          onChange={handelChange}
          name="total_votes"
          placeholder="Total Votes"
        />
        <input
          type="number"
          onChange={handelChange}
          name="reviews"
          placeholder="Reviews"
        />
        <input
          type="number"
          onChange={handelChange}
          name="rating"
          placeholder="Rating"
        />
        <select
          onChange={handelChange}
          name="payment_methods"
          id=""
          placeholder="Payment Method"
        >
          <option value="">None</option>
          <option value="true">Card</option>
          <option value="true">Cash</option>
          <option value="true">Upi</option>
        </select>
        <input onClick={addForm} type="submit" name="" id="" />
      </form>
    </div>
  );
}
