import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID cYdt-sZJlSTwK0OWwLaIxYklDTVKqWU6_LOijkqGwLo',
  },
});
