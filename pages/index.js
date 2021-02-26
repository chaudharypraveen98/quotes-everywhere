import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar";
import content from "../quotes.content.json";
import QuotesList from './../Components/QuotesList';

export default function Home({quotes}) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>QuotesEverywhere</title>
          <meta name="keywords" content="quotes, daily quotes, motivation" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="main-title">QuotesEverywhere</h1>
        {/* using styled Components */}
        <style jsx>{`
          .main-title {
            color: red;
          }
        `}</style>
        <QuotesList quotes={quotes}/>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const quotes = content.quotes;
  return {
    props: {
      quotes
    },
  };
};
