import axios from "axios"
import { useState } from "react"

const pokemonApi = () => {

    const [data, setData ] = useState([])

    function getAllPokemons(url){
        axios.get(url)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }

    function getType(url){
        axios.get(url)
            .then(res => setData({
                results: res.data.pokemon.map(
                    ( pokemon ) =>  pokemon.pokemon
                )
            }))
            .catch(err => console.log(err))
    }

    return [ data, getAllPokemons, getType ]
}


export default pokemonApi