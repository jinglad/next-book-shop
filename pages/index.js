import Head from "next/head";
import Books from "../components/Books/Books";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import siteImage from "../images/icons/Logo.png";



export default function Home({books}) {
  return (
    <div>
      <Head>
        <title>Next Book Shop</title>
        <meta name="description" content="This is a programming book Shop Website" />
        <meta property="og:title" content="Book Shop" />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta property="og:description" content="This is a book shop website, where user can find many books related to programming. User can buy books from this website. User can only select one quantity from one item. User can buy multiple books at a time."/>
        <meta property="og:image" content={siteImage} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SearchBar />
      <Books books={books}/>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://aeolian-bottlenose-earthquake.glitch.me/books"
  );
  const data = await res.json();
  return {
    props: {
      books: data,
    },
  };
};
