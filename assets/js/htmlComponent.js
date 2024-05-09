var Components = {
  loginModal: `
  <div class="login">
    <div class="container">
      <div class="container sign-component" id="container">
        <div class="form-container sign-up-container">
          <form id="sign_up_form">
            <h1>Create Account</h1>
            <div class="social-container">
              <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <div class="inputs">
              <div class="form-control full">
                <input
                  type="text"
                  id="fullname"
                  name="name"
                  required=""
                  class="field"
                  autocomplete="name"
                />
                <label for="fullname"> Full Name </label>
              </div>
              <div class="form-control full">
                <input
                  type="email"
                  id="sign_up_email"
                  name="email"
                  required=""
                  class="field"
                  autocomplete="email"
                />
                <label for="sign_up_email"> Email </label>
              </div>
              <div class="form-control full">
                <input
                  type="password"
                  id="sign_up_password"
                  name="password"
                  required=""
                  class="field"
                />
                <label for="sign_up_password"> Password </label>
              </div>
            </div>
            <input type="submit" value="Sign Up" id="sign_up" />
            <div class="app-register have-account">
              Do have an account?
              <span class="end sign-component">Sign In</span>
            </div>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form id="sign_in_form">
            <h1>Sign in</h1>
            <div class="social-container">
              <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <div class="inputs">
              <div class="form-control full">
                <input
                  type="email"
                  id="sign_email"
                  name="email"
                  required=""
                  class="field"
                  autocomplete="eEmail"
                />
                <label for="sign_email"> Email </label>
              </div>
              <div class="form-control full">
                <input
                  type="password"
                  id="signin_password"
                  name="password"
                  required=""
                  class="field"
                />
                <label for="signin_password"> Password </label>
              </div>
            </div>
            <a href="#">Forgot your password?</a>
            <input type="submit" value="Sign In" name="sign_in" id="sign_in" />
            <div class="app-register have-account">
              Don't have an account?
              <span class="end sign-component">Sign Up</span>
            </div>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button class="ghost sign-component" id="signIn">Sign In</button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button class="ghost sign-component" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
};
