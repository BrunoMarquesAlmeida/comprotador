import { HashRouter, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

function App() {
  return (
    <div>
      <HashRouter>
        <div>
          <Header />
          <Route path="/" component={Home} />
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
