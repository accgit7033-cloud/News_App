import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const Footer_Context = createContext();

const Footer_Context_provider = ({children})=>{
    const [Footer_children_data , Footer_children_data_Setter] = useState(false);
    const obj ={
        Footer_children_data,
        Footer_children_data_Setter
    }
     return <Footer_Context.Provider  value={obj} >
     {children}
     </Footer_Context.Provider>
}


const Footer_children_data_getter = ()=>{
    return useContext(Footer_Context)
}

export {Footer_Context_provider,Footer_children_data_getter}