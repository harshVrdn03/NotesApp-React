import React from "react";
import "./notescontainer.css";
import { AiFillDelete } from "react-icons/ai";
const NotesContainer = ({ notes, index, filter }) => {
  return (
    <div className="p-3  h-[350px] border-2  bg-blue-400 rounded-2xl flex flex-col font-sans relative">
      <h1 className="text-3xl font-semibold uppercase w-full break-words p-2">
        {notes.t}
      </h1>
      <AiFillDelete
        className="absolute bottom-2 cursor-pointer right-2 text-black "
        size={25}
        onClick={() => filter(index)}
      />
      <p className=" text-xl  break-words overflow-scroll ab p-2">
        <span className="text-white text-sm ">Description </span>
        <br />
        {notes.d}
      </p>
    </div>
  );
};

export default NotesContainer;
