import axios from "axios";
const baseUrl = "https://signform-api.vercel.app";

export function signin(payload) {
  return new Promise((resolve, reject) => {
    let uri = baseUrl + "/signup";

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
