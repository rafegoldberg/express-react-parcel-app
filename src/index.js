import React, { useState, useEffect, Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const TestZed = React.lazy(() => import("./views/zed"));
const TestOne = React.lazy(() => import("./views/one"));
const TestTwo = React.lazy(() => import("./views/two"));

const App = () => {
  const [state, setState] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:8080/api")
      .then((rsp) => rsp.json())
      .then((rsp) => setState(rsp))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <hr />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/test0">Zed</Link>
              </li>
              <li>
                <Link to="/test1">One</Link>
              </li>
              <li>
                <Link to="/test2">Two</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/test0">
              <Suspense fallback={"Loading..."}>
                <TestZed />
              </Suspense>
            </Route>
            <Route path="/test1">
              <Suspense fallback={"Loading..."}>
                <TestOne />
              </Suspense>
            </Route>
            <Route path="/test2">
              <Suspense fallback={"Loading..."}>
                <TestTwo />
              </Suspense>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("app"));
