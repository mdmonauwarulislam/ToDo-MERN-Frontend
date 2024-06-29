import axios from "axios";

const baseUrl = "https://todo-mern-backend-1.onrender.com";

const getAllToDo = (setToDo) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      console.log("Data --->", data);
      setToDo(data);
    })
    .catch((err) => console.log(err));
};

const saveToDo = (text, setText, setToDo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then(({ data }) => {
      console.log(data);
      setText("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = (toDoId, text, setText, setToDo, setIsUpdating) => {
  axios
    .post(`${baseUrl}/update`, { _id: toDoId, text })
    .then(({ data }) => {
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (_id, setToDo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then(({ data }) => {
      console.log(data);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, saveToDo, updateToDo, deleteToDo };
