import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Grid, Paper } from '@material-ui/core/';
import SearchBox from './SearchIn';
import SimpleCard from './SimpleCard';

const useStyles = makeStyles(theme => ({
    grid: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      // width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

//Notice: no reason to put it into separate file - used only there
const SinglePostListElement = ({post, handlePostClick, classes}) => (
    <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
        <SimpleCard post={post} handlePostClick={handlePostClick}/>
    </Grid>
);

//Notice: no reason to put it into separate file - used only there
const PostsGrid = ({data, handlePostClick, classes}) => (
    <Grid container className={classes.grid} spacing={2} justify="center" >
    {data
      .map(post => (
        <SinglePostListElement key={post.id} post={post} handlePostClick={handlePostClick} />
    ))}
    </Grid>
);

const PostDashboard = ({posts, serachHandle, handlePostClick, isLoading}) => {
    const classes = useStyles();

    return (
        <Paper className={classes.dashboard}>
            <SearchBox handleInputChange={serachHandle} />
            {isLoading && <CircularProgress className={classes.progress} />}
            {posts && <PostsGrid data={posts} handlePostClick={handlePostClick} classes={classes} />}
        </Paper>
)};

export default PostDashboard;