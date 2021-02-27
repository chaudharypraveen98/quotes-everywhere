import { useRouter } from "next/router";
import content from "../../../quotes.content.json";
import Link from "next/link";
import Image from "next/image";
import styles from '../../../styles/Quotes.module.css'
import { server } from './../../../config/index';
import { quotes } from './../../../quotes';

const quote = ({ filteredQuote }) => {
  // const router = useRouter();
  // const { id } = router.query;
  // console.log("id", id);
  console.log('filteredQuote', filteredQuote);
  return (
    <div className={styles.singleQuoteContainer}>
      <Image src="/1.jpg" width={500} height={500} />
      <h1>Quote no {filteredQuote.id + 1}</h1>
      <h2 className={styles.quote1}>{filteredQuote.quote}</h2>
      <h3 className={styles.author}>Author - {filteredQuote.author}</h3>
      <Link href="/" className={styles.button}>Go Back</Link>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const quoteId = context.params.id;
  const res = await fetch(`${server}/api/quotes/${quoteId}`);
  const filteredQuote = await res.json();
  return {
    props: {
      filteredQuote,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/quotes`);
  const quotes = await res.json();
  const quotesID = quotes.map((quote) => quote.id);
  const quotesPaths = quotesID.map((id) => ({ params: { id: id.toString() } }));
  console.log('quotesPaths', quotesPaths);
  return {
    paths: quotesPaths,
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   var filteredQuote;
//   const quoteId = context.params.id;
//   content.forEach((quote) => {
//     if (quote["id"] == quoteId) {
//       filteredQuote = quote;
//     }
//   });
//   return {
//     props: {
//       filteredQuote,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const quotesID = content.map((quote) => quote["id"]);
//   const quotesPaths = quotesID.map((id) => ({ params: { id: id.toString() } }));
//   return {
//     paths: quotesPaths,
//     fallback: false,
//   };
// };

export default quote;
