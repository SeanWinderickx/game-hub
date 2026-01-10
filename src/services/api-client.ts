import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4242d807583b4d8eb6fb74e66551d1a7'
    }
})