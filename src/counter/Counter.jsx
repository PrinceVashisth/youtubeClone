import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { users } from './counterSlice';

export function Counter() {
  const count= useSelector((state) => state.users);
  const Dispatch = useDispatch();

console.log(count);

let name = useRef('');
let age = useRef(10); 
const handeller=(e)=>{
  e.preventDefault();
  name = name.current.value;
  age = age.current.value;
    Dispatch(users({name,age}))
  }
  return (
    <div>
      <div>
      <form action="">
        <input type="text" ref={name} />
        <input type="text"  ref={age}/>
      <button onClick={handeller}>submit</button>
      </form>
      </div>
    </div>
  )
}