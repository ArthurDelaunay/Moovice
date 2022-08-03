import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Popular from "./pages/Popular"
import Weekly from "./pages/Weekly"
import NotFound from "./pages/NotFound"

const App = () => {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/favorites">
                    <button>Favorites</button>
                </Link>
                <Link to="/popular">
                    <button>Popular</button>
                </Link>
                <Link to="/weekly">
                    <button>Weekly</button>
                </Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/popular" element={<Popular />} />
                <Route path="/weekly" element={<Weekly />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App
