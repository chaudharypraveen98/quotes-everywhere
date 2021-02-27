import { useRouter } from "next/router";
import content from "../../../quotes.content.json";
import Link from 'next/link';

const quote = ({ filteredQuote }) => {
  // const router = useRouter();
  // const { id } = router.query;
  // console.log("id", id);
  return (
    <div>
      <h1>Quote no {filteredQuote.id+1}</h1>
      <h2>{filteredQuote.quote}</h2>
      <h3>Author  - {filteredQuote.author}</h3>
      <Link href="/">Go Back</Link>
    </div>
  );
};

export const getStaticProps = async (context) => {
  var filteredQuote;
  const quoteId = context.params.id;
  content.forEach(quote => {
    if(quote['id']==quoteId){
      filteredQuote=quote
    }
  })
  console.log('filteredQuote', filteredQuote);
  return {
    props: {
      filteredQuote,
    },
  };
};

export const getStaticPaths = async () => {
  const quotesID = content.map((quote) => quote["id"]);
  const quotesPaths = quotesID.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths:quotesPaths,
    fallback: false,
  };
};

export default quote;
