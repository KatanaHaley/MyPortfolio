import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Grid, Card, CardContent, Typography } from "@material-ui/core/";
import netflixmay from './images/netflixmay.png';
import spacecadetmay from './images/spacecadetmay.png';
import cryptotrackermay from './images/cryptotrackermay.png';
//import renderingdecks from './images/renderingdecks.png';
import decoderringmay from './images/decoderringmay.png';
import natlparks from './images/natlparks.png';
import tiktokmay from './images/tiktokmay.png'
import clickergame from './images/clickergame.png';
import greenandorangemap from './images/greenandorangemap.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    maxWidth: 345,
  },
  paper: {
    height: 140,
    width: 100,
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <div className="Projects" id="projects">
      <div>
        <h2>Projects</h2>
      </div>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {/* PROJECT ONE */}
        <Grid container justify="center" spacing="0">
          <Grid>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Netflix Movie Player"
                  height="140"
                  image={netflixmay}
                  title="Netflix Movie Player"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Netflix Movie Player
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary">
                  View Code
                </Button>
                <Button size="small" color="primary">
                  Explore App
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* PROJECT TWO */}
          <Grid>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Astronomy App with NASA API"
                  height="140"
                  image={spacecadetmay}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Astronomy App with NASA API
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary"
                href="https://astronomy-app-e6dee.web.app/nasaphoto#">
                  View Code
                </Button>
                <Button size="small" color="primary">
                  Explore App
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* PROJECT THREE */}
          <Grid>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="TikTok-like Social Video App"
                  height="140"
                  image={tiktokmay}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    TikTok-like Social Video App
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary">
                  View Code
                </Button>
                <Button size="small" color="primary">
                  Explore App
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid>
            {/* PROJECT FOUR */}
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Decoder Ring Project"
                  height="140"
                  image={decoderringmay}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Decoder Ring Project
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary">
                  View Code
                </Button>
                <Button size="small" color="primary">
                  Explore App
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid>
            {/* PROJECT FIVE */}
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Crypto Price Tracker"
                  height="140"
                  image={cryptotrackermay}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Crypto Price Tracker
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary">
                  View Code
                </Button>
                <Button size="small" color="primary">
                  Explore App
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid>
            {/* PROJECT SIX */}
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="3D Map"
                  height="140"
                  image={greenandorangemap}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    3D Custom World Mapping & Tracking
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary">
                  View Code
                </Button>
                <Button size="small" color="primary">
                  Explore App
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid>
            {/* PROJECT SEVEN */}
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="National Parks Directory"
                  height="140"
                  image={natlparks}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    National Parks Directory
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary">
                  View Code
                </Button>
                <Button size="small" color="primary">
                  Explore App
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid>
            {/* PROJECT EIGHT */}
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Necromancer Game"
                  height="140"
                  image={clickergame}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Necromancer Game
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary">
                  View Code
                </Button>
                <Button size="small" color="primary">
                  Explore App
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid>
            {/* PROJECT NINE */}
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Flashcard Study App"
                  height="140"
                  image={cryptotrackermay}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Flashcard Study App
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary">
                  View Code
                </Button>
                <Button size="small" color="primary">
                  Explore App
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid>
            {/* PROJECT TEN */}
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Eric Lovell Actor Portfolio"
                  height="140"
                  image={decoderringmay}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Eric Lovell Actor Portfolio
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary">
                  View Code
                </Button>
                <Button size="small" color="primary">
                  Explore App
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
