import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper, Typography } from '@material-ui/core/';

//TODO stylize
//TODO focus on back button
const useStyles = makeStyles({
    postarticle: {

    }
});

const PostArticle = ({singlePost, handleBackClick}) => {
    const classes = useStyles();
    return (
        <article>
            <Button onClick={handleBackClick} color="primary">Back</Button>
            <Paper className={classes.postarticle}>
                <Typography variant="h5" component="h3">{singlePost.title}</Typography>
                <Typography component="p">{singlePost.userId}</Typography>
                <Typography component="p">{singlePost.body}</Typography>
            </Paper>
        </article>
)}

export default PostArticle;