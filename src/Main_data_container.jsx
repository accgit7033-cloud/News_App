import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { createContext } from 'react'
import { ApiClient } from './axios.js';
 const Api_key = `30a579c7b4a34a74b0a44d8058216712`;

// create context 
const  Mycontext = createContext();


// context provider 
const Mycontext_provider = ({children})=>{
    const [News_data , DataSetter] = useState([]);


        const Fetch_data = async (para)=>{
        const  first_step_for_fetch_data = await ApiClient.get(`/everything?q=${para}&apiKey=${Api_key}`);
        console.log(first_step_for_fetch_data.data.articles);
          DataSetter(first_step_for_fetch_data.data.articles)
        
          
    }

     const obj ={
        News_data,
        DataSetter,
        Fetch_data
     }
   
    console.log(News_data);
  return <Mycontext.Provider value={obj}>
    {children}
   </Mycontext.Provider>
  }






  const Data_provider = ()=>{
    return useContext(Mycontext)
  }

  export {Mycontext_provider , Data_provider}