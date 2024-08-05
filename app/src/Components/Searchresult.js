import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { BASE_URL } from "../App";

export default function Searchresult(props) {
  let foods = props.data;
  console.log(foods);
  return (
    <div className="result-main-container">
      <div className="food-info">
        {foods?.map((food) => (
          <div className="food-card" key={food.name}>
            <div>
              <img src={BASE_URL + food.image} alt="food-image" /> {/*new*/}
            </div>
            <div className="text-price">
              <div>
                <h3>{food.name.toUpperCase()}</h3>
                <p>{food.text}</p>
              </div>
              <button id="price">{`$ ${food.price.toFixed(2)}`}</button>{" "}
              {/*new*/}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
