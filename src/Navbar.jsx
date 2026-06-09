import React, { useState } from 'react'
import { IoIosNotifications } from "react-icons/io";
import Raper from './Raper';
import { Data_provider } from './Main_data_container';
let control;
const Navbar = () => {
  const [input_data , input_data_setter] =useState('')
  const {News_data , DataSetter , Fetch_data} = Data_provider();

 function Data_fetcher(event){
    clearTimeout(control)
  input_data_setter((item)=>{
    return item = event.target.value
  })
  if(!event.target.value) return;
  control = setTimeout(()=>{
  Fetch_data(event.target.value)
  },1000)
  console.log(control);
  }


  return (
      <Raper>
    <div>
      <div className="navbar    shadow-sm">
  <div className="flex-1">
    <a className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide">
  Suraj_Pinch
</a>
  </div>
  <div className="flex gap-2">
    <input type="text" placeholder="Search" onChange={Data_fetcher} value={input_data} className="input input-bordered w-24 md:w-auto" />
    <div className="dropdown dropdown-end">
         <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
    </div>
  </div>
</div>
    </div>
      </Raper>
  )
}

export default Navbar
