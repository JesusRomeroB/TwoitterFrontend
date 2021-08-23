import { Helmet } from "react-helmet";

const SignUp = () => {
  return (
    <>
      <Helmet>
        <title>Twoitter SignUp</title>
        <meta
          name="description"
          content="Sign Up in Twoitter and be part of the most relevant social network in the world."
        />
        <meta
          property="og:title"
          content="Twoitter SignUp: join the world of Twoitter."
        />
        <meta
          property="og:image"
          content="https://img.icons8.com/small/452/twitter.png"
        />
        <meta property="og:url" content="http://localhost:3000/signup" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Sign Up in Twoitter and be part of the most relevant social network in the world."
        />
      </Helmet>
    <div>
        <h2>Sign Up</h2>
        <p>Please fill in this form to create an account.</p>
        <hr/>

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required/>

        <label for="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" required/>

        <label for="repeat-password"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="repeat-password" required/>

        <label>
        <input type="checkbox" checked="checked" name="remember"/> Remember me
        </label>

        <div class="clearfix">
        <button type="button" class="cancelbtn">Cancel</button>
        <button type="submit" class="signupbtn">Sign Up</button>
        </div>
    </div>
    </>
  );
};

export default SignUp;
