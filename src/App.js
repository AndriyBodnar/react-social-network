import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import { initializeApp } from "./redux/appReducer";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";

import UsersContainer from "./components/Users/UsersContainer";

import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/common/preloader/preloader";
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) return <Preloader />;
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />

        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => {
              return (
                <React.Suspense fallback={<h1>Loading profile...</h1>}>
                  <DialogsContainer />
                </React.Suspense>
              );
            }}
          />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />

          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter(connect(mapStateToProps, { initializeApp })(App))
);
