import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import React from "react"
import Page1 from './pages/article';
import Page2 from './pages/article_2';
import Page3 from './pages/article_3';

export default function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <Link to="/page1">Go to Page1</Link>
            <br />
            <Link to="/page2">Go to Page2</Link>
            <br />
            <Link to="/page3">Go to Page3</Link>
            <br />
            =====================================================================================================================

            <Switch>
                <Route path="/page1">
                    <Page1 />
                </Route>
                <Route path="/page2">
                    <Page2 />
                </Route>
                <Route path="/page3">
                    <Page3 />
                </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
}
