import { Helmet } from "react-helmet";

const Trending = () => {
  return (
    <>
      <Helmet>
        <title>Twoitter Trending</title>
        <meta
          name="description"
          content="Find out about what's being twoitted right now in your country and worldwide."
        />
        <meta
          property="og:title"
          content="Twoitter Trending: latest talked news."
        />
        <meta
          property="og:image"
          content="https://img.icons8.com/small/452/twitter.png"
        />
        <meta property="og:url" content="http://localhost:3000/trending" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Find out about what's being twoitted right now in your country and worldwide."
        />
      </Helmet>
      <h2>Trending</h2>
      <p>Trending topics: </p>
      <ul>
          <li>#messi</li>
          <li>#calentamientoGlobal</li>
          <li>#JuniorPierdeOtraVez</li>
          <li>#Spotify</li>
      </ul>
    </>
  );
};

export default Trending;
