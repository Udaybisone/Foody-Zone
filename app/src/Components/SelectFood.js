import React from 'react'
import './Navbar.css'

const array = [
  {
    name:'All',
    type:'all'
  },
  {
    name:'Breakfast',
    type:'breakfast'
  },
  {
    name:'Lunch',
    type:'lunch'
  },
  {
    name:'Dinner',
    type:'dinner'
  }
]

export default function SelectFood(props) {
  return (
    <div className='select-box'>
        {
          array.map((food,i)=>(
            <button onClick={()=>props.selectbybutton(food.type)}
            style={(props.Slectedbtn===food.type)?{backgroundColor:'#f11313'}:null}
            key={i}
            >{food.name}</button>
          ))
        }
    </div>
  )
}
