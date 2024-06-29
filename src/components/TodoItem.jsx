/* eslint-disable react/prop-types */
import React from 'react';

const TodoItem = ({ text, updateMode, deleteToDo }) => {
  return (
    <div className="flex border-2 border-black/10 rounded-lg px-3 py-3 gap-x-3 shadow-black/50 shadow-md duration-300 text-black">
      <input
        type="text"
        className="outline-none w-full bg-transparent rounded-lg ml-2 text-xl font-normal text-[#f3f7f7]"
        value={text}
        readOnly
      />
      <button
        className="inline-flex w-10 h-10 rounded-lg text-md border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={updateMode}
      >
        ✏️
      </button>
      <button
        className="inline-flex w-10 h-10 rounded-lg text-md border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={deleteToDo}
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
