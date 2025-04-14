
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import "./Home.css";
import { useDispatch, useSelector } from 'react-redux';
import Paste from "./Paste";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const ViewPaste = () => {
  
  const {id}= useParams();

  const allPastes = useSelector((state)=> state.paste.pastes);

  const paste = allPastes.filter((p)=>p._id === id)[0];


  return (
    <div id="home-container">
      <form id="home-form">
        <div id="title-container">
          <input
            id="title"
            type="text"
            placeholder="enter title here"
            value={paste.title}
            onChange={(e) => setTitle(e.target.value)}
            disabled
          />
          {/* <button 
          id="save-btn"
          onClick={createPaste}>
            {
              pasteId ? "Update Paste" : "Create Paste"
            }
          </button> */}
        </div>
        <div id="fake-home-container">
          <div id="home-border">
            <div id="color">
              <div className="circle" id="red"></div>
              <div className="circle" id="yellow"></div>
              <div className="circle" id="green"></div>
            </div>
          </div>
          <textarea 
          id="content" 
          value={paste.content}
          placeholder="enter content here"
          onChange={(e)=> setValue(e.target.value)}
          rows={20}
          disabled/>
        </div>
      </form>
    </div>
  )
}

export default ViewPaste
