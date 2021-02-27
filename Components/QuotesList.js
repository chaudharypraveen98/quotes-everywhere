import styles from "../styles/Quotes.module.css";
import QuotesItem from './QuotesItem';

const QuotesList = ({ quotes }) => {
  return (
    <div className={styles.quotesContainer}>
      {quotes.map((quote) => (
        <QuotesItem quote={quote} key={quote.id}/>
      ))}
    </div>
  );
};

export default QuotesList
