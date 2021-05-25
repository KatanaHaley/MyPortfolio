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
                    I developed a Netflix clone that allows users to review films 
                    in the Netflix database including; Netflix originals, 
                    trending, and top-rated films. The app was built using Node, 
                    React JS, Redux, styled with CSS, and deployed with Firebase.
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary"   
                href="https://github.com/KatanaHaley/Netflix-Build"
                target="_blank">
                  View Code
                </Button>
                <Button size="small" color="primary"
                  href="https://netflix-clone-c660b.web.app/"
                  target="_blank">
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
                   Orvonton: Astronomy App with NASA API
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                   This app details our superuniverse Orvonton. It was built with React JS, CSS,
                   and Windows PowerShell. It utilizes NASA's API providing daily automatic updates
                   about the galaxy.
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button 
                size="small" 
                color="primary"
                href="https://github.com/KatanaHaley/Orvonton"
                target="_blank">
                  View Code
                </Button>
                <Button 
                size="small" 
                color="primary"
                href="https://astronomy-app-e6dee.web.app/"
                target="_blank">
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
                   Created a social media application utilizing React JS and Node. 
                   It contains CSS, HTML, and Javascript languages. It utilizes Create, Read, 
                   Update, and Delete functionality and is connected to Firebase’s Cloud 
                   Firestore database in real-time. Users can follow and unfollow other users.
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary" 
                href="https://github.com/KatanaHaley/VideoChew"
                target="_blank">
                  View Code
                </Button>
                <Button size="small" color="primary"
                 href="https://videochew-b30cf.web.app/"
                 target="_blank">
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
                   The Decoder Ring Project consists of three operating decoder ciphers; 
                   Caesar, Polybius, and Substitution. The three ciphers use unique algorithms 
                   to encode and decode messages. The project was developed with JavaScript, 
                   HTML, and CSS. The message encoder allows you to write and decipher coded 
                   messages or enhance an escape room challenge. 
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary"
                href="https://github.com/KatanaHaley/DecoderOfTheRings"
                target="_blank"
                >
                  View Code
                </Button>
                <Button size="small" color="primary"
                 href="https://katanahaley.github.io/DecoderOfTheRings/"
                 target="_blank">
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
                    For this project, I developed a production-level application with the CoinGecko API and 
                    search functionality. This price-tracking app updates in real-time. 
                    It was deployed with Netlify and subsequently attached to a custom domain.
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary"
                href="https://github.com/KatanaHaley/CryptoPrice"
                target="_blank"
                >
                  View Code
                </Button>
                <Button size="small" color="primary"
                href="https://trackcrypto.netlify.app/"
                target="_blank"
                >
                  Explore App
                </Button>
              </CardActions>
            </Card>
          </Grid>

            {/* PROJECT SIX */}
          {/*<Grid>
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
                <Button size="small" color="primary"  
                href="#"
                target="_blank">
                  View Code
                </Button>
                <Button size="small" color="primary"
                 href="#"
                 target="_blank"
                >
                  Explore App
                </Button>
              </CardActions>
            </Card>
          </Grid> */}

            {/* PROJECT SEVEN */}
          {/* <Grid>
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
                <Button size="small" color="primary"
                  href="https://github.com/KatanaHaley/CRUD-National-Parks/tree/main/starter-national-parks"
                  target="_blank"
                >
                  View Code
                </Button>
                <Button size="small" color="primary"
                 href="#"
                 target="_blank"
                 >
                  Explore App
                </Button>
              </CardActions>
            </Card>
          </Grid> */}

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
            The Necromancer game is a clickerstyle battle game built with the HTML5 Phaser game framework, Canvas, and WebGL.
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary"
                href="https://github.com/KatanaHaley/Necromancer"
                target="_blank"
                >
                  View Code
                </Button>
                <Button size="small" color="primary"
                href="https://necromancer.netlify.app/"
                target="_blank"
                >
                  Explore App
                </Button>
              </CardActions>
            </Card>
          </Grid>

           
            {/* PROJECT NINE */}
            {/*<Grid>
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
          </Grid> */}

            {/* PROJECT TEN */}
          {/* <Grid>
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
          </Grid> */}
        </Grid>
      </Grid>
    </div>
  );
}
