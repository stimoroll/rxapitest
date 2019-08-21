import { useEffect, useState } from 'react';
import axios from 'axios';

const GetPosts = () => {
    const [data, dataSet] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false)

    async function fetchAPI() {
      setIsLoading(true);
      try {
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dataSet(response.data);
      } catch(error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    useEffect(() => {
      fetchAPI();
    }, []);

  return [ isLoading, data, error ];
}

export default GetPosts;