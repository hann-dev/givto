import Link from "next/link";
import Logo from "./logo";
import { Component } from "react";
import Layout from "../components/Layout";

class Login extends Component {
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
            <div className="title">Login</div>
            <div className="subtitle">to your GivTo account</div>
            <form id="login-form">
              <div className="field">
                <label className="label" htmlFor="username">
                  Username
                </label>

                <p className="control">
                  <input
                    className="input"
                    type="username"
                    placeholder="Username"
                  />
                  
                </p>
              </div>

              <div className="field">
                <label className="label" htmlFor="password">
                  Password
                </label>

                <p className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                  />
                
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <Link href="/myaccount">
                    <a className="button is-info">Login</a>
                  </Link>
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
export default Login;
