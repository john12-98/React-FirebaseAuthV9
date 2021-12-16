import React from "react";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import { Container } from "react-bootstrap";
import ForgotPassword from "./ForgotPassword";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UpdateProfile from "./UpdateProfile";
function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute path="/" exact component={Dashboard} />
                <PrivateRoute
                  path="/update-profile"
                  exact
                  component={UpdateProfile}
                />
                <Route path="/signup" exact component={Signup} />
                <Route path="/login" exact component={Login} />
                <Route
                  path="/forgot-password"
                  exact
                  component={ForgotPassword}
                />
              </Switch>
            </AuthProvider>
          </Router>
          {/* <Signup /> */}
          {
            //ill remove the signup component
          }
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
