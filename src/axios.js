import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-ddcc8.cloudfunctions.net/api'
    // 'http://localhost:5001/clone-ddcc8/us-central1/api' // THE API (cloud function) URL
});

export default instance;

