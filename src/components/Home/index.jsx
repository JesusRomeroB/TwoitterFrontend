import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Twoitter Home</title>
        <meta
          name="description"
          content="This is what is happening today in your feed. Find out the latest news, gossip and conversations people around the world are experiencing right now."
        />
        <meta
          property="og:title"
          content="Twoitter Home: Find out about what's happening today."
        />
        <meta
          property="og:image"
          content="https://img.icons8.com/small/452/twitter.png"
        />
        <meta property="og:url" content="http://localhost:3000/home" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="This is what is happening today in your feed. Find out the latest news, gossip and conversations people around the world are experiencing right now."
        />
      </Helmet>
      <h2>Home</h2>
      <p>hola mundo </p>
    </>
  );
};

export default Home;
