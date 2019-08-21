import { useEffect, useState } from 'react';
import axios from 'axios';

const GetPosts = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false)

    async function fetchAPI() {
      setIsLoading(true);
      try {
        //NOTICE: axios because cant care about 
        // - convert to json
        // - write additional code for HTTP errors like : 40x
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setData(response.data);
      } catch(error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    //NOTICE: currently runned only once, but simply can chagne it to 
    // reacting for some variable - for example query, postid or other parameter
    // and then get detailed data from API
    // Is not necessary in this case, because detailed API URL contaisn the same data
    // as global list of posts
    useEffect(() => {
      fetchAPI();
    }, []);

  return [ isLoading, data, error ];
}

export default GetPosts;