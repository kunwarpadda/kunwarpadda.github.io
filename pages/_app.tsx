import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { useEffect } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Scroll to top on page load/reload
    window.scrollTo(0, 0);
    
    // Also handle hash changes to ensure we start from top
    const handleHashChange = () => {
      if (window.location.hash === "" || window.location.hash === "#") {
        window.scrollTo(0, 0);
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div id="root" className={poppins.className}>
      <Component {...pageProps} />
    </div>
  );
}
