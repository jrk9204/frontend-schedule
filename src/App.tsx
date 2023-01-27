import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import CatViewer from "./CatViewer";
import WorkingHours from "./WorkingHours";

const MainNav = styled.nav``;
const NavUl = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #b4b4b4;
    padding: 1rem 0;
`;

const NavUlLi = styled.li`
    margin: 0 2rem;
    font-size: 1.5rem;
    font-weight: bold;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:hover {
        color: blue;
    }
`;

function App() {
    return (
        <Router>
            <div className="App">
                <MainNav>
                    <NavUl>
                        <NavUlLi>
                            <NavLink to="/cat-viewer">Catviewer</NavLink>
                        </NavUlLi>
                        <NavUlLi>
                            <NavLink to="/working-hour">WorkingHours</NavLink>
                        </NavUlLi>
                    </NavUl>
                </MainNav>
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
