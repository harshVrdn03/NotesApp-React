import React, { useState } from "react";
import { GiCancel } from "react-icons/gi";
import NotesContainer from "./components/NotesContainer";

const App = () => {
  const [isInput, setIsInput] = useState(false);
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  const data = {
    t: title,
    d: desc,
  };
  const inputhandler = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value);
    } else if (e.target.id === "desc") {
      setdesc(e.target.value);
    }
  };
  const submitHandler = () => {
    if (data.t && data.d) {
      setNotes([...notes, data]);
      setTitle("");
      setdesc("");
    } else {
      alert("Please enter");
    }
  };
  const filter = (id) => {
    const data = notes.filter((value, index) => index !== id);
    setNotes(data);
  };
  return (
    <div className="min-h-[100vh] pb-8 ">
      {isInput ? (
        <div className="pt-3 ">
          <div className="flex flex-col w-[90%] md:w-[70%] mx-auto relative p-2 ">
            <GiCancel
              className="absolute top-0 right-0  text-white bg-black p-1 text-3xl rounded-full cursor-pointer "
              onClick={() => setIsInput(!isInput)}
            />
            <input
              type="text"
              placeholder="Title"
              className="outline-none p-8 mb-1 text-gray-600 text-2xl placeholder:text-2xl border-2 border-blue-300"
              value={title}
              id="title"
              onChange={inputhandler}
            />
            <textarea
              placeholder="Description"
              className="outline-none px-8 text-gray-600 h-[20vh] border-2 border-blue-300 text-xl placeholder:text-lg"
              value={desc}
              id="desc"
              onChange={inputhandler}
            />
            <div className="flex flex-row-reverse ">
              <button
                className=" text-right  inline-block bg-green-400 p-2 rounded-md mt-2"
                onClick={submitHandler}
              >
                submit
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center p-5  ">
          <button
            className=" text-right inline-block px-5 py-4 bg-blue-500 text-white rounded-md"
            onClick={() => setIsInput(!isInput)}
          >
            ADD NOTES
          </button>
        </div>
      )}
      <div className="grid   grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-[90%] mx-auto gap-5 pt-10">
        {notes.map((note, index) => (
          <NotesContainer
            notes={note}
            key={index}
            index={index}
            filter={filter}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
