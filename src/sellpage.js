import React from "react";
import "./sellpage.css";
import UploadImage from "./UploadImage";
// import DynamicSell from "./DynamicSell";
import Nav from "./Nav";

const SellPage=()=> {
  return (
    <div>
      <Nav></Nav>
      <form className="rect20">
        <div className="rect17">
          <label className="sellitem">Sell your item here</label>
        </div>
        <label className="title">
          Title:
          <input className="rect28" type="text" />
        </label>
        <label className="price">
          Price:
          <input className="rect19" type="text" />
        </label>
        <label className="description">
          Description:
          <input className="rect21" type="text" />
        </label>
        
        <div className="rect25">
          <UploadImage></UploadImage>
          
        </div>
        <div className="buttonsell" ><button type="submit">Sell</button></div>
      </form>

      <div className="item">
        <div className="rect26">
          <p className="text">Item Preview</p>
        </div>
        <div className="rect29">
          <img src="./images/Rectangle 29.png"></img>
        </div>
      </div>

      <div className="rect27">
        <div>
          <div className="title1"> Title</div>
          <span className="prod">title</span>
        </div>
        <div className="price1 ">
          Price
          <span className="rs">price</span>
        </div>
        <div className="description-1">
          Description
          <span className="desc">description</span>
        </div>
        <div className="type">
          Type<span className="ty">New</span>
        </div>
      </div>
    </div>
  );
};

export default SellPage;
