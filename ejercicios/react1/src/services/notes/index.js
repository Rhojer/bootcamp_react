import axios from "axios";

export const getNotes = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.data;
    });
};

export const newNoteAdd = (addNote) => {
  return axios
    .post("https://jsonplaceholder.typicode.com/posts", addNote)
    .then((response) => {
      return response.data;
    });
};
