import { useEffect, useRef, useState } from "react"
import pokemonApi from "../hooks/pokemonApi"
import CardPokemon from "./CardPokemon"
import Paginate from "./Paginate"
import FormSearch from "./FormSearch"

const Pokemon = ({nameTrainer}) => {

  const [ data, getAllPokemons, getType ] = pokemonApi()
  const [ page, setPage ] = useState(1)
  const [ searchByName, setSearchByName] = useState('')
  const [ formType, setFormType ] = useState('')
  const ref = useRef()

  useEffect(() => {
    if(formType){
      getType(formType)
    }else{
      const url = 'https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0'
      getAllPokemons(url)
    }
  }, [formType])

   const handleChange = () => {
    setSearchByName(ref.current.value.trim().toLowerCase());
    setPage(1); 
  };


  const filteredData = data?.results?.filter(pokemon => 
    pokemon?.name?.includes(searchByName)
  );


  const quantity = 20;
  const total = Math.ceil(filteredData?.length / quantity);
  
  const paginatedData = () => {
    const end = quantity * page;
    const start = end - quantity;
    return filteredData?.slice(start, end);
  };

  const currentCharacters = paginatedData();

  return (
        <div className="card_main_box">
            <p className="card_name_trainer" >
              <span>Welcome {nameTrainer}, </span> 
              here you could find your favorite pokemon
            </p>
            
            <div className="card_box_forms">
              <form className="card_form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" onChange={handleChange} ref={ref} placeholder="Search a pokemon"/>
                <button>Search</button>
              </form> 

              <FormSearch setFormType={setFormType}/>
            </div>

            <div className="card_main">
              {currentCharacters?.length > 0 ? (
                currentCharacters.map((pokemon, index) => (
                  <CardPokemon key={index} pokemon={pokemon} />
                ))
              ) : (
                <p>No Pokémon found</p>
              )}
            </div>

            <Paginate 
              page={page}
              setPage={setPage}
              total={total}
            />
        </div>
  )
}

export default Pokemon