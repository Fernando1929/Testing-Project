import axios from "axios";

//proxy

export const credentialHandler = (user) => {
  return axios
    .post("http://localhost:5000/login",{ user })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};
