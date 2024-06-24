import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import Pokemon from "../components/Pokemon"

const GetPokemonView = () => {

  const nameTrainer = useSelector((state) => state.nameTrainer)

  if(nameTrainer.length <= 3) return <Navigate to="/"/>

  if(nameTrainer.length >= 3) return (
    <div className="getPokemon_box">
      <Pokemon nameTrainer={nameTrainer}/>
    </div>
  )
}

export default GetPokemonView