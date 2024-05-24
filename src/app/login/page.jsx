import React from "react";

const Login = () => {
  return (
    <main className="login">
      <section className="register">
        <div className="container">
          <div className="regest-content">
            <h1>Register</h1>

            <form id="form">
              <input
                type="text"
                name="Firstname"
                id="Firstname"
                placeholder="Firstname"
              />

              <input
                type="text"
                name="Lastname"
                id="Lastname"
                placeholder="Lastname"
              />

              <input
                type="text"
                name="Username"
                id="Username"
                placeholder="Username"
              />

              <input
                type="password"
                name="Password"
                id="Password"
                placeholder="Password"
              />

              <input
                type="password"
                name="Confirm_password"
                id="confirmPasswordError"
                placeholder="Confirm password"
              />
              <button type="button" id="regForm">
                Register
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
