import { SnackBarContextProvider } from "../contexts/SnackbarContext";

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <SnackBarContextProvider>
      <Component {...pageProps} />
    </SnackBarContextProvider>
  );
}

export default MyApp;
