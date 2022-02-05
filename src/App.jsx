import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Layout from "./components/Layout";
import PrepareSign from "./pages/PrepareSign";

const Login = lazy(() => import("./pages/Login"))

function App() {
    return (
        <div className="max-w-[1500px] mx-auto">
            <Router>
                <Suspense fallback={ <>Loading</> }>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/login"/>
                        </Route>

                        <Route path={ "/login" } component={ Login }/>
                        <Route path={ "/inbox" } component={ Layout }/>
                        <Route path={ "/prepare-sign" } component={ PrepareSign }/>
                    </Switch>
                </Suspense>
            </Router>
        </div>
    )
}

export default App;