import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Footer from "@/components/Footer";
axios.defaults.baseURL='http://localhost:4000';
axios.defaults.withCredentials=true;
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>

  )
}
