import styles from "../styles/Quotes.module.css";

const QuotesItem = ({quote}) => {
    return(
        <div className={styles.singleQuote}>
            <h4>{quote}</h4>
        </div>
    )
}

export default QuotesItem