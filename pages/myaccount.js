import Link from "next/link";
import Logo from "./logo";
import { Component } from "react";
import Layout from "../components/Layout";

class MyAccount extends Component {
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
            <div className="title">GivTo</div>
            <div className="subtitle">my account</div>
            <form id="loginCharity-form">
              <div className="field">
                <p className="control">
                  <a className="hero is-large button is-info">About me</a>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <a className="hero is-large button is-info">
                    My direct debit
                  </a>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <a className="hero is-large button is-info">My Gift Aid</a>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <a className="hero is-large button is-info">Contact us</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}

export async function getServerSideProps() {
  const data = null;

  return { props: { data } };
}
export default MyAccount;
