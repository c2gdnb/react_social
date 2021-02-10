import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="content">
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
          {/* <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
