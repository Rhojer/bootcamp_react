import axios from "axios";

export const getNotes = () => {
  return axios
<<<<<<< HEAD
    .get("https://arcane-springs-44654.herokuapp.com/api/notes")
=======
    .get("https://jsonplaceholder.typicode.com/posts")
>>>>>>> 6887ed93eca29262502b768c3ad9bdc5a232ab3e
    .then((response) => {
      return response.data;
    });
};
<<<<<<< HEAD
export const newNoteAdd = (addNote) => {
  return axios
    .post("https://arcane-springs-44654.herokuapp.com/api/notes", addNote)
=======

export const newNoteAdd = (addNote) => {
  return axios
    .post("https://jsonplaceholder.typicode.com/posts", addNote)
>>>>>>> 6887ed93eca29262502b768c3ad9bdc5a232ab3e
    .then((response) => {
      return response.data;
    });
};
