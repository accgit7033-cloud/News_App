import React, { useEffect, useState } from 'react'
import { Link , NavLink } from 'react-router-dom'
import Raper from './Raper'
import axios from 'axios';
import { ApiClient } from './axios.js';
import { Data_provider } from './Main_data_container.jsx';



const Type_of_news_navbar = ({classname}) => {
  const {News_data , Datasetter , Fetch_data} = Data_provider()
  
  const [ data , datasetter] = useState([]);
  const to_container = ['Business','Entertainment','General','Health','Science','Sport','Technology']


  function Fetch_url_for_data(parameter){
  Fetch_data(parameter)
  }


  return (
 <div className={`${classname}`}>
     <Raper>
    <div className='relative navbar_data w-full pb-4 scroller_hidden cursor-pointer overflow-scroll pt-5 mt-1 '>
      <div className='relative w-full flex flex-row justify-center gap-6'>
        {
          to_container.map((item)=>{
         return   <button key={item} onClick={function(){
          Fetch_url_for_data(item)
         }} className='relative py-2 px-3 rounded-xl bg-indigo-400 font-bold cursor-pointer'> {item} </button>
          })
        }
      </div>
    </div>
      </Raper>
 </div>
  )
}

export default Type_of_news_navbar
