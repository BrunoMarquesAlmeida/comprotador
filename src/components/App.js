import { HashRouter, Route } from "react-router-dom";

import Header from "./Header";
import LoginModal from "./LoginModal";

function App() {
  return (
    <div>
      <HashRouter>
        <div>
          <Header />
          <Route path="/login" component={LoginModal} />
        </div>
      </HashRouter>
      Content
    </div>
  );
}

export default App;
