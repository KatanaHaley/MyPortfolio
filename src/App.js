//import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import woman from "./woman.svg";
import notes from "./notes.svg";

//import { Counter } from "./features/counter/Counter";
import "./App.css";
// import ReactDOM from "react-dom";
// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import Projects from "./Components/Projects";
import ContactButton from "./Components/ContactButton";
import About from "./Components/About";
import Nav from "./Components/Nav";
import ContactForm from "./Components/ContactForm";
//import Products from "./Components/Products";
// import { loadStripe } from "@stripe/stripe-js";
// import { API_KEY } from "react-native-dotenv";
// import StripeCheckout from "react-stripe-checkout";
// import Stripe from "stripe";

function App() {
  // const stripe = Stripe('pk_test_51IoCj3KngNA5hdnVbCIm6rkP9Jlq4WZKqBopNdhi39UxjanE3PQqQ4jeV8aCl8g9j9NZNXYuFhZAWDylmfjyLTwZ006BaL84aI');
  const mail = 'mailto:katanahaley444@gmail.com';
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header" id="section1">
          <Nav />
          <h2>Hi,</h2>
          <h2>I'm Katana,</h2>
          <h2>full stack software engineer.</h2>
          <p>Front and backend development</p>
          <ContactButton 
          onClick={mail}
          />
          <br></br>
          <img src={woman} className="App-logo" alt="logo" />
          <div style={{ width: 800 }}>  


          <p>
            I specialize in creating websites, applications, custom software, and technology
            products that meet your goals and move your business forward. View
            my work below.
          </p>
          </div>
          
          <About />
          <Projects />
          {/* <h2 id="products">Software as a Service (SaaS) Products</h2> */}
          {/* <Route component={Products} id="/Products" /> */}
          {/* <Packages /> */}
          {/* <div className="container">
            <h1>{product.name}</h1>
            <h3>On Sale - ${product.price}</h3>
          </div>
            <button>{checkoutButton}</button> */}
            {/* The below StripeCheckout works */}
          {/* <StripeCheckout /> */}
          {/* <Stripe /> */}
          <script src="https://js.stripe.com/v3/"></script>
          <div>
            <h2>Got a great idea? Let's build it!🎉</h2>
          <img src={notes} className="App-logo" alt="logo" />
          <div style={{ width: 800 }}>  

            <ContactForm />
            </div>
            {/* <Counter /> */}
          </div>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;

