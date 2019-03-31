import axios from 'axios';
const instance=axios.create(
    {
        baseURL:'https://burger-builder-react-6b738.firebaseio.com/'
    }
);

export default instance;