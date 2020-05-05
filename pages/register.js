import Link from "next/link";
import Logo from "./logo";
import { Component } from "react";
import Layout from "../components/Layout";
import Head from "next/head";

class Register extends Component {
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
        <Head>
          <title>GivTo</title>
          <script src="./bulmasteps.js" />
        </Head>
        <div className="steps">
          <div className="step-item">
            <div className="step-marker">1</div>
            <div className="step-details">
              <p className="step-title is-size-6">About me</p>
            </div>
          </div>
          <div className="step-item">
            <div className="step-marker">2</div>
            <div className="step-details">
              <p className="step-title is-size-6">Direct debit</p>
            </div>
          </div>
          <div className="step-item">
            <div className="step-marker">3</div>
            <div className="step-details">
              <p className="step-title is-size-6">Gift Aid</p>
            </div>
          </div>
          <div className="step-item">
            <div className="step-marker">
              <span className="icon">
                <i className="fa fa-flag"></i>
              </span>
            </div>
            <div className="step-details">
              <p className="step-title is-size-6">Finish</p>
            </div>
          </div>
          <div className="steps-content">
            <div className="step-content">
              <div className="section">
                <div className="title">Register</div>
                <div className="subtitle">Step 1 - About me</div>

                <form className="register-form">
                  <div className="field">
                    <label className="label" htmlFor="username">
                      Username
                    </label>
                    <div className="control ">
                      <input
                        className="input"
                        type="text"
                        placeholder="Username"
                        name="username"
                      />
                    </div>
                    <label className="label" htmlFor="email">
                      Email
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="email"
                        placeholder="Email"
                        name="email"
                      />
                    </div>
                    <div className="columns row-one">
                      <div className="column">
                        <label className="label" htmlFor="firstName">
                          First Name
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                          />
                        </div>
                      </div>
                      <div className="column">
                        <label className="label" htmlFor="lastName">
                          Last Name
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                          />
                        </div>
                      </div>
                      <div className="column">
                        <label className="label" htmlFor="lastName">
                          Postcode
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="Postcode"
                            name="postcode"
                          />
                        </div>
                      </div>
                      <div className="column">
                        <label className="label" htmlFor="lastName">
                          Street
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="Street"
                            name="street"
                          />
                        </div>
                      </div>
                      <div className="column">
                        <label className="label" htmlFor="lastName">
                          City
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="City"
                            name="city"
                          />
                        </div>
                      </div>
                      <div className="column">
                        <label className="label" htmlFor="lastName">
                          County
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="County"
                            name="county"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="columns">
                      <div className="column">
                        <label className="label" htmlFor="password">
                          Password
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type="password"
                            placeholder="Password"
                            name="password"
                          />
                        </div>
                      </div>
                      <div className="column">
                        <label className="label" htmlFor="retypePassword">
                          Re-Type Password
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type="password"
                            placeholder="Confirm Password"
                            name="retypePassword"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="step-content">
              <div className="section">
                <div className="title">Register</div>
                <div className="subtitle">Step 2 - My direct debit</div>

                <form className="register-form">
                  <div className="field">
                    <div className="control">
                      <br />
                      <div className="is-size-4">
                        How much would you like to give each month?
                      </div>
                      <br />
                      <div className="is-size-6xx">
                        Click on the amount and you will visit Go Cardless (our
                        secure direct debit processor) to complete your direct
                        debit details
                      </div>
                      <br />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <a className="hero is-large button">
                        <label className="radio">
                          <input type="radio" name="amount" />
                          &nbsp;&nbsp;£5
                        </label>
                      </a>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <a className="hero is-large button">
                        <label className="radio">
                          <input type="radio" name="amount" /> £10
                        </label>
                      </a>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <a className="hero is-large button">
                        <label className="radio">
                          <input type="radio" name="amount" /> £20
                        </label>
                      </a>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <a className="hero is-large button">
                        <label className="radio">
                          <input type="radio" name="amount" /> £30
                        </label>
                      </a>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <a className="hero is-large button">
                        <label className="radio">
                          <input type="radio" name="amount" /> £40
                        </label>
                      </a>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <a className="hero is-large button">
                        <label className="radio">
                          <input type="radio" name="amount" /> £50
                        </label>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="step-content">
              <div className="section">
                <div className="title">Register</div>
                <div className="subtitle">Step 3 - My Gift Aid</div>

                <form className="register-form">
                  <p></p>
                  <br />

                  <div className="field">
                    <div className="control">
                      <div
                        className="reg_option
                              hero is-large 
                              is-size-4
                              has-text-centered 
                              is-infox"
                      >
                        <div className="reg_option   has-text-centered ">
                          <label className="radio">
                            <input type="radio" name="tax" /> I am a UK taxpayer
                            and I would like GivTo to reclaim tax on my
                            donations
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <div
                        className="reg_option 
                              is-size-4
                              has-text-centered 
                              hero is-large  
                                is-infox"
                      >
                        <label className="radio">
                          <input type="radio" name="tax" /> I am not a UK
                          taxpayer
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="step-content">
              <div className="section">
                <div className="title">Register</div>
                <div className="subtitle">
                  Completed  {" "}
                </div>

                <form className="register-form">
                  <div className="field">
                    <span className="control reg_option2">
                      <div className="is-size-1">
                        <p className="has-text-white">Thank you</p>
                      </div>
                      <p className="has-margin-20">
                        Your registration is complete. We will send you
                        information about three charities to choose from when
                        your first direct debit has been collected.
                      </p>
                      <div className="control">
                        <p>
                       
                          <span className="has-text-white">
                            Contact us at :{" "}
                          </span>
                          <a href="mailto:enquiries@bettergivingpartnership.org">
                            enquiries@bettergivingpartnership.org
                          </a>
                        </p>
                      </div>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="steps-actions">
            <div className="steps-action">
              <a
                href="#"
                data-nav="previous"
                className="button is-info button-steps-actions is-pulled-left"
              >
                {" "}
                Previous
              </a>
            </div>
            <div className="steps-action">
              <a
                href="#"
                data-nav="next"
                className="button is-info button-steps-actions is-pulled-right "
              >
                Next{" "}
              </a>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

 
export default Register;
