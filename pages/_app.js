import "../styles/globals.css";
import Layout from "./../Components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    // Using layout
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
