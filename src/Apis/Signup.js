import axios from "axios";

//proxy

export const signupHandler = (user) => {
  return axios
    .post("http://localhost:5000/register", { user })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};
