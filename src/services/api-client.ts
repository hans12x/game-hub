import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fa08e1323d56476487977737ebf9a351'
    }
});