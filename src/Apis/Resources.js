import axios from "axios";

//proxy

export const resourceHandler = () => {
  return axios
    .get("http://localhost:5000/resource")
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

export const clothHandler = () => {
  return axios
    .get("http://localhost:5000/resource/cloth")
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

export const waterHandler = () => {
  return axios
    .get("http://localhost:5000/resource/water")
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

export const fuelHandler = () => {
  return axios
    .get("http://localhost:5000/resource/fuel")
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

export const foodHandler = () => {
  return axios
    .get("http://localhost:5000/resource/food")
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

export const medHandler = () => {
  return axios
    .get("http://localhost:5000/resource/med")
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};
