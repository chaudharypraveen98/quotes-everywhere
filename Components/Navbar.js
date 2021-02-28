import Link from "next/link";
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <ul className={styles.navUl}>
        <li className={styles.navBrand}>
          <Link href='/'>QuotesEverywhere</Link>
        </li>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}


export default Navbar