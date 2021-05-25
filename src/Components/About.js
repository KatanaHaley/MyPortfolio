import React from "react";
//import logo from "./logo.svg";
//import { Counter } from "../features/counter/Counter";
//import "./App.css";
// import ReactDOM from "react-dom";
// import { makeStyles } from "@material-ui/core/styles";
//import Button from "@material-ui/core/Button";
//import ContactButton from "./ContactButton";
//import ContactForm from './Components/ContactForm';
import { Grid } from "@material-ui/core/";
import "./About.css";
//import Projects from "./Projects";

function About() {
  return (
    <div className="purple" id="about">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Grid
      // container
      // spacing={1}
      // direction="row"
      // justify="flex-start"
      // alignItems="flex-start"
      >
          <h2>About Me</h2>
        <Grid container justify="center" spacing="0" id="section1">
          <p>
            I have a passion for developing both the back and front end of a
            project.</p>
          
        <p>
            As a software engineer and developer, I've created a vast number of 
            bespoke websites and applications. Contact me for my resume.
          
            I love building projects from the ground up! I've developed websites since
            2008, continuously developing my skills.
         </p>
         <p>
            I'm thrilled about expanding my knowledge by learning new
            programming languages and technologies.
          
            I enjoy collaborating on a team, developing projects with everyone's
            best and brightest thoughts and skills.
         
            My services include; full-stack web development, application
            prototypes & builds, copywriting deliverables such as white papers,
            articles, and email campaigns.
          </p>
          
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
