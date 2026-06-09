import React from 'react'
import Raper from '../Raper';
import Branding from '../../Footer_page/Branding';
import Design from '../../Footer_page/Design';
import Marketing from '../../Footer_page/Marketing';
import Advertisement from '../../Footer_page/Advertisement';
import About from '../../Footer_page/About';
import Contact from '../../Footer_page/Contact';
import Jobs from '../../Footer_page/Jobs';
import Press from '../../Footer_page/Press';
import Terms from '../../Footer_page/Terms';
import Privacy from '../../Footer_page/Privacy';
import Cookie from '../../Footer_page/Cookie';


import { Routes , Route } from 'react-router-dom';
import { Footer_children_data_getter } from '../Footer_data_container'
const Children = () => {
        const {Footer_children_data,Footer_children_data_Setter} = Footer_children_data_getter();
        function Data_Setter(){
Footer_children_data_Setter(false)
        }
  return (
    <div className='absolute max-[500px]:w-50 z-20 top-[-100%]  pt-0 px-10 max-[700px]:right-0 max-[700px]:top-[40%] left-0 max-[700px]:left-[40%] h-[20rem] w-[30rem] max-[700px]:w-[20rem] max-[700px]:h-[15rem] rounded-tr-3xl rounded-bl-4xl bg-[#171718]'>
            <span onClick={Data_Setter} className='absolute cursor-pointer bg-cyan-950 py-3 px-4 top-0 right-0 rounded-b-xl'>Cut</span>
      <Raper>
        <div className='relative w-full h-full '>
<Routes>
    <Route path="/Branding" element={<Branding/>} />
    <Route path="/Design" element={<Design/>} />
    <Route path="/Marketing" element={<Marketing/>} />
    <Route path="/Advertisement" element={<Advertisement/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="/Jobs" element={<Jobs/>} />
    <Route path="/Press" element={<Press/>} />
    <Route path="/Terms" element={<Terms/>} />
    <Route path="/Privacy" element={<Privacy/>} />
    <Route path="/Cookie" element={<Cookie/>} />
</Routes>
        </div>
      </Raper>
    </div>
  )
}

export default Children
