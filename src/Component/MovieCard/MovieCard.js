import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import './MovieCard.css';

function MovieCard({ movie: { title, posteUrl, description, rate } }) {


  return (

    < Card className="Card__Style" >

      <Avatar className="Avatar" alt={title} src={posteUrl} />
      <CardMedia

        component="img"
        height="200"
        image={posteUrl}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <Box component="fieldset" mb={3} borderColor="transparent">

        <Rating
          className="Rating__Style"
          name="read-only"
          value={parseInt(rate)}
          readOnly
        />

      </Box>
    </ Card >
  );
}

export default MovieCard
