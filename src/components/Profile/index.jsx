import { Helmet } from "react-helmet";

const Profile = () => {
  return (
    <>
      <Helmet>
        <title>Twoitter Profile</title>
        <meta
          name="description"
          content="Cuztomize your profile and settings for your Twoitter account."
        />
        <meta property="og:title" content="Twoitter Profile." />
        <meta
          property="og:image"
          content="https://img.icons8.com/small/452/twitter.png"
        />
        <meta property="og:url" content="http://localhost:3000/login" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Cuztomize your profile and settings for your Twoitter account."
        />
      </Helmet>
      <div class="profile">
        <h2>Profile User</h2>
        <p class="title">Mister User</p>
        <p>@user123</p>
        <p>
          <button>Follow</button>
        </p>
      </div>
    </>
  );
};

export default Profile;
