import axios from "axios";

//proxy

export const locationHandler = (user) => {
  return axios
    .post("http://localhost:5000/", { user })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};
