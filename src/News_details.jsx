import React from "react";
import Raper from "./Raper";
import { useLocation } from "react-router-dom";
import { Page_data_provider } from "./page/Show_news_or_News_details_page";
const News_details = (params) => {
    const { Page_show, page_show_setter } = Page_data_provider();
  const data = useLocation();
  const final_details_data = data.state;
  const { content, title,
                  description,
                   urlToImage,publishedAt,
                    url} = data.state;
  
  return (
    <Raper>
      <div className="relative max-[700px]:flex max-[700px]:flex-col grid grid-cols-2 gap-3 pb-6  w-full h-[37rem]  max-[700px]:w-[90%] max-[700px]:left-[50%] transform max-[700px]:translate-x-[-50%]  pt-10 px-10 mt-2 rounded-xl  bg-[#181f2769]">
        <div className="left pt-20 max-[700px]:pt-1">
          <h1 className="text-4xl max-[700px]:text-[14px] font-extrabold text-white drop-shadow-lg"> Title : {title} </h1>
          <h1 className="relative max-[700px]:leading-4 font-thin mt-4 font-mono" style={{
            letterSpacing:"1px"
          }}>.. {content} </h1>
        <h1 className="text-xs pt-4 font-extrabold text-white drop-shadow-lg">
  {description}
</h1>
<p> {publishedAt} </p>
        </div>
        <div className="right py-10  flex justify-center ">
          <img className="relative w-[80%] rounded-xl object-cover aspect-video" src={urlToImage} alt="" />
        </div>
        <span className="absolute   text-center right-3 top-3 px-2 py-2">
<button onClick={function(){
  page_show_setter(false)
}}
  class="relative inline-flex items-center bottom-5 justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group"
>
  <span
    class="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56"
  ></span>
  <span class="absolute bottom-0 left-0 h-full -ml-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-auto h-full opacity-100 object-stretch"
      viewBox="0 0 487 487"
    >
      <path
        fill-opacity=".1"
        fill-rule="nonzero"
        fill="#FFF"
        d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
      ></path>
    </svg>
  </span>
  {/* cut btn */}
  <span class="absolute top-0 right-0 w-12 h-full mr-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="object-cover w-full h-full"
      viewBox="0 0 487 487"
    >
      <path
        fill-opacity=".1"
        fill-rule="nonzero"
        fill="#FFF"
        d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
      ></path>
    </svg>
  </span>
  {/* cut btn last  */}
  <span
    class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
  ></span>
  <span class="relative cursor-pointer text-base font-semibold">Cut !..</span>
</button>

        </span>
      </div>
      {/* <div className='fixed text-center left-0 z-0  top-0 pt-10 px-10 h-screen left-[50%] transform translate-x-[-50%] w-[70rem]  bg-green-600'>
    </div> */}
    </Raper>
  );
};

export default News_details;
