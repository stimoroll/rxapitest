import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent } from '@material-ui/core/';
import { Button, Typography } from '@material-ui/core/';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
      align: 'left',
      alignSelf: 'left',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function SimpleCard({post, handlePostClick}) {
    const classes = useStyles();

    return (
      <Card className={classes.card} onClick={handlePostClick} data-key={post.id}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            USER: {post.userId}
          </Typography>
          <Typography variant="h5" component="h2">
            {post.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button  size="small" color="primary">See More</Button>
        </CardActions>
      </Card>
    );
  }