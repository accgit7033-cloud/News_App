import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Type_of_news_navbar from "./Type_of_news_navbar";
import { Outlet } from "react-router-dom";
import axios from "axios";
import News from "./page/News";
import Footer from "./Footer";
import News_details from "./News_details.jsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Footer_Context_provider } from "./Footer_data_container.jsx";
import { Page_context_provider } from "./page/Show_news_or_News_details_page.jsx";
import Errorpage from "./page/Errorpage.jsx";
function App() {
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <News />,
      children: [
        {
          path: "News_details",
          element: <News_details />,
        },
      ],
      errorElement: <Errorpage />,
    },
  ],
  {
    basename: "/News_App",
  }
);




  return (
    <>
      <Navbar />
      <Type_of_news_navbar classname={`sticky top-[0px] z-10 bg-[#1D232A] `} />
      <RouterProvider router={router}>
        <News />
      </RouterProvider>
      <BrowserRouter>
      <Footer_Context_provider>
       <Footer/>
      </Footer_Context_provider>
      </BrowserRouter>
    </>
  );
}

export default App;
