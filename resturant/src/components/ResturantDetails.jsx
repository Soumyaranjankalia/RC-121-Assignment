import React, { useState } from 'react'
import data from "./data.json"
import ResturantCard from './ResturantCard'

export default function ResturantDetails() {
    
    const [ResturantDetails, setResturantDetails] = useState(data)
    const [newResturantDetails, setNewResturantDetails] = useState(data)

    const oneStar=() =>{
      const filterData = ResturantDetails.filter((e)=>{
        if(e.rating >= 1 && e.rating < 2){
          return e;
        }
      })
      setNewResturantDetails(filterData)
    }
    const twoStar=() =>{
      const filterData = ResturantDetails.filter((e)=>{
        if(e.rating >= 2 && e.rating < 3){
          return e;
        }
      })
      setNewResturantDetails(filterData)
    }
    const threeStar=() =>{
      const filterData = ResturantDetails.filter((e)=>{
        if(e.rating >= 3 && e.rating < 4){
          return e;
        }
      })
      setNewResturantDetails(filterData)
    }
    const fourStar=() =>{
      const filterData = ResturantDetails.filter((e)=>{
        if(e.rating >= 4){
          return e;
        }
      })
      setNewResturantDetails(filterData)
    }

    const card=() =>{
      const filterData = ResturantDetails.filter((e)=>{
        if(e.payment_methods.card == true){
          return e;
        }
      })
      setNewResturantDetails(filterData)
    }

    const cash=() =>{
      const filterData = ResturantDetails.filter((e)=>{
        if(e.payment_methods.cash == true){
          return e;
        }
      })
      setNewResturantDetails(filterData)
    }
    const upi=() =>{
      const filterData = ResturantDetails.filter((e)=>{
        if(e.payment_methods.upi == true){
          return e;
        }
      })
      setNewResturantDetails(filterData)
    }

    const all=() =>{
      const filterData = ResturantDetails.filter((e)=>{
        if(e.payment_methods.card == true && e.payment_methods.cash == true && e.payment_methods.upi == true){
          return e;
        }
      })
      setNewResturantDetails(filterData)
    }

    const high = () => {
      const sortData = ResturantDetails.sort((a,b)=>(a.cost_for_two > b.cost_for_two) ? 1:-1)
      return setNewResturantDetails(sortData)
    }

    const low = () => {
      const sortData = ResturantDetails.sort((a,b)=>(a.cost_for_two < b.cost_for_two) ? -1:1)
      return setNewResturantDetails(sortData)
    }

  return (
    <div >
      {newResturantDetails.map((e)=> {
          return(
              <ResturantCard 
              key = {e.id}
              restaurant_name = {e.restaurant_name}
              card_image = {e.card_image}
              dish_name={e.dish_name}
              cost_for_one={e.cost_for_one}
              total_votes={e.total_votes}
              rating={e.rating}
              reviews={e.reviews}
              />
          )
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
  )
}
