import Link from "next/link";
import Logo from "./logo";
import { Component } from "react";
import Layout from "../components/Layout";

class Explore extends Component {
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
      <Layout>
        <div className="section">
          <div className="container">
            <div className="title">Explore</div>
            <div className="subtitle">GivTo</div>
            <form id="loginCharity-form">
              <div className="field">
                <p className="control">
                  <a className="hero is-large button is-info">
                    GivTo makes giving easy
                  </a>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <a className="hero is-large button is-info">
                    Video - How does it work?
                  </a>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <a className="hero is-large button is-info">
                    Video - Who are we?
                  </a>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <a className="hero is-large button is-info">
                    Video - What are the benefits?
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}

 
export default Explore;
