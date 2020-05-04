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

                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="username"
                    placeholder="Username"
                  />
                  <span className="icon is-small is-left iusername">
                    <svg
                      className="svg-inline--fa fa-user fa-w-16"
                      aria-hidden="true"
                      data-prefix="fas"
                      data-icon="user"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M256 0c88.366 0 160 71.634 160 160s-71.634 160-160 160S96 248.366 96 160 167.634 0 256 0zm183.283 333.821l-71.313-17.828c-74.923 53.89-165.738 41.864-223.94 0l-71.313 17.828C29.981 344.505 0 382.903 0 426.955V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-37.045c0-44.052-29.981-82.45-72.717-93.134z"
                      ></path>
                    </svg>
                    <i classxx="fas fa-user"></i>
                  </span>
                </p>
              </div>

              <div className="field">
                <label className="label" htmlFor="password">
                  Password
                </label>

                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                  />
                  <span className="icon is-small is-left ipassword">
                    <svg
                      className="svg-inline--fa fa-lock fa-w-14"
                      aria-hidden="true"
                      data-prefix="fas"
                      data-icon="lock"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
                      ></path>
                    </svg>
                    <i classxxx="fas fa-lock"></i>
                  </span>
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
