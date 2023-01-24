import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import CatViewer from "./CatViewer";
import WorkingHours from "./WorkingHours";

function App() {
    return (
        <Router>
            <div className="App">
                <nav
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        textAlign: "center",
                    }}
                >
                    <ul>
                        <li>
                            <Link to="/cat-viewer">CatViewer</Link>
                        </li>
                        <li>
                            <Link to="/working-hour">WorkingHours</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/cat-viewer">
                        <CatViewer />
                    </Route>
                    <Route path="/working-hour">
                        <WorkingHours />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
