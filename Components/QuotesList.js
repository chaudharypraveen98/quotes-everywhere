import styles from "../styles/Quotes.module.css";
import QuotesItem from './QuotesItem';

const QuotesList = ({ quotes }) => {
  return (
    <div className={styles.quotesContainer}>
      {quotes.map((quote) => (
        <QuotesItem quote={quote}/>
      ))}
    </div>
  );
};

export default QuotesList
