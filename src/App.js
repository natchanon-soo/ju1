import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import About from "./components/About";
import Home from "./components/home";

import AppHeader from "./components/AppHeader";
import Main_131243 from "./components/Main_131243";
import Main_131239 from "./components/Main_131239";
import Appfooter from "./components/Appfooter";

import "./style.css";




function App() {

    return (
        <BrowserRouter>

            <div className="App">

                <AppHeader />

                <Routes>

                    {/* หน้าแรก */}
                    <Route
                        path="/"
                        element={
                            <Navigate
                                to="/home"
                                replace
                            />
                        }
                    />

                    <Route
                        path="/home"
                        element={<Home />}
                    />

                    {/* หมวด 131243 */}
                    <Route
                        path="/131243"
                        element={<Main_131243 />}
                    />


                    {/* หมวด 131239 */}
                    <Route
                        path="/131239"
                        element={<Main_131239 />}
                    />

                    <Route
                        path="/about"
                        element={<About />}
                    />


                    <Route
                        path="/about"
                        element={<About />}
                    />

                </Routes>

                <Appfooter />

            </div>

        </BrowserRouter>
    );

}

export default App;