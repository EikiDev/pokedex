import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./home-page";
import { PokemonPage } from "./pokemon-page";

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/pokedex" element={<HomePage />} />
            <Route exact path="/pokedex/pokemon/:id" element={<PokemonPage />} />
        </Routes>
    </BrowserRouter>
);