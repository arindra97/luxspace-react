import "assets/css/app.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "pages/HomePage";
import Details from "pages/Details";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/categories/:idc" element={<Details />} />
            </Routes>
        </div>
    );
}

export default App;
