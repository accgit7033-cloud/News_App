import { createContext, useContext, useState } from "react";

const Mycontext = createContext();

const Page_context_provider = ({children})=>{
    const [Page_show , page_show_setter] = useState(false)
  const obj ={
    Page_show,
    page_show_setter
  }
    return <Mycontext.Provider value={obj} >
        {children}
    </Mycontext.Provider >
}


const Page_data_provider = ()=>{
    return useContext(Mycontext)
}

export {Page_context_provider,Page_data_provider}