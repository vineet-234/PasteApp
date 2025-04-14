import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Paste.css";
import { removeFromPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handelDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div id="pastes_container">
      <input
        id="search_bar"
        type="search"
        placeholder="search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div id="input_data">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div id="paste" key={paste?._id}>
                <input id="title_heading" value={paste.title} />
                <textarea id="input_content" value={paste.content} />
                <div id="button_container">
                  <button className="button">
                    <a id="edit_btn"
                    href={`/?pasteId=${paste?._id}`}>Edit</a>
                  </button>
                  <button className="button">
                    <a id="view_btn"
                    href={`/pastes/${paste?._id}`}>View</a>
                  </button>
                  <button className="button"
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("Copied to clipboard");
                    }}
                  >
                    Copy
                  </button>
                  <button className="button"
                   onClick={() => handelDelete(paste?._id)}>
                    Delete
                  </button>
                  {/* <button>
                    Share
                    </button> */}
                </div>
                <div id="date">{paste.createdAt}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;
