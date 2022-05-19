import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import ResturantForm from "./ResturantForm";

export default function ResturantDetails() {
  const [ResturantDetails, setResturantDetails] = useState([]);
  const [newResturantDetails, setNewResturantDetails] = useState([]);

  useEffect(()=>{
    getResturantData()
  },[])

  const getResturantData = async() =>{
    let res = await fetch("http://localhost:8080/resturants")
    let data = await res.json()
    console.log(data)
    setNewResturantDetails(data)
    setResturantDetails(data)
  }

  const handelSubmit = async(Formdata) => {
    let res=await fetch("http://localhost:8080/resturants", {
      method: "POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(Formdata)
    })
    let data = await res.json()
    console.log(data)
  }

  const oneStar = () => {
    const filterData = ResturantDetails.filter((e) => {
      if (e.rating >= 1 && e.rating < 2) {
        return e;
      }
    });
    setNewResturantDetails(filterData);
  };
  const twoStar = () => {
    const filterData = ResturantDetails.filter((e) => {
      if (e.rating >= 2 && e.rating < 3) {
        return e;
      }
    });
    setNewResturantDetails(filterData);
  };
  const threeStar = () => {
    const filterData = ResturantDetails.filter((e) => {
      if (e.rating >= 3 && e.rating < 4) {
        return e;
      }
    });
    setNewResturantDetails(filterData);
  };
  const fourStar = () => {
    const filterData = ResturantDetails.filter((e) => {
      if (e.rating >= 4) {
        return e;
      }
    });
    setNewResturantDetails(filterData);
  };

  const card = () => {
    const filterData = ResturantDetails.filter((e) => {
      if (e.payment_methods.card == true) {
        return e;
      }
    });
    setNewResturantDetails(filterData);
  };

  const cash = () => {
    const filterData = ResturantDetails.filter((e) => {
      if (e.payment_methods.cash == true) {
        return e;
      }
    });
    setNewResturantDetails(filterData);
  };
  const upi = () => {
    const filterData = ResturantDetails.filter((e) => {
      if (e.payment_methods.upi == true) {
        return e;
      }
    });
    setNewResturantDetails(filterData);
  };

  const all = () => {
    const filterData = ResturantDetails.filter((e) => {
      if (
        e.payment_methods.card == true &&
        e.payment_methods.cash == true &&
        e.payment_methods.upi == true
      ) {
        return e;
      }
    });
    setNewResturantDetails(filterData);
  };

  const high = () => {
    const sortData = ResturantDetails.sort(
      (a, b) => b.cost_for_two - a.cost_for_two
    ).filter((e) => {
      return e;
    });
    return setNewResturantDetails(sortData);
  };

  const low = () => {
    const sortData = ResturantDetails.sort(
      (a, b) => a.cost_for_two - b.cost_for_two
    ).filter((e) => {
      return e;
    });
    return setNewResturantDetails(sortData);
  };

  return (
    <div>
      <ResturantForm handelSubmit={handelSubmit}/>
      {newResturantDetails.map((e) => {
        return (
          <ResturantCard
            key={e.id}
            restaurant_name={e.restaurant_name}
            card_image={e.card_image}
            dish_name={e.dish_name}
            cost_for_one={e.cost_for_one}
            total_votes={e.total_votes}
            rating={e.rating}
            reviews={e.reviews}
          />
        );
      })}
      <div>
        <button onClick={oneStar}>1Star</button>
        <button onClick={twoStar}>2Star</button>
        <button onClick={threeStar}>3Star</button>
        <button onClick={fourStar}>4Star</button>
      </div>
      <div>
        <button onClick={cash}>Cash</button>
        <button onClick={card}>Card</button>
        <button onClick={upi}>Upi</button>
        <button onClick={all}>All</button>
      </div>
      <div>
        <button onClick={high}>High to Low</button>
        <button onClick={low}>Low to High</button>
      </div>
    </div>
  );
}
