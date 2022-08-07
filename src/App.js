import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Popular from "./pages/Popular"
import Weekly from "./pages/Weekly"
import NotFound from "./pages/NotFound"

import "./App.css"

const App = () => {
    return (
        <BrowserRouter>
            <header className="fixed z-50 h-16 flex justify-between px-8 items-center w-full border-b border-zinc-300">
                <NavLink to="/">
                    <h1 className="text-zinc-300 text-2xl font-semibold">
                        Moovice
                    </h1>
                </NavLink>
                <nav className="flex gap-5 text-zinc-50 text-xl">
                    <NavLink to="/" className="link">
                        <button className="hover:underline underline-offset-2">
                            Home
                        </button>
                    </NavLink>
                    <NavLink to="/favorites" className="link">
                        <button className="hover:underline underline-offset-2">
                            Favorites
                        </button>
                    </NavLink>
                    <NavLink to="/popular" className="link">
                        <button className="hover:underline underline-offset-2">
                            Popular
                        </button>
                    </NavLink>
                    <NavLink to="/weekly" className="link">
                        <button className="hover:underline underline-offset-2">
                            Weekly
                        </button>
                    </NavLink>
                </nav>
            </header>

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
