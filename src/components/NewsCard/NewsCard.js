import React from 'react';
import { useEffect } from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import classNames from 'classnames';

import useStyles from './styles';
const NewsCard = ({article: { description, publishedAt, source, title, url, urlToImage }, i, activeArticle}) => {

    const classes = useStyles();

    useEffect(() => {
        if( activeArticle === i ) {
            let elmnt = document.getElementById(`card${i}`);
            // elmnt.scrollIntoView();
            window.scroll(0, elmnt.offsetTop - 50)
        }
    }, [i, activeArticle]);

    return (
        <Card id={`card${i}`} className={classNames( classes.card, activeArticle === i ? classes.activeCard : null)}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage || 'https://ibb.co/xXT4CrG' } />
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography className="cardDesc" variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">Learn More</Button>
                <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard;