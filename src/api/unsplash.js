import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID gW3j-082iW-5l2ipXrQL57HNnF5bB45XNxulYE0AmAk',
  },
});
