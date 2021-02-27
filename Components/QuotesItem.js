import Link from 'next/link';
import styles from "../styles/Quotes.module.css";

const QuotesItem = ({ quote }) => {
  return (
    <Link href={`/quotes/${quote.id}`}>
      <div className={styles.singleQuote}>
        <h4>{quote.quote.substring(0,30)+"....."}</h4>
        <h5>{(quote.author.split(",",1))[0]}</h5>
      </div>
    </Link>
  );
};

export default QuotesItem;
