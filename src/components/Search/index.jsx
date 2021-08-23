import { Helmet } from "react-helmet";

const Search = () => {
  return (
    <>
      <Helmet>
        <title>Twoitter Search</title>
        <meta
          name="description"
          content="Search in twoitter to find out about the latest news and events worldwide."
        />
        <meta
          property="og:title"
          content="Twoitter Search: look up what is people talking about."
        />
        <meta
          property="og:image"
          content="https://img.icons8.com/small/452/twitter.png"
        />
        <meta property="og:url" content="http://localhost:3000/search" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Search in twoitter to find out about the latest news and events worldwide."
        />
      </Helmet>
      <h2>Search</h2>
      <form class="example" action="action_page.php">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Search;
