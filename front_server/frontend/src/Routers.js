import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import SignIn from "./pages/Intro-SignIn";
import SignUp from "./pages/Intro-SignUp";
import ChooseSubject from "./pages/instructor/ChooseSubject";

function Routers({ location }) {
    return (
        <TransitionGroup className="transition-group">
            <CSSTransition
                key={location.key}
                timeout={{ enter: 300, exit: 300 }}
                classNames="fade"
            >
                <section className="route-section">
                    <Switch location={location}>
                        <Route
                            exact
                            path={process.env.PUBLIC_URL + "/"}
                            component={SignIn}
                        />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/instructor/chooseSubject" component={ChooseSubject} />
                    </Switch>
                </section>
            </CSSTransition>
        </TransitionGroup>
    );
}
export default withRouter(Routers);