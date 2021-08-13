import axios from "axios";

//proxy

export const leaderInfoHandler = (user) => {
  return axios
    .post("http://localhost:5000/register/leader", { user })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

export const survivorInfoHandler = (user) => {
  return axios
    .post("http://localhost:5000/register/survivor", { user })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};


export const locationHandler = (location) => {
    return axios
      .post("http://localhost:5000/user/location", { location })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err.response;
      });
  };
