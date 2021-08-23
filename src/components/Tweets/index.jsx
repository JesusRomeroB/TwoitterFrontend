import { Helmet } from "react-helmet";

const Tweets = () => {
  return (
    <>
      <Helmet>
        <title>Twoitter Tweets</title>
        <meta
          name="description"
          content="Look up this person's twoeets and what is he talking about, be part of the conversation!."
        />
        <meta
          property="og:title"
          content="Twoitter Tweets: check out what this person has to share."
        />
        <meta
          property="og:image"
          content="https://img.icons8.com/small/452/twitter.png"
        />
        <meta property="og:url" content="http://localhost:3000/trending" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Look up this person's twoeets and what is he talking about, be part of the conversation!."
        />
      </Helmet>
      <h2>Tweets</h2>
      <p>Tweets </p>
    </>
  );
};

export default Tweets;
