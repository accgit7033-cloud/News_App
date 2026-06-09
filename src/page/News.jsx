import React, { useEffect, useState } from "react";
import Raper from "../Raper";
import axios, { create } from "axios";
import { ApiClient } from "../axios.js";
const Api_key = `30a579c7b4a34a74b0a44d8058216712 ccc`;
import Loader from "./Loader.jsx";
import { Data_provider } from "../Main_data_container.jsx";
import News_details from "../News_details.jsx";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Page_data_provider } from "./Show_news_or_News_details_page.jsx";

const News = () => {
  const { Page_show, page_show_setter } = Page_data_provider();
  console.log(Page_show);
  console.log(Data_provider());

  const { News_data, DataSetter, Fetch_data } = Data_provider();
  const [loading, loadingsetter] = useState(true);
  const [btn_click_for_details, btn_click_data_setter] = useState(true);

  const fetch = async () => {
    const first_step_for_fetch_data = await ApiClient.get(
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=30a579c7b4a34a74b0a44d8058216712`,
    );
    DataSetter(first_step_for_fetch_data.data.articles);
    loadingsetter(false);
  };
  useEffect(() => {
    fetch();
  }, []);

  function click() {
    console.log(event);
  }

  if (loading) return <Loader />;
  if(!News_data.length) return <Loader />;
  
  return (
    <Raper>
      {Page_show ? (
        <Outlet />
      ) : (
        <div className="relative w-full  mt-2 grid gap-3 grid-cols-4 max-[1152px]:grid-cols-3 max-[600px]:grid-cols-1 max-[680px]:grid-cols-2 max-[680px]:justify-items-center">
          {News_data.map(
            ({ content, description, urlToImage, url, title, publishedAt }) => {
              if (!urlToImage) return null;
              return (
                <News_card
                  key={url}
                  onClick={click}
                  urlToImage={urlToImage}
                  description={description}
                  content={content}
                  url={url}
                  title={title}
                />
              );
            },
          )}
        </div>
      )}
    </Raper>
  );
};

const News_card = ({
  content,
  description,
  urlToImage,
  url,
  title,
  publishedAt,
}) => {
  const { Page_show, page_show_setter } = Page_data_provider();

  const navigate = useNavigate();
  return (
    <div
      style={{
        boxShadow: "2px 1px 1px white",
      }}
      className="card  cursor-pointer bg-base-100 w-auto  max-[800px]:w-50 shadow-sm h-auto max-[680px]:w-70 "
    >
      <figure>
        <img
          className="relative w-full aspect-video object-cover "
          src={urlToImage}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-2 font-bold max-[1152px]:text-[17px] font-serif">
          {" "}
          {description}{" "}
        </h2>
        <h5 className="line-clamp-4 font-thin  max-[1152px]:text-[12px]"> {content} </h5>
        <div className="card-actions justify-start">
          <button
            onClick={function () {
              console.log("clicked btn ...");
              navigate("../News_details", {
                state: {
                  content,
                  description,
                  urlToImage,
                  url,
                  title,
                  publishedAt,
                },
              },{ replace: true });
              page_show_setter(true)
            }}
            class="relative mt-3 cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95"
          >
            <span class="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#B931FC] text-white rounded-[14px] bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
              Details
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
