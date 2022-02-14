import axios from "axios";

export const getNotes = () => {
  return axios
    .get("https://arcane-springs-44654.herokuapp.com/api/notes")
    .then((response) => {
      return response.data;
    });
};
export const newNoteAdd = (addNote) => {
  return axios
    .post("https://arcane-springs-44654.herokuapp.com/api/notes", addNote)
    .then((response) => {
      return response.data;
    });
};
