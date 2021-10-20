import Head from "next/head";
import Books from "../components/Books/Books";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";



export default function Home({books}) {
  return (
    <div>
      <Head>
        <title>Next Book Shop</title>
        <meta name="description" content="Generated by create next app" />
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
