import axios from "axios";

export const getDocuments = (type) => {
    return axios.get(`https://salty-inlet-72802.herokuapp.com/documents/${ type }`);
}