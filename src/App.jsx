import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import { getAllToDo, saveToDo, updateToDo, deleteToDo } from "./utils/handleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdating) {
      updateToDo(toDoId, text, setText, setToDo, setIsUpdating);
    } else {
      saveToDo(text, setText, setToDo);
    }
  };

  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-black/50 shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
          <form className="flex text-xl text-white font-normal shadow-black/50 shadow-md" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-3"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" className="add rounded-r-lg px-5 py-3 bg-green-600 text-white shrink-0">
              {isUpdating ? "Update" : "Add"}
            </button>
          </form>
        </div>
        <div className="flex flex-wrap">
          <div className='w-full space-y-4'>
            {toDo.map((item) => (
              <TodoItem
                key={item._id}
                text={item.text}
                updateMode={() => updateMode(item._id, item.text)}
                deleteToDo={() => deleteToDo(item._id, setToDo)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
