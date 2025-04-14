import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import "./Home.css";
import { useDispatch, useSelector } from 'react-redux';
import Paste from "./Paste";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  // const id= useParams{
  // }
  const [title, setTitle] = useState("");
  const [value,setValue] = useState("");
  const [searchParams,setSearchParams]= useSearchParams();
  const pasteId= searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state)=> state.paste.pastes);

  useEffect(() => {

    console.log(pasteId);
    const paste = allPastes.find((p)=>p._id === pasteId);
    if(paste){
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId])

  function createPaste(e) {
    e.preventDefault();
    const   Paste = {
      title: title,
      content:value,
      _id: pasteId ||
          Date.now().toString(36),
      createdAt:new Date().toISOString(),
    }

    if(pasteId){
      //update
      dispatch(updateToPastes(Paste));
    }
    else {
      //create
      dispatch(addToPastes(Paste));
    }
    
    //after creation or updation
    setTitle('');
    setValue('');
    setSearchParams({});
  }

  


  return (
    <div id="home-container">
      <form id="home-form">
        <div id="title-container">
          <input
            id="title"
            type="text"
            placeholder="enter title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button 
          id="save-btn"
          onClick={createPaste}>
            {
              pasteId ? "Update Paste" : "Create Paste"
            }
          </button>
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
          value={value}
          placeholder="enter content here"
          onChange={(e)=> setValue(e.target.value)}
          rows={20}/>
        </div>
      </form>
    </div>
  );
};

export default Home;
