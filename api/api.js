import Axios from "axios";
import { BASE_API } from "../constants";

class Api {
  constructor() {
    // this.apiBase = BASE_API;
    this.axios = Axios.create({ baseURL: BASE_API });
  }
}

class ArbolClient extends Api {
  postArbol(arbol) {
    this.axios
      .post("/mutant", arbol)
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
}

export const arbolClient = new ArbolClient();
