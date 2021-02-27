import Head from "next/head";
import styles from "../styles/Home.module.css";

import content from "../quotes.content.json";
import QuotesList from "./../Components/QuotesList";
import { server } from './../config/index';

export default function Home({ quotes }) {
  return (
    <>
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
            color: #43dde6;
          }
        `}</style>
        <QuotesList quotes={quotes} />
      </div>
    </>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/quotes`)
  const quotes = await res.json();
  return {
    props: {
      quotes,
    },
  };
};
// export const getStaticProps = async () => {
//   const quotes = content;
//   return {
//     props: {
//       quotes,
//     },
//   };
// };
