import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./home-page";
import { PokemonPage } from "./pokemon-page";

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/pokemon/:id" element={<PokemonPage />} />
        </Routes>
    </BrowserRouter>
);