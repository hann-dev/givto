import Link from "next/link";
import Logo from "./Logo";
import { Component } from "react";

class Navbar extends Component {
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
      <nav
        className="navbar has-background-primary has-shadow is-spaced"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link href="/index">
            <a className="navbar-item" href="index.html">
              <img src="logo.png" width="50" height="200px" />
            </a>
          </Link>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarGivto"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarGivto" className="navbar-menu is-primary">
          <div className="navbar-start">
            <Link href="/index">
              <a className="navbar-item">Home</a>
            </Link>
            <Link href="/register">
              <a className="navbar-item">Register</a>
            </Link>
            <Link href="/login">
              <a className="navbar-item">Login</a>
            </Link>

            <Link href="/explore">
              <a className="navbar-item">Explore</a>
            </Link>

            <Link href="charitylogin">
              <a className="navbar-item">Charity login</a>
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link href="/login">
                  <a className="button is-info">Login</a>
                </Link>
                <Link href="/register">
                  <a className="button is-info">Register</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=Oswald&display=swap");
          #navbarGivto {
            background-color: hsl(171, 100%, 41%) !important;
          }
        `}</style>
      </nav>
    );
  }
}

export default Navbar;
