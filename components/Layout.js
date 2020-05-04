import Head from "next/head";
import Navbar from "./Navbar";
import { Component } from "react";

class Layout extends Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }

  render() {
    return (
      <div>
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
         <link rel="icon" 
      type="image/png" 
      href="/logo.png"></link>
          <link
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.css"
          />
          <script src="https://use.fontawesome.com/releases/v5.0.10/js/all.js"></script>
          <link rel="stylesheet" href="./givto.css" />
          <title>GivTo</title>
        </Head>

        <Navbar></Navbar>
        <div
          id="givtoHero"
          className="hero is-fullheightxx has-background-primary is-bold"
        >
          <div className="hero-body">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Layout;
