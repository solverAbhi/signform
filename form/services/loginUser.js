import axios from "axios";
const baseUrl = "https://signform-892golbe3-solverabhis-projects.vercel.app";

export function login(payload) {
  return new Promise((resolve, reject) => {
    let uri = baseUrl + "/signin";

    axios
      .post(uri, payload)
      .then((response) => {
        return resolve(response);
      })
      .catch((errors) => {
        reject(errors);
      });
  });
}
