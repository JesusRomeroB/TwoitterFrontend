import { Helmet } from "react-helmet";

const LogIn = () => {
  return (
    <>
      <Helmet>
        <title>Twoitter Log In</title>
        <meta
          name="description"
          content="Log in the world of Twoitter now so you can check the latest news your friends and the world are talking about."
        />
        <meta property="og:title" content="Twoitter Log In." />
        <meta
          property="og:image"
          content="https://img.icons8.com/small/452/twitter.png"
        />
        <meta property="og:url" content="http://localhost:3000/login" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Log in the world of Twoitter now so you can check the latest news your friends and the world are talking about."
        />
      </Helmet>
      <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required/>

            <label for="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required/>

            <button type="submit">Login</button>
            <label>
            <input type="checkbox" checked="checked" name="remember"/> Remember me
            </label>
        </div>

        <div class="container" >
            <button type="button" class="cancelbtn">Cancel</button>
        </div>
    </>
  );
};

export default LogIn;
