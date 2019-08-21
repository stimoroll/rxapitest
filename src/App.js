import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/';

import PostArticle from './components/PostArticle';
import PostDashboard from './components/PostDashboard';
import GetPosts from './services/GetPosts';

import './App.css';

//TODO history of routings - example for back button etc

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
  postarticle: {

  }
}));

function App() {
  const [singlePost, setSinglePost] = useState(null);
  const [posts, setPosts] = useState([])
  const [query, setQuery] = useState('');
  const [postID, setPostID] = useState(0);

  const classes = useStyles();

  let [ isLoading, dane, error ]  = GetPosts();
  //TODO: error - dispaly error if something fails: http connection, response structure

  useEffect(() => {
    if(query.length > 0 ) {
      setPosts(dane.filter((data)=> data.title && data.title.search(query) > -1));
    } else {
      setPosts(dane);
    }
  }, [dane, query]);

  const serachHandle = (query) => {
    setQuery(query);
  }

  const handlePostClick = (e) => {
    const postDataKey = parseInt(e.currentTarget.getAttribute('data-key'));
    //Notice: error handling not necessary - if fail return 0, so do not display article
    setPostID(postDataKey);
    setSinglePost((dane.filter((data)=> {
      return (parseInt(data.id) === postDataKey);
    }))[0]); //WARNING:could not work if post have id = 0;
  }

  const handleBackClick = () => {
    setPostID(0);
  }

  return (
    <div className="App">
      { postID === 0 &&
        <PostDashboard posts={posts} serachHandle={serachHandle} handlePostClick={handlePostClick} isLoading={isLoading} classes={classes} />
      }
      { postID > 0 &&
        <PostArticle singlePost={singlePost} handleBackClick={handleBackClick} />
      }
    </div>
  );
}

export default App;
