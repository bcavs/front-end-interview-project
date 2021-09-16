import "../styles/variables.css"

import { GlobalStyles } from "../components";
import React from "react";

const App = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      {/* Font styles and basic CSS Reset */}
      <GlobalStyles />
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default App;
