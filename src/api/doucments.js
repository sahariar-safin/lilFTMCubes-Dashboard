import axios from "axios";

export const getDocuments = (type) => {
    return axios.get(`http://localhost:5000/documents/${ type }`);
}