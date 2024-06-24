import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from './layouts/AppLayout'
import GetPokemonView from "./views/GetPokemonView";
import AuthLahout from "./layouts/AuthLahout";
import Login from "./components/Login";
import PokemonName from "./components/PokemonName";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/pokedex" element={<GetPokemonView />}/>
                    <Route path="/pokedex/:name" element={<PokemonName />}/>
                </Route>

                <Route element={<AuthLahout />}>
                    <Route path="/" element={<Login />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}