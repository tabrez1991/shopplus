import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/css/styles.css";
import "./assets/css/footer-style.css";
import "./assets/css/owl.carousel.min.css";

// compponents
import CartButton from "./components/CartButton";
import Navbar from "./components/Navbar";
import Home from "./container/Home";
import Brand from "./container/Brand";
//Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  const Redirectx = ({ history }) => {
    history.push("/home");
    return <Home />;
  };
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <CartButton />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Redirectx} />
            <Route path="/home" component={Home} />
            <Route path="/brand" component={Brand} />
          </Switch>
        </Fragment>
      </Router>
    </Provider >
  );
};

export default App;
