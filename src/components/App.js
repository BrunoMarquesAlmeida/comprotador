import { HashRouter, Route } from "react-router-dom";

import Header from "./Header";
import LoginModal from "./LoginModal";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <HashRouter>
        <div>
          <Header />
          <Route path="/login" component={LoginModal} />
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
